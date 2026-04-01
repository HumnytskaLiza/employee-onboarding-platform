import { sql } from "@vercel/postgres";
import { User, Resource } from "./definitions";

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
