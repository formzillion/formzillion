"use client";
import React, { useState } from "react";

import updateTeam from "@/app/fetch/teams/updateTeam";
import Header from "@/ui/Header";
import { Input } from "@/ui/Input/SimpleInput";
import CardFooter from "@/ui/CardFooter";
import Heading from "./Heading";
import { showErrorToast, showSuccessToast } from "@/ui/Toast/Toast";
import { useRouter } from "next/navigation";

const TeamName = ({ teamSlug }: any) => {
  const router = useRouter();
  const parsedTeam = JSON.parse(teamSlug);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<any>(false);

  const handleNameChange = async () => {
    if (name.length >= 5) {
      setLoading(true);
      const response: any = await updateTeam({
        teamName: name,
        teamSlug: parsedTeam.slug,
        type: "updateName",
      });
      if (response.success) {
        showSuccessToast("Team Name updated successfully");
        setLoading(false);
        router.refresh();
      } else {
        showErrorToast(response.message);
      }
    } else {
      showErrorToast("Minimum length is 5 characters");
    }
  };

  return (
    <>
      <div className="p-4 px-6 divide-y divide-gray-300 ">
        <Header title={"General"} />
        <div className="pt-4">
          <Heading
            title={"Team Name"}
            description="This is the name that will be displayed for your team on Formzillion, which can be the name of your client, company, or department."
          />
          <div className="flex items-center space-x-2 my-3">
            <Input
              type="text"
              className="border px-3 py-2 dark:bg-black dark:border-gray-800"
              defaultValue={parsedTeam.name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
            />
          </div>
        </div>
      </div>
      <CardFooter
        title={"Please use 40 characters at maximum."}
        btnText={"Save"}
        onClick={handleNameChange}
        loading={loading}
      />
    </>
  );
};

export default TeamName;
