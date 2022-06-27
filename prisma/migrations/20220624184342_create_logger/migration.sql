-- CreateTable
CREATE TABLE "logger" (
    "id" TEXT NOT NULL,
    "emailUser" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logger_pkey" PRIMARY KEY ("id")
);
