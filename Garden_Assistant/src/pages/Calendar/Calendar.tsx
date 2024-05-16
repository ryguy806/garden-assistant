import { useState } from "react";
import CalendarDays from "./CalendarDay";

const Calendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className='w-[900px] h-[600px] flex flex-col'>
      <div className='font-bold text-xl items-center'>
        {months[currentDate.getMonth()]}
      </div>
      <div className='h-[100px] w-full flex items-center'>
        <p>
          Today's Date:{" "}
          {months[currentDate.getMonth()] +
            " " +
            currentDate.getDate() +
            ", " +
            currentDate.getFullYear()}
        </p>
      </div>
      <div className='flex flex-grow flex-col w-100'>
        <div className='h-[100px] w-full flex items-center justify-around'>
          {weekdays.map((day: String, i: number) => {
            return (
              <div className='w-[100px] text-center' key={i}>
                {day}
              </div>
            );
          })}
        </div>
        <div>
          <CalendarDays date={currentDate} changeDate={setCurrentDate} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
