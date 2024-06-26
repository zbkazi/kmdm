import Notice from "@/models/Notice";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all notices from the database
    const notices = await Notice.find({});

    // Respond with the fetched notices
    return NextResponse.json({ notices });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching notices:", error);

    // Respond with an error message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
