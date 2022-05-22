import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { validationResult } from "express-validator";
import { DocumentCreateDto } from "../interfaces/document/DocumentCreateDto";
import { DocumentService } from "../services";
import { DocumentUpdateDto } from "../interfaces/document/DocumentUpdateDto";

const tempMessage = "temp message";

const getDocuments = async (req: Request, res: Response) => {
  try {
    const data = await DocumentService.getDocuments();
    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_DOCUMENTS_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const getDocument = async (req: Request, res: Response) => {
  const documentId = req.params.documentId;
  try {
    const data = await DocumentService.getDocument(documentId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_DOCUMENT_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const createDocument = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
  const documentCreateDto: DocumentCreateDto = req.body;

  try {
    const data = await DocumentService.createDocument(documentCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_DOCUMENT_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const updateDocument = async (req: Request, res: Response) => {
  const documentId = req.params.documentId;
  const documentUpdateDto: DocumentUpdateDto = req.body;
  try {
    const data = await DocumentService.updateDocument(
      documentId,
      documentUpdateDto
    );

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.CREATED, message.UPDATE_DOCUMENT_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const deleteDocument = async (req: Request, res: Response) => {
  const documentId = req.params.documentId;
  try {
    const data = await DocumentService.deleteDocument(documentId);
    
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.OK, message.DELETE_DOCUMENT_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
};
