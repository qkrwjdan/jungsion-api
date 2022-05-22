import mongoose from "mongoose";
import { DocumentInfo } from "../interfaces/document/DocumentInfo";

const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: 'Document'
    },
    documents: {
        type: [mongoose.Types.ObjectId],
        ref: 'Document'
        // type: [{ type : mongoose.Types.ObjectId, ref: 'Document' }],
    }
});

export default mongoose.model<DocumentInfo & mongoose.Document>("Document", DocumentSchema);