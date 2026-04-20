import { fetchAllColors } from "@/lib/data";

import Header from "../../../ui/header";
import UtilityBar from "@/app/ui/knowledge/utility-bar";
import { KnowledgePageProps } from "@/lib/definitions";
// import Breadcrumbs from "../ui/breadcrumbs";

export default async function Page({ params }: KnowledgePageProps) {
  const { unique_id } = await params;
  const colors = await fetchAllColors();
  const data = await fetch(`http://localhost:3000/api/file/${unique_id}`);

  const blob = await data.blob();
  const url = URL.createObjectURL(blob);

  return (
    <div>
      <Header name="📔 Knowledge Base" type="header" />
      {/* <Breadcrumbs url="/knowledge" /> */}
      <UtilityBar colors={colors} />
      <iframe src={url} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
}
