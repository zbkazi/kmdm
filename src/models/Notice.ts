import { Schema, model, models, Document } from "mongoose";
import { NoticeSchemaType } from "@/schemas/noticeSchema";

export interface INotice extends Document, NoticeSchemaType {}

const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    noticesUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists before defining it
const Notice = models.Notice || model<INotice>("Notice", noticeSchema);

export default Notice;
