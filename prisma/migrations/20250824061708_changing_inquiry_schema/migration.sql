/*
  Warnings:

  - You are about to drop the column `userId` on the `Inquiry` table. All the data in the column will be lost.
  - Added the required column `email` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Inquiry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Inquiry" DROP CONSTRAINT "Inquiry_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Inquiry" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
