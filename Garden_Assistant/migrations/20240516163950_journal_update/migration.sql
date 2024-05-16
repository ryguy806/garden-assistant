-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JournalItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "JournalItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_JournalItem" ("date", "entry", "id") SELECT "date", "entry", "id" FROM "JournalItem";
DROP TABLE "JournalItem";
ALTER TABLE "new_JournalItem" RENAME TO "JournalItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
