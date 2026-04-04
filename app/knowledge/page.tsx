import { fetchParentFolders } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";

import Folders from "../ui/knowledge/folders";
import Header from "../ui/header";
import UtilityBar from "../ui/knowledge/utility-bar";

export default async function Page() {
  const folders = await fetchParentFolders();
  const foldersWithColors = await getFolderColor(folders);

  return (
    <div>
      <Header name="📔 Knowledge Base" />
      <UtilityBar />
      <Folders elements={foldersWithColors} />
    </div>
  );
}
