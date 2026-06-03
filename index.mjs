import express from "express";
import "dotenv/config";
import { studentRegRoute } from "./studentRegistration Form/route.mjs";
const server = express();
const PORT = 8000;
server.use(express.json());
server.use("/registration", studentRegRoute);
server.listen(PORT, () => {
  console.log(`server started on ${PORT} port successfully`);
});
