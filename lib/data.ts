import "server-only";

import { sql } from "@vercel/postgres";
import { User, File, Folder, Color, Chat } from "./definitions";

export async function fetchStandardUsers() {
  try {
    const data = await sql<User>`SELECT * FROM users WHERE role = 'standard'`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function createStandardUser(
  unique_id: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  job_position: "Developer" | "Designer" | "HR" | "QA" | "Project Manager",
) {
  try {
    await sql<Folder>`INSERT INTO users (unique_id, first_name, last_name, email, password, role, job_position)
      VALUES (${unique_id}, ${first_name}, ${last_name}, ${email}, ${password}, 'standard', ${job_position})
      ON CONFLICT (id) DO NOTHING;`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create a user.");
  }
}

export async function fetchAdminUsers() {
  try {
    const data = await sql<User>`SELECT * FROM users WHERE role = 'admin'`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchAllFolders() {
  try {
    const data = await sql<Folder>`SELECT * FROM folders`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch folders.");
  }
}

export async function fetchParentFolders() {
  try {
    const data =
      await sql<Folder>`SELECT * FROM folders WHERE parent_id IS NULL`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch folders.");
  }
}

export async function fetchAllColors() {
  try {
    const data = await sql<Color>`SELECT * FROM colors`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch colors.");
  }
}

export async function fetchColorById(unique_id: string) {
  try {
    const data =
      await sql<Color>`SELECT * FROM colors WHERE unique_id = ${unique_id}`;

    return data.rows[0].hex;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch color.");
  }
}

export async function fetchFolderById(unique_id: string) {
  try {
    const folder =
      await sql<Folder>`SELECT * FROM folders WHERE unique_id = ${unique_id}`;

    const children =
      await sql<Folder>`SELECT * FROM folders WHERE parent_id = ${unique_id}`;

    return { folder, children };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch folder.");
  }
}

export async function createFolder(
  unique_id: string,
  name: string,
  color_id: string,
  parent_id: string | null,
) {
  try {
    await sql<Folder>`INSERT INTO folders (unique_id, name, color_id, parent_id)
      VALUES (${unique_id}, ${name}, ${color_id}, ${parent_id ?? null})
      ON CONFLICT (id) DO NOTHING;`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create folder.");
  }
}

export async function fetchFoldersInPath(path: string[]) {
  try {
    const folders =
      await sql<Folder>`SELECT * FROM folders WHERE unique_id IN (${path.join(",")})`;

    return folders.rows.map((folder) => folder.name);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch folders.");
  }
}

export async function fetchChatHistory() {
  try {
    const data = await sql<Chat>`SELECT * FROM chats`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch chat history.");
  }
}

export async function fetchChatById(unique_id: string) {
  try {
    const data =
      await sql<Chat>`SELECT * FROM chats WHERE unique_id = ${unique_id}`;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch chat.");
  }
}

export async function addMessage(
  id: string,
  message: string,
  role: string,
  chatId: string,
) {
  try {
    await sql<Chat>`UPDATE chats SET messages = COALESCE(messages, '[]'::jsonb) || jsonb_build_array(
                      jsonb_build_object(
                        'id', ${id}::text,
                        'message', ${message}::text,
                        'role', ${role}::text
                      )
                    )
                    WHERE unique_id = ${chatId}`;
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to add message: ${error}`);
  }
}

export async function deleteChat(unique_id: string) {
  try {
    await sql`DELETE FROM chats WHERE unique_id = ${unique_id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to delete chat: ${error}`);
  }
}

export async function createChat(unique_id: string, name: string) {
  try {
    await sql<Folder>`INSERT INTO chats (unique_id, name)
      VALUES (${unique_id}, ${name})
      ON CONFLICT (id) DO NOTHING;`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create a chat.");
  }
}

export async function createFile(
  content: Buffer,
  name: string,
  folder_id: string | null,
  type: string,
  unique_id: string,
) {
  try {
    await sql<File>`INSERT INTO files (content, name, folder_id, type, unique_id, id)
      VALUES ("", ${name}, ${folder_id ?? null}, ${type}, ${unique_id},  ${unique_id})
      ON CONFLICT (id) DO NOTHING;`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to add file: ${error}`);
  }
}

export async function fetchAllFiles() {
  try {
    const data = await sql<File>`SELECT * FROM files`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch files.");
  }
}

export async function fetchParentFiles() {
  try {
    const data = await sql<File>`SELECT * FROM files WHERE folder_id IS NULL`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch files.");
  }
}

export async function fetchFileById(unique_id: string) {
  try {
    const file =
      await sql<File>`SELECT * FROM files WHERE unique_id = ${unique_id}`;

    return file.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch file.");
  }
}
