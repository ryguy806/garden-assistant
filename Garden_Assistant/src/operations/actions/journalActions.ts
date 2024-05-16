import { JournalItem } from "wasp/entities";
import { CreateJournalItem } from "wasp/server/operations";

type CreateJournalItemPayload = Pick<JournalItem, "entry">;

export const createJournalItem: CreateJournalItem<
  CreateJournalItemPayload,
  JournalItem
> = async (args, context) => {
  return context.entities.JournalItem.create({
    data: { entry: args.entry },
  });
};
