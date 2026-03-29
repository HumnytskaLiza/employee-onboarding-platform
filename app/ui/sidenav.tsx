import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col w-40 md:w-50 lg:w-80 bg-gray-50 border-r border-gray-300">
      <div className="h-14 p-3 items-center flex">
        <svg height="16" viewBox="0 0 16 16" width="16">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
