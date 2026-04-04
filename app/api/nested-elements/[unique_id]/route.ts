import { fetchFolderById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ unique_id: string }> },
) {
  const { unique_id } = await params;

  try {
    if (!unique_id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const { folder, children } = await fetchFolderById(unique_id);

    return NextResponse.json({
      forderRecord: folder.rows,
      folderData: children.rows,
    });
  } catch (error) {
    console.error("Failed to fetch folder and data:", error);
    return NextResponse.json(
      { message: `Failed to fetch folder and data. UNIQUE_ID: ${unique_id}` },
      { status: 500 },
    );
  }
}
