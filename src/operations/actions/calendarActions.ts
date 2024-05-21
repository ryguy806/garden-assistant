import { CalendarItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import { type CreateCalendarItem } from "wasp/server/operations";

export const createCalendarItem: CreateCalendarItem<
  Pick<CalendarItem, "eventDate" | "title" | "details">,
  CalendarItem
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied");
  }

  return await context.entities.CalendarItem.create({
    data: {
      eventDate: args.eventDate,
      user: { connect: { id: context.user.id } },
      title: args.title,
      details: args.details,
    },
  });
};
