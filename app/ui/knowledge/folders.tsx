import styles from "@/app/ui/modules/knowledge.module.css";
import Link from "next/link";
import { FoldersProps } from "@/lib/definitions";

export default async function Folders({ elements }: FoldersProps) {
  return (
    <div
      className={
        elements.length > 0
          ? "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          : "flex justify-center items-center h-[80%]"
      }
    >
      {elements.length > 0 ? (
        elements.map((element) => {
          const maxLength = 16;
          const labelName =
            element.name.length > maxLength
              ? element.name.slice(0, maxLength) + "…"
              : element.name;

          const labelDate = element.created_date.toLocaleDateString("uk-UA");
          return (
            <Link
              key={element.id}
              href={`/knowledge/${element.unique_id}`}
              className={styles.folder}
            >
              <div>
                <svg
                  className={`${styles.folder}`}
                  viewBox="1 4 30 24"
                  preserveAspectRatio="none"
                >
                  <g>
                    <path
                      fill={element.colorHex}
                      className={`${styles.dark} ${styles["folder-dark"]}`}
                      d="M28,7v3c0,0.55-0.45,1-1,1H16c-0.35,0-0.68-0.18-0.86-0.49l-1.8-3c-0.1801-0.3-0.19-0.69-0.01-1 C13.51,6.19,13.84,6,14.2,6H27C27.55,6,28,6.45,28,7z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill={element.colorHex}
                      className={`${styles["folder-main"]}`}
                      id="folder"
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
                    className="font-medium"
                  >
                    {labelName}
                  </text>
                  <svg height="4" width="4" viewBox="0 0 32 32" x="3" y="6">
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
        })
      ) : (
        <div className="flex flex-col gap-4 text-center font-medium text-gray-500">
          <span>No files has been added yet...</span>
          <span>Create a new folder or add a file here</span>
        </div>
      )}
    </div>
  );
}
