export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_date: Date;
  unique_id: string;
  role: "admin" | "standard";
  job_position: "Developer" | "Designer" | "HR" | "QA" | "Project Manager";
};

export type Resource = {
  id: number;
  name: string;
  content: Buffer;
  type: "corporate" | "role-based";
  parent_id?: string;
  created_date: Date;
  unique_id: string;
};

export type Folder = {
  id: number;
  name: string;
  color_id: string;
  parent_id?: string;
  created_date: Date;
  unique_id: string;
  path: string[];
};

export type Color = {
  id: number;
  name: string;
  hex: string;
  created_date: Date;
  unique_id: string;
};

export type FoldersProps = {
  elements: {
    colorHex: string;
    id: number;
    name: string;
    color_id: string;
    parent_id?: string;
    created_date: Date;
    unique_id: string;
  }[];
};

export type InputsDataUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  job_position: "Developer" | "Designer" | "HR" | "QA" | "Project Manager";
};

export type CreateUserPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type EmployeesTableProps = {
  users: User[];
};

export type KnowledgePageProps = { params: Promise<{ unique_id: string }> };
