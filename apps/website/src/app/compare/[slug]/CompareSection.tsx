import { CheckIcon, MinusIcon } from "@heroicons/react/24/solid";
import { camelCase, startCase, toLower } from "lodash";
import React, { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function CompareSection({ slug }: any) {
  const dynamicData = [
    {
      slug: "FormSpree",
      imageUrl: "/logos/wordpress.png",
    },
    {
      slug: "Basin",
      imageUrl: "/logos/gatsby.png",
    },
    {
      slug: "Formcarry",
      imageUrl: "/logos/nextjs.png",
    },
    {
      slug: "Getform",
      imageUrl: "/logos/webflow.svg",
    },
    {
      slug: "Formspark",
      imageUrl: "/logos/webflow.svg",
    },
  ];
  const application: any = [
    {
      name: "Formzillion",
      id: "formzillion",
      imageUrl: "/logos/webflow.svg",
      mostPopular: true,
    },
  ];
  dynamicData.map((app) => {
    toLower(app.slug) == slug
      ? application.push({
          name: app.slug,
          id: camelCase(app.slug),
          imageUrl: app.imageUrl,
          mostpopular: false,
        })
      : "";
  });
  const sections: any = [
    {
      name: "",
      features: [
        {
          name: "Open Source",
          apps: {
            Formzillion: true,
          },
        },
        {
          name: "Price",
          apps: {
            Formzillion: "5-100 $/month",
            FormSpree: "10-102 $ /month",
            Formcarry: "19-99 $ /month",
            Basin: "12-108 $ /month",
            Getform: "12-99 $ /month",
            Formspark: "25$ lifetime",
          },
        },
        {
          name: "Monthly Submissions",
          apps: {
            Formzillion: "5 to Unlimited",
            FormSpree: "5 to 100",
            Formcarry: "Unlimited",
            Basin: "10-250",
            Getform: "5 to Unlimited",
            Formspark: "Unlimited",
          },
        },
        {
          name: "Monthly Submissions",
          apps: {
            Formzillion: "Up to 30,000",
            FormSpree: "Up to 10,000",
            Formcarry: "Up to 40,000",
            Basin: "Up to 25,000",
            Getform: "Up to 100,000",
            Formspark: "50,000 life time",
          },
        },
        {
          name: "File Uploads",
          apps: {
            Formzillion: "Up to 25GB",
            FormSpree: "Up to 10GB",
            Formcarry: "Up to 15GB",
            Basin: "Up to 50GB",
            Getform: "Up to 10GB",
          },
        },
        {
          name: "Submission Export",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Autoresponses",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: false,
          },
        },
        {
          name: "Form Sharing",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Advanced Spam Filtering",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Custom Honeypot",
          apps: {
            Formzillion: "All paid plans",
            FormSpree: "Business plan",
            Basin: "All paid plans",
            Formspark: "All plans",
          },
        },
        {
          name: "Custom Redirect",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Ajax Forms",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Third-party Integrations",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Custom Webhooks",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: "Zapier only",
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Submissions API",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
        {
          name: "Priority Support",
          apps: {
            Formzillion: true,
            FormSpree: true,
            Formcarry: true,
            Basin: true,
            Getform: true,
            Formspark: true,
          },
        },
      ],
    },
  ];

  return (
    <div className="bg-black py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-normal leading-snug">
            Why is
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Formzillion
            </span>{" "}
            is a better alternative to {startCase(slug)}?
          </h1>
        </div>
        <div className="isolate mt-20 ">
          <div className="relative -mx-8">
            <div className="absolute inset-y-0 inset-x-4 -z-10 flex">
              <div
                className="flex w-1/3 px-4"
                aria-hidden="true"
                style={{
                  marginLeft: `${
                    (application.findIndex((app: any) => app.mostPopular) + 1) *
                    33.333
                  }%`,
                }}
              >
                <div className="w-full rounded-xl border-x border-y border-white/10 bg-gray-400/5" />
              </div>
            </div>
            <table className="w-full table-fixed border-separate border-spacing-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/3" />
                <col className="w-1/3" />
                <col className="w-1/3" />
                {/* <col className="w-1/3" /> */}
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {application.map((app: any) => (
                    <th
                      key={app.id}
                      scope="col"
                      className="px-6 pt-6 xl:px-8 xl:pt-8"
                    >
                      <div className="text-lg font-semibold leading-7 text-center text-white">
                        {app.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section: any, sectionIdx: any) => (
                  <Fragment key={section.name}>
                    {section.features.map((feature: any) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className=" text-sm font-normal leading-6 text-gray-400 flex justify-center"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 h-px bg-black/5" />
                        </th>
                        {application.map((app: any) => (
                          <td key={app.id} className="px-6 xl:px-8">
                            {typeof feature.apps[startCase(app.id)] ===
                            "string" ? (
                              <div className="text-center text-sm leading-6 text-white">
                                {feature.apps[startCase(app.id)]}
                              </div>
                            ) : (
                              <>
                                {feature.apps[startCase(app.id)] === true ? (
                                  <>
                                    <CheckIcon
                                      className="mx-auto h-5 w-5 text-orange-600"
                                      aria-hidden="true"
                                    />
                                  </>
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.apps[startCase(app.id)] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {app.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
