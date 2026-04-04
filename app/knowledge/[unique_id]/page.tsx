import { fetchFolderById } from "@/lib/data";
import { getFolderColor } from "@/lib/actions";

import Header from "@/app/ui/header";
import UtilityBar from "@/app/ui/knowledge/utility-bar";
import Folders from "@/app/ui/knowledge/folders";

type PageProps = { params: Promise<{ unique_id: string }> };

export default async function Page({ params }: PageProps) {
  const { unique_id } = await params;
  const data = await fetchFolderById(unique_id);

  const folderData = data.children.rows;

  const foldersWithColors = await getFolderColor(folderData);

  return (
    <div>
      <Header name="📔 Knowledge Base" />
      <UtilityBar />
      <Folders elements={foldersWithColors} />
    </div>
  );
}
