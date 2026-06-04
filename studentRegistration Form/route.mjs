import express from "express";
import { upload } from "../middilewares/upload.mjs";
import {
  createStudentReg,
  deleteStudentReg,
  getAllStudentReg,
  getStudentRegById,
  updateStudentReg,
} from "./controller.mjs";
const studentRegRoute = express.Router();
studentRegRoute.post(
  "/createReg",
  upload.single("photo"),
  createStudentReg
);
studentRegRoute.get("/getAllReg", getAllStudentReg);

studentRegRoute.get("/getIdReg/:id", getStudentRegById);
studentRegRoute.put("/UpdateReg/:id", updateStudentReg);
studentRegRoute.delete("/DeleteReg/:id", deleteStudentReg);


export { studentRegRoute };
