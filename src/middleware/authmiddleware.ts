import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import jwt from "jsonwebtoken";
import User from "../models/User";

const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
