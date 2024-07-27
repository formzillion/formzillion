"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/Dialog";
import { Input } from "@/ui/Input/SimpleInput";
import Button from "@/ui/Buttons";
import { showErrorToast, showSuccessToast } from "@/ui/Toast/Toast";
import deleteForm from "@/app/fetch/forms/deleteForm";

export default function DeleteModal({ closeModal, formDetail, redirect }: any) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isConfirmed, setIsConfirmed] = useState("");

  const formName = formDetail.name;

  const handleSubmission = async () => {
    setLoading(true);
    if (isConfirmed === formName) {
      const response = await deleteForm({ formId: formDetail.id });
      if (response.success) {
        showSuccessToast("Form deleted successfully");
      } else {
        showErrorToast(`Failed to delete Form`);
      }
      setLoading(false);
      router.refresh();
      router.push(redirect);
    } else {
      setLoading(false);
      showErrorToast("Please Enter the Form Name to continue");
    }
  };

  const onChangeField = (e: any) => {
    const { value } = e.target;
    setIsConfirmed(value);
  };

  return (
    <Dialog open={closeModal} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Form</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            {`If you click on 'continue', the selected form will be deleted, along with all workflows, connected apps & settings.`}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2">
          <div
            className="bg-red-100 dark:bg-red-600 dark:text-red-50 shadow border border-red-600 text-red-700 px-4 py-2 rounded relative"
            role="alert"
          >
            <strong className="font-bold text-sm">Warning! </strong>
            <span className="block sm:inline text-sm">
              Please be aware that this action is irreversible. Please ensure
              that you are certain before proceeding.
            </span>
          </div>
          <div className="space-y-2 text-sm py-4 text-gray-600 dark:text-gray-300">
            <label htmlFor="name">
              {`Enter the form name`} <b>{`${formName}`}</b> {`to continue`}
            </label>

            <Input
              type="text"
              name="name"
              id="name"
              onChange={onChangeField}
              required
              autoFocus
              className="dark:boder border-gray-300"
              autoComplete="off"
            />
          </div>
        </div>
        <DialogFooter className="border-t border-gray-200 dark:border-gray-700">
          <div className="space-x-4 flex mt-2">
            <button
              className="bg-transparent border border-gray-300 text-black rounded-none min-w-[80px] dark:text-gray-300 dark:border-gray-500"
              onClick={closeModal}
              type="submit"
            >
              Cancel
            </button>
            <Button
              loading={loading}
              className="bg-orange-600 text-white rounded-none min-w-[80px]"
              onClick={handleSubmission}
              type="submit"
            >
              Continue
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
