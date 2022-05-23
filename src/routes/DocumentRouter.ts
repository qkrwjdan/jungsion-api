import { Router } from "express";
import DocumentController from "../controllers/DocumentController";
import { body } from "express-validator/check";

const router: Router = Router();

router.get("/", DocumentController.getDocuments);
router.get("/:documentId", DocumentController.getDocument);

router.post("/", DocumentController.createDocument);

router.put("/:documentId", DocumentController.updateDocument);
router.delete("/:documentId", DocumentController.deleteDocument);

export default router;
