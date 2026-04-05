import { fetchFolderById, fetchAllColors } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";

import Header from "@/app/ui/header";
import UtilityBar from "@/app/ui/knowledge/utility-bar";
import Folders from "@/app/ui/knowledge/folders";

type PageProps = { params: Promise<{ unique_id: string }> };

export default async function Page({ params }: PageProps) {
  const { unique_id } = await params;
  const data = await fetchFolderById(unique_id);
  const colors = await fetchAllColors();

  const folderData = data.children.rows;
  const foldersWithColors = await getFolderColor(folderData);

  return (
    <div className="h-full">
      <Header name="📔 Knowledge Base" type="header" />
      <UtilityBar colors={colors} unique_id={unique_id} />
      <Folders elements={foldersWithColors} />
    </div>
  );
}
