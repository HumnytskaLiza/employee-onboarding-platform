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

export type File = {
  id: number;
  name: string;
  content: Buffer;
  // type: "corporate" | "role-based";
  type: string;
  folder_id?: string;
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

export type Message = {
  id?: number;
  role: string;
  message: string;
};

export type Chat = {
  id: number;
  name: string;
  created_date: Date;
  unique_id: string;
  messages: Message[];
};

export type ChatProps = {
  unique_id: string;
  data: Message[];
};

export type Color = {
  id: number;
  name: string;
  hex: string;
  created_date: Date;
  unique_id: string;
};

export type KnowledgeDataProps = {
  elementsFolders: {
    colorHex: string;
    id: number;
    name: string;
    color_id: string;
    parent_id?: string;
    created_date: Date;
    unique_id: string;
  }[];
  elementsFiles: {
    content: Uint8Array;
    id: number;
    name: string;
    folder_id?: string;
    created_date: Date;
    unique_id: string;
    type: string;
  }[];
};

export type InputsDataUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  job_position: "Developer" | "Designer" | "HR" | "QA" | "Project Manager";
};

export type InputsDataChat = {
  name: string;
};

export type CreateUserPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type CreateChatPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type DeleteChatPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  uniqueId: string;
  name: string;
};

export type EmployeesTableProps = {
  users: User[];
};

export type ChatHistoryProps = {
  chats: Chat[];
};

export type KnowledgePageProps = { params: Promise<{ unique_id: string }> };

export type AssistantPageProps = { params: Promise<{ unique_id: string }> };
