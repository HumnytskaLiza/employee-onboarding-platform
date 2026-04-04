import { fetchParentFolders } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchParentFolders();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch folders:", error);
    return NextResponse.json(
      { message: "Failed to fetch folders." },
      { status: 500 },
    );
  }
}
