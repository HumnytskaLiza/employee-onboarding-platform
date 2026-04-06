"use client";

import { useState } from "react";
import Button from "../button";
import CreateUserPopup from "./create-user-popup";

export default function UtilityBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="flex flex-row w-fit gap-2">
      <Button
        onClick={handleOpen}
        text="Add Employee"
        buttonType="button"
        type="main"
        svg="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
      />
      <Button
        text="Sort By"
        buttonType="button"
        type="secondary"
        svg="M8.74999 1.75V1H7.24999V1.75V12.4393L3.28032 8.46967L2.74999 7.93934L1.68933 9L2.21966 9.53033L7.29288 14.6036C7.68341 14.9941 8.31657 14.9941 8.7071 14.6036L13.7803 9.53033L14.3107 9L13.25 7.93934L12.7197 8.46967L8.74999 12.4393V1.75Z"
      />

      <CreateUserPopup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
