import { prisma } from "../prisma/prisma_client.mjs";
import "dotenv/config"


const createStudentReg = async (req, res) => {
  try {
    const registration = await prisma.studentReg.create({
      data: {
        name: req.body.name,
        fatherName: req.body.fatherName,
        mobileNo: req.body.mobileNo,
        Address: req.body.Address,
        created_at: new Date()
      }
    });

    res.status(201).json(registration);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getAllStudentReg = async (req, res) => {
    const registration = await prisma.studentReg.findMany();

    res.json({ registration });
};



const getStudentRegById = async (req, res) => {
    const registration = await prisma.studentReg.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.json({ registration });
};



const updateStudentReg = async (req, res) => {
    const registration = await prisma.studentReg.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            name: req.body.name,
            fatherName: req.body.fatherName,
            mobileNo: req.body.mobileNo,
            address:req.body.address,
        }
    });

    res.json({ registration });
};


const deleteStudentReg = async (req, res) => {
    const registration = await prisma.studentReg.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.json({
        message: "Student deleted successfully",
        registration
    });
};


export{createStudentReg,getAllStudentReg,getStudentRegById,updateStudentReg,deleteStudentReg}

