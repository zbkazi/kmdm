import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
