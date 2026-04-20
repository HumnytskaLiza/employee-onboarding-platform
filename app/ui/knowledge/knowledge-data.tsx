import { KnowledgeDataProps } from "@/lib/definitions";
import FolderElement from "./folder-element";
import FileElement from "./file-element";

export default async function knowledgeData({
  elementsFolders,
  elementsFiles,
}: KnowledgeDataProps) {
  return (
    <div
      className={
        elementsFolders.length > 0 || elementsFiles.length > 0
          ? "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          : "flex justify-center items-center h-[80%]"
      }
    >
      {elementsFolders.map((element) => (
        <FolderElement
          key={element.id}
          name={element.name}
          createdDate={element.created_date}
          uniqueId={element.unique_id}
          colorHex={element.colorHex}
        />
      ))}

      {elementsFiles.map((element, id) => (
        <FileElement
          key={element.id}
          name={element.name}
          createdDate={element.created_date}
          uniqueId={element.unique_id}
        />
      ))}

      {elementsFolders.length === 0 && elementsFiles.length === 0 && (
        <div className="flex flex-col gap-4 text-center font-medium text-gray-500">
          <span>No files has been added yet...</span>
          <span>Create a new folder or add a file here</span>
        </div>
      )}
    </div>
  );
}
