-- CreateTable
CREATE TABLE "DnDCharacters" (
    "characterId" TEXT NOT NULL,
    "charName" TEXT NOT NULL,
    "charClass" TEXT NOT NULL,
    "charRace" TEXT NOT NULL,
    "charBackground" TEXT NOT NULL,
    "charAlignment" TEXT NOT NULL,
    "charLevel" INTEGER NOT NULL,
    "hpStat" INTEGER NOT NULL,
    "acStat" INTEGER NOT NULL,
    "profStat" INTEGER NOT NULL,
    "strScore" INTEGER NOT NULL,
    "dexScore" INTEGER NOT NULL,
    "conScore" INTEGER NOT NULL,
    "intScore" INTEGER NOT NULL,
    "wisScore" INTEGER NOT NULL,
    "chaScore" INTEGER NOT NULL,

    CONSTRAINT "DnDCharacters_pkey" PRIMARY KEY ("characterId")
);
