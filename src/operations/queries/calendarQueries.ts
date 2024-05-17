import { CalendarItem } from "wasp/entities";
import { HttpError } from "wasp/server";
import {
  type GetCalendarItemsByMonth,
  type GetAllCalendarItems,
} from "wasp/server/operations";

export const getAllCalendarItems: GetAllCalendarItems<
  void,
  CalendarItem[]
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Not today Satan!");
  }
  return context.entities.CalendarItem.findMany({
    where: { user: { id: context.user.id } },
    orderBy: { eventDate: "asc" },
  });
};

export const getCalendarItemsByMonth: GetCalendarItemsByMonth<
  Pick<CalendarItem, "eventDate">
> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Access denied!");
  }
  const currentDate = new Date();
  return context.entities.CalendarItem.findMany({
    where: { user: { id: context.user.id } },
    select: { eventDate: args.eventDate.getMonth() === currentDate.getMonth() },
    orderBy: { eventDate: "asc" },
  });
};
