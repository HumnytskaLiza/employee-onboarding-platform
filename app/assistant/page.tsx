"use client";

import Header from "../ui/header";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateChatPopup from "../ui/chat/create-new-chat";

export const dynamic = "force-dynamic";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const router = useRouter();
  return (
    <div>
      <Header name={"🤖 AI Assistant"} type="header" />
      <div
        className="flex flex-row justify-center items-center
      w-full h-[75vh] gap-2"
      >
        <Button
          buttonType="button"
          text="New Chat"
          type="main"
          onClick={() => setIsOpen(true)}
          svg="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
        />
        <Button
          text="Review Chat History"
          buttonType="button"
          type="secondary"
          onClick={() => router.push("/assistant/history")}
          svg="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
      </div>
      <CreateChatPopup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
