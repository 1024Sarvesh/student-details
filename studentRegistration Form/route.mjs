import express from "express";
import {
  createStudentReg,
  deleteStudentReg,
  getAllStudentReg,
  getStudentRegById,
  updateStudentReg,
} from "./controller.mjs";
const studentRegRoute = express.Router();
studentRegRoute.post("/createReg", createStudentReg);
studentRegRoute.get("/getAllReg", getAllStudentReg);

studentRegRoute.get("/getIdReg/:id", getStudentRegById);
studentRegRoute.put("/UpdateReg/:id", updateStudentReg);
studentRegRoute.delete("/DeleteReg/:id", deleteStudentReg);

export { studentRegRoute };
