import Notice from "@/models/Notice";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Get query parameters for pagination and limit
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);

    // Validate page and limit values
    if (page < 1) {
      return NextResponse.json(
        { error: "Page number must be greater than 0" },
        { status: 400 }
      );
    }
    if (limit < 1) {
      return NextResponse.json(
        { error: "Limit must be greater than 0" },
        { status: 400 }
      );
    }

    // Calculate the starting index of the records
    const skip = (page - 1) * limit;

    // Fetch notices from the database with pagination and limit
    const notices = await Notice.find({}).skip(skip).limit(limit);

    // Fetch the total count of notices for pagination info
    const totalNotices = await Notice.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalNotices / limit);

    // Create pagination links
    const baseUrl = `${url.origin}${url.pathname}`;
    const nextLink =
      page < totalPages ? `${baseUrl}?page=${page + 1}&limit=${limit}` : null;
    const prevLink =
      page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}` : null;

    // Respond with the fetched notices and pagination info
    return NextResponse.json({
      notices,
      totalPages,
      currentPage: page,
      totalNotices,
      nextLink,
      prevLink,
      link: baseUrl,
    });
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
