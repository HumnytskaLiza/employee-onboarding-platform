import { sql } from "@vercel/postgres";
import { User, Resource, Folder, Color } from "./definitions";

export async function fetchUsers() {
  try {
    const data = await sql<User>`SELECT * FROM users`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchDocuments() {
  try {
    const data = await sql<Resource>`SELECT * FROM documents`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch resources.");
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
