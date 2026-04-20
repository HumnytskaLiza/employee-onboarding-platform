import { EmployeesTableProps } from "@/lib/definitions";
import Button from "../button";

export default async function EmployeesTable({ users }: EmployeesTableProps) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li
          key={user.email}
          className="flex justify-between gap-6 items-center"
        >
          <div className="flex justify-between gap-6 w-full px-5 py-3">
            <div className="flex gap-x-4">
              <div className="flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {user.first_name} {user.last_name}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{user.job_position}</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Added <span>{user.created_date.toDateString()}</span>
              </p>
            </div>
          </div>
          <Button text="View" type="main" buttonType="button" />
        </li>
      ))}
    </ul>
  );
}
