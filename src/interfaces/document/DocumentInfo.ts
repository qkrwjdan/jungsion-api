import mongoose from "mongoose";

export interface DocumentInfo {
  _id: string;
  title: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
  documents: Array<DocumentInfo>;
  parent?: mongoose.Types.ObjectId;
}
