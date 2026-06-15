-- CreateTable
CREATE TABLE "Contactos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT,
    "celular" TEXT,
    "email" TEXT NOT NULL,
    "ubicacion" TEXT,
    "estado" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Contactos_email_key" ON "Contactos"("email");
