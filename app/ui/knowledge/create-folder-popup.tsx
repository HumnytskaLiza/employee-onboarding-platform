"use client";

import { useState, useTransition } from "react";
import Button from "../button";
import Header from "../header";
import { Color } from "@/lib/definitions";
import { createFolderAction } from "@/lib/actions";

type CreateFolderPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  colors: Color[];
  unique_id?: string;
};

export default function CreateFolderPopup({
  isOpen,
  onClose,
  colors,
  unique_id,
}: CreateFolderPopupProps) {
  const [inputsData, setInputsData] = useState({
    name: "",
    color_id: colors[0].unique_id,
    parent_id: unique_id ? unique_id : null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsData((data) => ({ ...data, [name]: value }));
    console.log(inputsData);
  };

  const [isPending, startTransition] = useTransition();

  if (!isOpen) return null;

  return (
    <div className="relative z-10" onClick={onClose}>
      <div className="fixed inset-0 bg-gray-500/20 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          onClick={onClose}
        >
          <form
            className=" border border-gray-300 relative transform overflow-hidden rounded-l bg-white text-left sm:my-8 sm:w-full sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col gap-4 m-3">
                <Header name={"📂 Add A New Folder"} type="subheader" />
                <input
                  required
                  id="name"
                  name="name"
                  aria-label="name"
                  onChange={handleInputChange}
                  placeholder="Folder Name"
                  className="block w-full outline-gray-300 outline rounded-md bg-white/5 px-3 py-1.5 text-base   -outline-offset-1  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"
                />
                <input
                  type="hidden"
                  name="color_id"
                  value={inputsData.color_id}
                />
                <input
                  type="hidden"
                  name="parent_id"
                  value={inputsData.parent_id ?? ""}
                />
                <div className="flex flex-row gap-2 mt-2">
                  {colors.map((color) => {
                    return (
                      <button
                        type="button"
                        key={color.unique_id}
                        name={color.name}
                        style={{ backgroundColor: color.hex }}
                        onClick={() =>
                          setInputsData((data) => ({
                            ...data,
                            color_id: color.unique_id,
                          }))
                        }
                        className={`w-9 h-9 rounded-4xl cursor-pointer ${
                          inputsData.color_id === color.unique_id
                            ? "border border-gray-400 ring-2 ring-gray-300"
                            : ""
                        }`}
                      ></button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
              <Button
                onClick={() => {
                  startTransition(async () => {
                    await createFolderAction(inputsData);
                    onClose();
                  });
                }}
                text={isPending ? "Creating..." : "Create"}
                type="main"
                buttonType="button"
              />
              <Button
                onClick={onClose}
                text="Cancel"
                type="secondary"
                buttonType="button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
