import mongoose from "mongoose";

export interface DocumentsResponseDto {
  _id: mongoose.Types.ObjectId;
  title: string;
  documents: Array<DocumentsResponseDto>;
}
