import { fetchParentFolders, fetchAllColors } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";

import Folders from "../ui/knowledge/folders";
import Header from "../ui/header";
import UtilityBar from "../ui/knowledge/utility-bar";
// import Breadcrumbs from "../ui/breadcrumbs";

export default async function Page() {
  const folders = await fetchParentFolders();
  const foldersWithColors = await getFolderColor(folders);
  const colors = await fetchAllColors();

  return (
    <div>
      <Header name="📔 Knowledge Base" type="header" />
      {/* <Breadcrumbs url="/knowledge" /> */}
      <UtilityBar colors={colors} />
      <Folders elements={foldersWithColors} />
    </div>
  );
}
