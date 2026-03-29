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
    name: "Calendar",
    href: "/calendar",
  },
];

export default function NavLinks() {
  return (
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="border-gray-300 border-t p-2 text-sm font-medium m-0 
            hover:bg-gray-100 md:flex-none md:justify-start md:p-4 md:px-3
            "
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
}
