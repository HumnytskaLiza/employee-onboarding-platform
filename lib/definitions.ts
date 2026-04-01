export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_date: Date;
};

export type Resource = {
  id: string;
  name: string;
  content: Buffer;
  type: "corporate" | "role-based";
  parent_id?: string;
  created_date: Date;
};

export type Folder = {
  id: number;
  name: string;
  color: string;
  parent_id?: number;
  created_date: Date;
};

export type Color = {
  id: number;
  name: string;
  hex: string;
  created_date: Date;
};
