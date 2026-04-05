"use server";

// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";
// import { signOut } from "@/auth";
import { Folder } from "./definitions";
import { fetchColorById, createFolder } from "./data";
import { nanoid } from "nanoid";

type InputsData = {
  name: string;
  color_id: string;
  parent_id: string | null;
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

export async function createFolderAction(formData: InputsData) {
  const unique_id = nanoid(16);

  await createFolder(
    unique_id,
    formData.name,
    formData.color_id,
    formData.parent_id,
  );
}
