import mongoose from "mongoose";
import Document from "../models/Document";

import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { DocumentsResponseDto } from "../interfaces/document/DocumentsResponseDto";
import { DocumentCreateDto } from "../interfaces/document/DocumentCreateDto";
import { DocumentResponseDto } from "../interfaces/document/DocumentResponseDto";
import { DocumentUpdateDto } from "../interfaces/document/DocumentUpdateDto";

const findDocumentRecursive = async (
  documentId: string
): Promise<DocumentsResponseDto | null> => {
  let document = await Document.findById(documentId);

  if (document) {
    let result: DocumentsResponseDto = {
      id: document.id,
      title: document.title,
      documents: [],
    };

    for (let doc of document.documents) {
      let subDocument = await findDocumentRecursive(doc._id);
      if (subDocument) {
        result.documents.push(subDocument);
      }
    }

    return result;
  }
  return document;
};

const getDocuments = async (): Promise<Array<DocumentsResponseDto | null>> => {
  try {
    const documents = await Document.find({ parent: null });

    const data: Array<DocumentsResponseDto | null> = await Promise.all(
      documents.map(async (document: any) => {
        const result: DocumentsResponseDto | null = await findDocumentRecursive(
          document._id
        );
        return result;
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDocument = async (
  documentId: string
): Promise<DocumentResponseDto | null> => {
  try {
    const document = await Document.findById(documentId);

    if (!document) {
      return null;
    }

    let result: DocumentResponseDto = {
      _id: document._id,
      title: document.title,
      content: document.content,
      documents: [],
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
    };

    for (let subDocument of document.documents) {
      let data = await Document.findById(subDocument);
      if (data) {
        result.documents.push(data);
      }
    }

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createDocument = async (
  documentCreateDto: DocumentCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const document = new Document({
      title: documentCreateDto.title,
      content: "",
      parent: documentCreateDto.parent,
    });

    await document.save();

    const parentDocument = await Document.findById(documentCreateDto.parent);
    if (parentDocument) {
      console.log("여기 들어왕");
      parentDocument.documents.push(document._id);
      parentDocument.save();
    }

    const data = {
      _id: document._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateDocument = async (
  documentId: string,
  documentUpdateDto: DocumentUpdateDto
) => {
  try {
    await Document.findByIdAndUpdate(documentId, documentUpdateDto);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteDocument = async (documentId: string) => {
  try {
    await Document.findByIdAndDelete(documentId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
};
