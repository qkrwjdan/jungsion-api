import mongoose from "mongoose";
import { DocumentInfo } from "./DocumentInfo";

export interface DocumentsResponseDto {
    id: mongoose.Types.ObjectId;
    title: string;
    documents: Array<DocumentsResponseDto>;
}
