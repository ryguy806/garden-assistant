import { JournalItem } from "wasp/entities";
import { type GetAllJournalItems } from "wasp/server/operations";

export const getAllJournalItems: GetAllJournalItems<
  void,
  JournalItem[]
> = async (args, context) => {
  return context.entities.JournalItem.findMany({
    orderBy: { date: "asc" },
  });
};
