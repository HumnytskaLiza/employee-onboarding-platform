import { fetchColorById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ unique_id: string }> },
) {
  try {
    const { unique_id } = await context.params;
    const data = await fetchColorById(unique_id);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch color:", error);
    return NextResponse.json(
      { message: "Failed to fetch color." },
      { status: 500 },
    );
  }
}
