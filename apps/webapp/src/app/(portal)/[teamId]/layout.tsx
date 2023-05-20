import React from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserDetail } from "@/utils/getUserDetail";
import PrimaryNav from "./PrimaryNav";
import { get } from "lodash";

export default async function TeamLayout({ children, params }: any) {
  const { teamId: finalTeamId }: any = params;
  const user: any = await getUserDetail();
  const allForms = await prisma.forms.findMany({
    where: { team: { slug: finalTeamId } },
    orderBy: {
      createdAt: "desc",
    },
  });
  const forms = JSON.parse(JSON.stringify(allForms));
  const formId = forms?.map((item: any) => item.id);

  const teamIds = [...user?.teams?.map((team: any) => team.slug), "dashboard"];

  if (!teamIds?.includes(finalTeamId)) {
    notFound();
  }

  const team = user?.teams?.filter((team: any) => team.slug === finalTeamId);
  const teamType = get(team, "0.type", "");
  const tabs = [
    { name: "Forms", path: `/`, targetSegment: null },
    {
      name: "Apps",
      path: "apps",
      targetSegment: "apps",
    },
    {
      name: "Usage",
      path: "usage",
      targetSegment: "usage",
    },
    {
      name: "Activity",
      path: "activity",
      targetSegment: "activity",
    },
    {
      name: "Settings",
      path: teamType === "personal" ? `settings` : `team/settings`,
      targetSegment: teamType === "personal" ? `settings` : `team`,
    },
  ];
 
  return (
    <>
      {/* <PrimaryNav tabs={tabs} finalTeamId={finalTeamId} formId={formId} /> */}
      {children}
    </>
  );
}
