import mongoose from "mongoose";

export interface DocumentCreateDto {
    title: string;
    parent: mongoose.Types.ObjectId;
}