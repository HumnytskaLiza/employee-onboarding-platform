"use server";

// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";
// import { signOut } from "@/auth";
import { Folder } from "./definitions";
import {
  fetchColorById,
  createFolder,
  fetchFolderById,
  createStandardUser,
} from "./data";
import { nanoid } from "nanoid";

type InputsDataFolder = {
  name: string;
  color_id: string;
  parent_id: string | null;
};

type InputsDataUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  job_position: "Developer" | "Designer" | "HR" | "QA" | "Project Manager";
};

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn("credentials", formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// }

// export async function logOutAction() {
//   await signOut({ redirectTo: "/login" });
// }

export async function getFolderColor(folders: Folder[]) {
  const foldersWithColors = await Promise.all(
    folders.map(async (folder) => {
      const hex = await fetchColorById(folder.color_id);
      return { ...folder, colorHex: hex };
    }),
  );

  return foldersWithColors;
}

export async function createFolderAction(formData: InputsDataFolder) {
  const unique_id = nanoid(16);
  let path: string[] = [];

  if (formData.parent_id) {
    const data = await fetchFolderById(formData.parent_id);
    path = data.folder.rows[0].path;
  }
  path.push(unique_id);

  await createFolder(
    unique_id,
    formData.name,
    formData.color_id,
    formData.parent_id,
    path,
  );
}

export async function createStandardUserAction(formData: InputsDataUser) {
  const unique_id = nanoid(16);

  await createStandardUser(
    unique_id,
    formData.first_name,
    formData.last_name,
    formData.email,
    formData.password,
    formData.job_position,
  );
}
