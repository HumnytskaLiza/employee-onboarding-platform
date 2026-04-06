import { fetchFolderById, fetchAllColors } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";
import { KnowledgePageProps } from "@/lib/definitions";

import Header from "@/app/ui/header";
import UtilityBar from "@/app/ui/knowledge/utility-bar";
import Folders from "@/app/ui/knowledge/folders";
// import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page({ params }: KnowledgePageProps) {
  const { unique_id } = await params;
  const data = await fetchFolderById(unique_id);
  const colors = await fetchAllColors();
  const foldersWithColors = await getFolderColor(data.children.rows);

  return (
    <div className="h-full">
      <Header name="📔 Knowledge Base" type="header" />
      {/* <Breadcrumbs url="/knowledge/" /> */}
      <UtilityBar colors={colors} unique_id={unique_id} />
      <Folders elements={foldersWithColors} />
    </div>
  );
}
