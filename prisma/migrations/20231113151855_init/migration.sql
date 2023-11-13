-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STAFF', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CHECK_IN', 'CHECK_OUT', 'BREAK');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "status" "Status" NOT NULL DEFAULT 'CHECK_IN',
    "role" "Role" NOT NULL DEFAULT 'STAFF',
    "title" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginTransaction" (
    "id" SERIAL NOT NULL,
    "transactionDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remarks" TEXT,
    "userId" INTEGER NOT NULL,
    "transactionType" "Status" NOT NULL DEFAULT 'CHECK_IN',

    CONSTRAINT "LoginTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LoginTransaction" ADD CONSTRAINT "LoginTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
