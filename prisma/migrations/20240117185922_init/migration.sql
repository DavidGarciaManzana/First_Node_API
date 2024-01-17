-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR NOT NULL,
    "key" VARCHAR,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);
