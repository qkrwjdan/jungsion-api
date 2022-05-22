import mongoose from "mongoose";

export interface DocumentsResponseDto {
  id: mongoose.Types.ObjectId;
  title: string;
  documents: Array<DocumentsResponseDto>;
}
