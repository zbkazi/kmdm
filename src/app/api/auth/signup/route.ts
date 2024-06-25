import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  try {
    await dbConnect();
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists" });

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User created successfully", userId: newUser._id });
    

  } catch (error) {
    return NextResponse.json({ message: "Server error" });
  }
}



