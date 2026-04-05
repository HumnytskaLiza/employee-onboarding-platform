"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  { name: "Employees", href: "/employees" },
  {
    name: "Knowledge Base",
    href: "/knowledge",
  },
  {
    name: "AI Assistant",
    href: "/assistant",
  },
  {
    name: "Journeys",
    href: "/journeys",
  },
  {
    name: "Calendar",
    href: "/calendar",
  },
];

export default function NavLinks() {
  const [selectedLink, setSelectedLink] = useState("Dashboard");

  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <Link key={link.name} href={link.href} passHref>
          <div
            onClick={() => setSelectedLink(link.name)}
            className={`border-gray-300 border-t p-2 text-sm font-medium m-0 
        hover:bg-gray-100 md:flex-none md:justify-start md:p-4 md:px-3
        ${link.name === selectedLink ? "bg-gray-200" : ""}`}
          >
            <p className="hidden md:block">{link.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
