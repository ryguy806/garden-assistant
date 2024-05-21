import { Dispatch, SetStateAction } from "react";
import { useQuery } from "wasp/client/operations";
import { CalendarItem } from "wasp/entities";
import { getCalendarItemsByMonth } from "wasp/server/operations";

interface CalenderDayProps {
  date: Date;
}

const CalendarDays = ({ date }: CalenderDayProps) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  const {
    data: eventItems,
    isLoading,
    error,
  } = useQuery(getCalendarItemsByMonth);

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === date.toDateString(),
      hasTasks:
        eventItems?.filter(
          (item: CalendarItem) =>
            item.eventDate.getMonth() === firstDayOfMonth.getMonth() &&
            item.eventDate.getFullYear() === firstDayOfMonth.getFullYear()
        ).length > 0,
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-full flex flex-grow flex-wrap justify-center box-border text-sm'>
      {currentDays.map((day, i) => {
        return (
          <div
            className='w-[125px] h-[75px] relative border-2 border-solid border-black'
            key={i}
          >
            <p
              className={`absolute right-[10px] text-[#a6a6a6] ${
                day.selected ? "text-red-500" : ""
              } ${day.currentMonth ? "text-black" : ""} `}
            >
              {day.number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDays;
