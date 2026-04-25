import Header from "../ui/header";
import UtilityBar from "../ui/employees/utility-bar";
import EmployeesTable from "../ui/employees/employees-table";
import { fetchStandardUsers } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Page() {
  const people = await fetchStandardUsers();
  return (
    <div>
      <Header name={"💼 Employees Overview"} type="header" />
      <UtilityBar />
      <EmployeesTable users={people} />
    </div>
  );
}
