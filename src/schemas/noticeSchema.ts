import { z } from "zod";

export const NoticeSchema = z.object({
  title: z.string().max(100, "Title is too long").min(1, "Title is required"),
  description: z.string().max(500, "Description is too long").min(1, "Description is required"),
  noticesUrl: z.string().url("Notices URL must be a valid URL"),
});

export type NoticeSchemaType = z.infer<typeof NoticeSchema>;
