import React from "react";
import Image from "next/image";
import Example from "./Example";

export default function DynamicSection({
  params,
}: {
  params: { slug: string };
}) {
  const dynamicData = [
    {
      slug: "wordpress",
      imageUrl: "/logos/wordpress.png",
      description: "A backend for your Wordpress forms",
      title: "Getting started with WordPress is simple",
    },
    {
      slug: "gatsby",
      imageUrl: "/logos/gatsby.png",
      description: "A backend for your Gatsby forms",
      title: "Getting started with gatsby is simple",
    },
    {
      slug: "nextjs",
      imageUrl: "/logos/nextjs.png",
      description: " A backend for your Next.js forms",
      title: "Getting started with Next.js is simple",
    },
    {
      slug: "webflow",
      imageUrl: "/logos/webflow.svg",
      description: " A backend for your Webflow forms",
      title: "Getting started with Webflow is simple",
    },
  ];
  const staticData = [
    {
      title: "Start collecting submissions with Formzillion ",
      description:
        "<ul><li>Start collecting data in a matter of clicks.</li><li>Let formzillion take care of the servers, databases,and analytics </li><li>Set up any form in seconds.</li></ul>",
    },
  ];
  const dynamicContent = dynamicData.find(
    (content) => content.slug === params.slug
  );
  if (!dynamicContent) {
    return <div>Invalid slug</div>;
  }
  return (
    <>
      <section className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        <div className="relative flex flex-col justify-center content-center items-center rounded-md text-center mt-10">
          <div className="w-full h-full flex flex-col pb-20 px-10 justify-center items-center ">
            {/* <Image
              alt="hero"
              src={dynamicContent.imageUrl}
              height={80}
              width={80}
              className="object-scale-down h-20 w-30 object-center rounded"
            /> */}
            <div className=" text-xl font-medium leading-normal">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 text-white font-semibold mt-8">
                <div
                  dangerouslySetInnerHTML={{
                    __html: dynamicContent.description,
                  }}
                />
              </h1>
              <div className="flex flex-row justify-center mt-10">
                <a
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer inline-flex text-center text-sm px-4 py-2 leading-none text-white bg-orange-600 hover:bg-orange-700 mt-4 lg:mt-0   h-[40px] ml-2 items-center content-center justify-center"
                >
                  Try Formzillion its free
                </a>
                <a
                  href="https://docs.formzillion.com/"
                  className="cursor-pointer ml-8 inline-flex text-center text-sm px-4 py-2 leading-none border text-white border-white hover:text-orange-600 mt-4 lg:mt-0 w-[150px] h-[40px] hover:border-orange-600 items-center justify-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-medium leading-normal p-10 bg-gray-400/10 rounded-xl grid grid-cols-6">
          <div className="flex items-center">
            <Image
              alt="hero"
              src={dynamicContent.imageUrl}
              height={80}
              width={80}
              className="object-scale-down h-20 w-30 object-center rounded"
            />
          </div>
          <div className="col-span-5 flex  flex-col">
            <h1 className="title-font text-xl sm:text-3xl mb-4 text-white font-semibold ">
              {dynamicContent.title}
            </h1>

            {staticData.map((data, index) => (
              <div key={index} className="leading-8 mt-4 font-normal">
                <ul className="list-disc space-y-3 pl-7">
                  <li>Start collecting data in a matter of clicks.</li>
                  <li>
                    Let formzillion take care of the servers, databases,and
                    analytics{" "}
                  </li>
                  <li>Set up any form in seconds.</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Example slug={params.slug} />
    </>
  );
}
