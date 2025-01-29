import express from "express";
import { upload as upload_endpoint } from "../controller/file.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post('/upload', upload.single('image'), upload_endpoint)

export default router;