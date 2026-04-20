import { fetchParentFolders, fetchAllColors, fetchAllFiles } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";

import Folders from "../ui/knowledge/knowledge-data";
import Header from "../ui/header";
import UtilityBar from "../ui/knowledge/utility-bar";
// import Breadcrumbs from "../ui/breadcrumbs";

export default async function Page() {
  const folders = await fetchParentFolders();
  const foldersWithColors = await getFolderColor(folders);
  const files = await fetchAllFiles();
  const colors = await fetchAllColors();

  return (
    <div>
      <Header name="📔 Knowledge Base" type="header" />
      {/* <Breadcrumbs url="/knowledge" /> */}
      <UtilityBar colors={colors} />
      <Folders elementsFolders={foldersWithColors} elementsFiles={files} />
    </div>
  );
}
