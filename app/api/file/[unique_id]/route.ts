import { fetchFileById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ unique_id: string }> },
) {
  try {
    const { unique_id } = await context.params;
    const data = await fetchFileById(unique_id);

    const buffer = Buffer.isBuffer(data.content)
      ? data.content
      : Buffer.from(data.content);

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=file.pdf",
      },
    });
  } catch (error) {
    console.error("Failed to fetch file:", error);
    return NextResponse.json(
      { message: "Failed to fetch file." },
      { status: 500 },
    );
  }
}
