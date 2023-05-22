import AppLogo from "@/ui/AppLogo";
import { FiGithub, FiLinkedin, FiSlack } from "react-icons/fi";

const footerLinks = [
  {
    title: "Product",
    list: [
      {
        label: "Documentation",
        href: "https://docs.formzillion.com",
        target: "_blank",
      },
      {
        label: "Pricing",
        href: "/pricing",
        target: "_self",
      },
      {
        label: "Status",
        href: "https://formzillion.github.io/status/",
        target: "_blank",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        label: "Blog",
        href: "/blog",
        target: "_self",
      },
      {
        label: "Roadmap",
        href: "https://github.com/orgs/formzillion/projects/1",
        target: "_blank",
      },
      {
        label: "Terms",
        href: "/terms",
        target: "_self",
      },
      {
        label: "Privacy",
        href: "/privacy",
        target: "_self",
      },
    ],
  },
  {
    title: "Platforms",
    list: [
      {
        label: "Wordpress",
        href: "/platforms/wordpress",
        target: "_self",
      },
      {
        label: "Gatsby",
        href: "/platforms/gatsby",
        target: "_self",
      },
      {
        label: "Nextjs",
        href: "/platforms/nextjs",
        target: "_self",
      },
      {
        label: "Webflow",
        href: "/platforms/webflow",
        target: "_self",
      },
    ],
  },
  {
    title: "Features",
    list: [
      {
        label: "Spam Filtering",
        href: "https://docs.formzillion.com/features/spam-filtering",
        target: "_blank",
      },
      {
        label: "Redirects",
        href: "https://docs.formzillion.com/features/redirects",
        target: "_blank",
      },
      {
        label: "Collaboration",
        href: "https://docs.formzillion.com/features/collaboration",
        target: "_blank",
      },
      {
        label: "Exports",
        href: "https://docs.formzillion.com/features/exports",
        target: "_blank",
      },
      {
        label: "Email Notifications",
        href: "https://docs.formzillion.com/features/email-notifications",
        target: "_blank",
      },
      {
        label: "Autoresponders",
        href: "https://docs.formzillion.com/features/autoresponders",
        target: "_blank",
      },
    ],
  },
  {
    title: "Integrations",
    list: [
      {
        label: "Automate Slack Notifications for Form Submissions",
        href: "https://docs.formzillion.com/integrations/automate-slack-notifications-for-form-submissions",
        target: "_blank",
      },
      {
        label: "Automate Sendgrid to Send Emails",
        href: "https://docs.formzillion.com/integrations/automate-sendgrid-to-send-emails",
        target: "_blank",
      },
      {
        label: "Automate the Transfer of Form Data to Webhooks Endpoint",
        href: "https://docs.formzillion.com/integrations/automate-the-transfer-of-form-data-to-webhooks-endpoint",
        target: "_blank",
      },
      {
        label: "Automate Subscriber Addition to Mailerlite",
        href: "https://docs.formzillion.com/integrations/automate-subscriber-addition-to-mailerlite",
        target: "_blank",
      },
      {
        label: "Automate Ticket Creation in Freshdesk",
        href: "https://docs.formzillion.com/integrations/automate-ticket-creation-in-freshdesk",
        target: "_blank",
      },
      {
        label: "Automate Record Creation in Airtable",
        href: "https://docs.formzillion.com/integrations/automate-record-creation-in-airtable",
        target: "_blank",
      },
    ],
  },
];

const FooterIcons = [
  {
    icon: <FiLinkedin className="text-gray-400 hover:text-blue-800" />,
    url: "https://www.linkedin.com/company/formzillion/",
    hoverColor: "hover:border-blue-800 hover:text-blue-800",
  },
  {
    icon: <FiGithub className="text-gray-400 hover:text-white" />,
    url: "https://github.com/formzillion",
    hoverColor: "hover:border-white",
  },
  {
    icon: <FiSlack className="text-gray-400 hover:text-purple-900" />,
    url: "https://formzillion.slack.com/join/shared_invite/zt-1urntbbmb-o0d6Qzdl~GzfePoZE7JTYw",
    hoverColor: "hover:border-purple-800",
  },
];

export default function Footer() {
  return (
    <div className="relative border-t border-gray-800 bg-gray-900/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-8 text-white">
          {footerLinks.map((data: any, idx: number) => (
            <div key={idx} className="mt-4 md:mt-0">
              <p className="text-gray-300 text-base font-medium">
                {data.title}
              </p>
              <div className="gap-2 text-sm flex flex-col mt-4 text-gray-400">
                {data.list.map((item: any, index: number) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.target}
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center space-x-2">
          <span className="mr-2">Follow us</span>
          {FooterIcons.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`border border-gray-500 rounded-full h-8 w-8 flex justify-center items-center ${item.hoverColor}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2 sm:flex-row justify-center sm:justify-between w-full text-white py-3 mt-4 lg:mt-8 mb-8">
          <AppLogo />
          <p className="text-gray-300 leading-normal md:text-end text-sm sm::text-base">
            Copyright © 2023 Zillionstack Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
