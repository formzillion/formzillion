import { NextApiRequest, NextApiResponse } from "next";
import { isEmpty, kebabCase } from "lodash";
import prisma from "@/lib/prisma";
import getUserSession from "../userSession/getUserSession";
import { createBillingUserAndSubscription } from "../auth/register";
import { sendEmail } from "@/lib/sendEmail";
import { invitationEmail } from "./invitationEmail";
import { getToken } from "@/utils/tokenService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { currentUser = {} } = await getUserSession(req, res);
  const { email: currentUserEmail, fullName } = currentUser;

  let { name, emailsToInvite } = JSON.parse(req.body);
  if (isEmpty(emailsToInvite)) {
    emailsToInvite = currentUserEmail;
  }

  const emails = emailsToInvite.includes(",")
    ? emailsToInvite.split(",")
    : [emailsToInvite];
  try {
    const existingUsers = await prisma.users.findMany({
      where: {
        email: {
          in: emails,
        },
      },
    });

    const existingEmails = existingUsers.map((user: any) => user.email);
    const newEmails = emails.filter(
      (email: any) => !existingEmails.includes(email)
    );
    const { customerId, planName, planId } =
      await createBillingUserAndSubscription({
        email: currentUser?.email,
        fullName: `${name}-${currentUser.fullName}`,
      });

    const team = await prisma.teams.create({
      data: {
        name,
        slug: kebabCase(name),
        billingCustomerId: customerId,
        planName,
        planId,
        users: {
          connect: [
            ...existingUsers.map((user: any) => ({ id: user.id })),
            { id: currentUser?.id },
          ],
        },
      },
    });

    await prisma.memberships.create({
      data: {
        teamId: team.id,
        userId: currentUser?.id,
        accepted: true,
        role: "OWNER",
      },
    });
    for (const user of existingUsers) {
      if (user.id !== currentUser.id) {
        await prisma.memberships.create({
          data: {
            teamId: team.id,
            userId: user.id,
            accepted: true,
            role: "MEMBER",
          },
        });
      }
    }

    await prisma.team_invitations.createMany({
      data: newEmails.map((email: any) => ({
        email,
        teamId: team.id,
      })),
    });

    if (!newEmails) {
      for (const email of newEmails) {
        const token = await getToken({ length: 36, email });
        await sendEmail({
          provider: "sendgrid",
          toEmail: email,
          subject: "Team Invitation",
          html: invitationEmail({
            inviterEmail: currentUserEmail,
            inviterName: fullName,
            toEmail: email,
            teamId: team.id,
            token,
          }),
        });
      }
    }

    res.status(201).json({ success: true, data: team });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
}
