-- CreateTable
CREATE TABLE "Location" (
    "pincode" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "mandal" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("pincode")
);

-- CreateTable
CREATE TABLE "Pole" (
    "id" SERIAL NOT NULL,
    "depth" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "breadth" INTEGER,
    "severity" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,

    CONSTRAINT "Pole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_pincode_key" ON "Location"("pincode");

-- AddForeignKey
ALTER TABLE "Pole" ADD CONSTRAINT "Pole_pincode_fkey" FOREIGN KEY ("pincode") REFERENCES "Location"("pincode") ON DELETE RESTRICT ON UPDATE CASCADE;
