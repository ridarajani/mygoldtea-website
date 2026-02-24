import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "messages.json");

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json([]);
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const messages = JSON.parse(raw);
    // Return newest first
    return NextResponse.json(messages.reverse());
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ error: "No messages" }, { status: 404 });
    }

    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const messages = JSON.parse(raw);
    const filtered = messages.filter((m: { id: string }) => m.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
