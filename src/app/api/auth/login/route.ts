import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Incorrect password" });
    }

   // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    // Set JWT token in local storage
    localStorage.setItem("token", token);

    // Return success response

    return NextResponse.json({ message: "Login successful" , userId: user._id});
  } catch (error) {
    return NextResponse.json({ message: "Server error" });
  }
}
