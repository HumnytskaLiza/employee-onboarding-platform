import Link from "next/link";
import styles from "@/app/ui/modules/knowledge.module.css";

type FileElementProps = {
  name: string;
  createdDate: Date;
  uniqueId: string;
};

export default function FileElement({
  name,
  createdDate,
  uniqueId,
}: FileElementProps) {
  const maxLength = 16;
  const labelName =
    name.length > maxLength ? name.slice(0, maxLength) + "…" : name;

  const labelDate = createdDate.toLocaleDateString("uk-UA");

  return (
    <Link href={`/knowledge/file-preview/${uniqueId}`} className={styles.file}>
      <div>
        <svg
          viewBox="1 3 30 25"
          preserveAspectRatio="none"
          className={`${styles.file}`}
        >
          <g>
            <path
              fill="#e6e6e6"
              transform="rotate(-90 16 16) matrix(1, 0, 0, -1, 0, 32)"
              className={`${styles["file-main"]}`}
              d="M26.76,8.35L26.46,8L21,1.63l-0.24-0.28C20.57,1.13,20.29,1,20,1h-1H6C5.45,1,5,1.45,5,2v28 c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V10V9C27,8.76,26.92,8.53,26.76,8.35z"
            ></path>

            <g>
              <path
                transform="rotate(-90 16 16) matrix(1, 0, 0, -1, 0, 32)"
                fill="#e6e6e6"
                className={`${styles.dark} ${styles["file-dark"]}`}
                id="file"
                d="M27,9v1h-7c-0.55,0-1-0.45-1-1V1h1c0.29,0,0.57,0.13,0.76,0.35L21,1.63L26.46,8l0.3,0.35 C26.92,8.53,27,8.76,27,9z"
              ></path>
            </g>
          </g>
          <text
            x="3"
            y="20"
            textAnchor="start"
            dominantBaseline="middle"
            fontSize="2"
            className="uppercase"
          >
            {labelDate}
          </text>
          <text
            x="3"
            y="24"
            textAnchor="start"
            dominantBaseline="middle"
            fontSize="2.2"
            className="font-medium"
          >
            {labelName}
          </text>
          <svg height="4" width="4" viewBox="0 0 32 32" x="3" y="7">
            <g className={styles["more-btn"]}>
              <rect width="32" height="32" rx="16" fill="white" />
              <g transform="translate(8, 8)">
                <path
                  d="M8 4C7.17157 4 6.5 3.32843 6.5 2.5C6.5 1.67157 7.17157 1 8 1C8.82843 1 9.5 1.67157 9.5 2.5C9.5 3.32843 8.82843 4 8 4ZM8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5ZM6.5 13.5C6.5 14.3284 7.17157 15 8 15C8.82843 15 9.5 14.3284 9.5 13.5C9.5 12.6716 8.82843 12 8 12C7.17157 12 6.5 12.6716 6.5 13.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
        </svg>
      </div>
    </Link>
  );
}

// <svg
//   viewBox="0 0 32.00 32.00"
//   enable-background="new 0 0 32 32"
//   version="1.1"
//   xml:space="preserve"
//   xmlns="http://www.w3.org/2000/svg"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   fill="#000000"
//   transform="rotate(90)matrix(-1, 0, 0, 1, 0, 0)"
//   stroke="#000000"
//   stroke-width="0.16"
// >
//   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//   <g
//     id="SVGRepo_tracerCarrier"

//   ></g>
//   <g id="SVGRepo_iconCarrier">
//     {" "}
//     <g id="Files_Folder40"></g> <g id="Files_Folder39"></g>{" "}
//     <g id="Files_Folder38"></g> <g id="Files_Folder37"></g>{" "}
//     <g id="Files_Folder36"></g> <g id="Files_Folder35"></g>{" "}
//     <g id="Files_Folder34"></g> <g id="Files_Folder33"></g>{" "}
//     <g id="Files_Folder32"></g> <g id="Files_Folder31"></g>{" "}
//     <g id="Files_Folder30"></g> <g id="Files_Folder29"></g>{" "}
//     <g id="Files_Folder28"></g> <g id="Files_Folder27"></g>{" "}
//     <g id="Files_Folder26"></g> <g id="Files_Folder25"></g>{" "}
//     <g id="Files_Folder24"></g> <g id="Files_Folder23"></g>{" "}
//     <g id="Files_Folder22"></g> <g id="Files_Folder21"></g>{" "}
//     <g id="Files_Folder20"></g> <g id="Files_Folder19"></g>{" "}
//     <g id="Files_Folder18"></g> <g id="Files_Folder17"></g>{" "}
//     <g id="Files_Folder16"></g> <g id="Files_Folder15"></g>{" "}
//     <g id="Files_Folder14"></g> <g id="Files_Folder13"></g>{" "}
//     <g id="Files_Folder12"></g> <g id="Files_Folder11"></g>{" "}
//     <g id="Files_Folder10">
//       {" "}
//       <g>
//         {" "}
//         <path
//           d="M26.76,8.35L26.46,8L21,1.63l-0.24-0.28C20.57,1.13,20.29,1,20,1h-1H6C5.45,1,5,1.45,5,2v28 c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V10V9C27,8.76,26.92,8.53,26.76,8.35z"
//           fill="#FFC10A"
//         ></path>{" "}
//         <g>
//           {" "}
//           <path
//             d="M27,9v1h-7c-0.55,0-1-0.45-1-1V1h1c0.29,0,0.57,0.13,0.76,0.35L21,1.63L26.46,8l0.3,0.35 C26.92,8.53,27,8.76,27,9z"
//             fill="#FE9803"
//           ></path>{" "}
//         </g>{" "}
//       </g>{" "}
//     </g>{" "}
//     <g id="Files_Folder09"></g> <g id="Files_Folder08"></g>{" "}
//     <g id="Files_Folder07"></g> <g id="Files_Folder06"></g>{" "}
//     <g id="Files_Folder05"></g> <g id="Files_Folder04"></g>{" "}
//     <g id="Files_Folder03"></g> <g id="Files_Folder02"></g>{" "}
//     <g id="Files_Folder01"></g>{" "}
//   </g>
// </svg>;
