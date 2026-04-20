import { createFile, fetchParentFiles } from "@/lib/data";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  unique_id: z.string(),
  content: z.instanceof(Buffer),
  name: z.string().min(1),
  folder_id: z.string().nullable(),
  type: z.string(),
  path: z.array(z.string()),
});

export async function GET() {
  try {
    const data = await fetchParentFiles();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch files:", error);
    return NextResponse.json(
      { message: "Failed to fetch files." },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { content, name, folder_id, type, unique_id } = parsed.data;

    await createFile(content, name, folder_id, type, unique_id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to create a folder.", error);
    return NextResponse.json(
      { message: `Failed to create a folder: ${error}` },
      { status: 500 },
    );
  }
}
