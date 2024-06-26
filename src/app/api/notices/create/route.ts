import Notice from "@/models/Notice";
import { NextResponse, NextRequest } from "next/server";
import { NoticeSchema } from "@/schemas/noticeSchema";
import dbConnect from "@/lib/dbConnect";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await request.json();

    // Validate the request body against the schema
    const { error, data } = NoticeSchema.safeParse(body);
    if (error) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    // Check if the notice already exists
    const existingNotice = await Notice.findOne({ title: data.title });
    if (existingNotice) {
      return NextResponse.json(
        { error: "Notice already exists" },
        { status: 400 }
      );
    }

    // (Optional) Check if the user is an admin
    // if (!data.isAdmin) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // (Optional) Check if the user is authenticated
    // if (!data.isAuth) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // Create a new notice
    const notice = new Notice(data);
    await notice.save();

    // Respond with success message
    return NextResponse.json({ message: "Notice created successfully" });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error creating notice:", error);

    // Respond with an error message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
