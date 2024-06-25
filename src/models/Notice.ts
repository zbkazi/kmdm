// models/Notice.ts
import { Schema, model, Document } from "mongoose";

export interface INotice extends Document {
  title: string;
  description: string;
  noticesUrl: string;
  date: Date;
}

const noticeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  noticesUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default model<INotice>("Notice", noticeSchema);
