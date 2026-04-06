// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";

// type BreadcrumbsProps = {
//   url: string;
// };

// export default function Breadcrumbs({ url }: BreadcrumbsProps) {
//   const currPathArr = usePathname().slice(1).split("/");

//   const uniqueId = currPathArr[1];

//   const urlArr = url
//     .slice(1)
//     .split("/")
//     .map((e) => e.charAt(0).toUpperCase() + e.slice(1));

//   return <div></div>;

// return (
//   <ul className="w-full flex gap-4 items-center text-xs">
//     <p className="text-amber-300">{uniqueId}</p>
//     <li key={0} className="flex gap-4 cursor-pointer">
//       <Link href="/">Dashboard</Link>
//     </li>
//     {uniqueId && (
//       <li key={1} className="flex gap-4 cursor-pointer">
//         <p className="text-gray-400">{">"}</p>
//         <Link href="/knowledge">Knowledge</Link>
//       </li>
//     )}
//     {pathNames &&
//       pathNames.map((page, index) => {
//         return (
//           <li key={`breadcrumb-${index + 2}`} className="flex gap-4">
//             <p className="text-gray-400">{">"}</p>
//             {index === pathNames.length - 1 ? (
//               <div className="">{page}</div>
//             ) : (
//               <div className="text-gray-400 cursor-pointer">
//                 <Link href={`/knowldedge/${uniqueId}`}>{page}</Link>
//               </div>
//             )}
//           </li>
//         );
//       })}{" "}
//     {/* {!uniqueId &&
//       urlArr.map((page, index) => {
//         const href = "/" + currPathArr.slice(0, index + 1).join("/");
//         return (
//           <li key={`breadcrumb-${index}`} className="flex gap-4">
//             <p className="text-gray-400">{">"}</p>
//             {index === urlArr.length - 1 ? (
//               <div className="">{page}</div>
//             ) : (
//               <div className="text-gray-400 cursor-pointer">
//                 <Link href={href}>{page}</Link>
//               </div>
//             )}
//           </li>
//         );
//       })} */}
//   </ul>
// );
// }
