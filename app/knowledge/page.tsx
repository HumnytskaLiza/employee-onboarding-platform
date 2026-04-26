import Folders from "../ui/knowledge/knowledge-data";
import Header from "../ui/header";
import UtilityBar from "../ui/knowledge/utility-bar";
// import Breadcrumbs from "../ui/breadcrumbs";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div>
      <Header name="📔 Knowledge Base" type="header" />
      {/* <Breadcrumbs url="/knowledge" /> */}
      <UtilityBar />
      <Folders params={{ unique_id: "" }} />
    </div>
  );
}
