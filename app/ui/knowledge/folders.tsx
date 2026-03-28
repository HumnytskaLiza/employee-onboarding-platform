import { nanoid } from "nanoid";
import folderSvg from "../../../public/folder.svg";
import Image from "next/image";
import styles from "@/app/ui/modules/knowledge.module.css";

const folders = [
  {
    name: "Developer Knowledge",
    color: "red",
    type: "role-based",
    createdDate: "26.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "Designer Knowledge",
    color: "yellow",
    type: "role-based",
    createdDate: "25.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "HR Knowledge",
    color: "purple",
    type: "corporate",
    createdDate: "28.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "Company Policy",
    color: "blue",
    type: "corporate",
    createdDate: "26.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "Designer Knowledge",
    color: "yellow",
    type: "role-based",
    createdDate: "22.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "HR Knowledge",
    color: "purple",
    type: "corporate",
    createdDate: "22.03.2026",
    parentId: null,
    id: nanoid(16),
  },
  {
    name: "Company Policy",
    color: "blue",
    type: "corporate",
    createdDate: "22.03.2026",
    parentId: null,
    id: nanoid(16),
  },
];

// function addFolder(type, color) {}

export default function Folders() {
  return (
    <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {folders.map((folder) => {
        const maxLength = 16;
        const labelName =
          folder.name.length > maxLength
            ? folder.name.slice(0, maxLength) + "…"
            : folder.name;

        const labelDate =
          folder.createdDate.length > maxLength
            ? folder.createdDate.slice(0, maxLength) + "…"
            : folder.createdDate;
        return (
          <a
            key={folder.id}
            href={`/knowledge/${folder.id}`}
            className="hover:brightness-85 duration-100"
          >
            <div>
              <svg
                className={`${styles.folder}`}
                viewBox="0 0 32 32"
                preserveAspectRatio="none"
              >
                <g>
                  <path
                    className={`${styles[folder.color]} ${styles.dark}`}
                    d="M28,7v3c0,0.55-0.45,1-1,1H16c-0.35,0-0.68-0.18-0.86-0.49l-1.8-3c-0.1801-0.3-0.19-0.69-0.01-1 C13.51,6.19,13.84,6,14.2,6H27C27.55,6,28,6.45,28,7z"
                  ></path>
                </g>
                <g>
                  <path
                    className={styles[folder.color]}
                    d="M31,10v17c0,0.55-0.45,1-1,1H2c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h11c0.35,0,0.68,0.18,0.86,0.49 L16.57,9H30C30.55,9,31,9.45,31,10z"
                  ></path>
                </g>
                <text
                  x="3"
                  y="21"
                  textAnchor="start"
                  dominantBaseline="middle"
                  fontSize="2"
                  className="uppercase"
                >
                  {labelDate}
                </text>
                <text
                  x="3"
                  y="25"
                  textAnchor="start"
                  dominantBaseline="middle"
                  fontSize="2.2"
                  className="uppercase font-semibold"
                >
                  {labelName}
                </text>
              </svg>
            </div>
          </a>
        );
      })}
    </div>
  );
}
