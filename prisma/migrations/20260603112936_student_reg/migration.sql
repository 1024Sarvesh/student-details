-- CreateTable
CREATE TABLE "studentReg" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "mobileNo" INTEGER NOT NULL,
    "Address" TEXT NOT NULL,

    CONSTRAINT "studentReg_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "studentReg_mobileNo_key" ON "studentReg"("mobileNo");
