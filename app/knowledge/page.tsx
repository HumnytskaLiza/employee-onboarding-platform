import Folders from "../ui/knowledge/folders";
import Header from "../ui/header";
import UtilityBar from "../ui/knowledge/utility-bar";

export default function Page() {
  return (
    <div>
      <Header name="📔 Knowledge Base" />
      <UtilityBar />
      <Folders />
    </div>
  );
}
