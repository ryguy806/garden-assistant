import Calendar from "./Calendar";

const CalendarView = () => {
  return (
    <div className='container mt-24'>
      <div className='flex items-start'>
        <h1 className='font-bold text-xl'>Calendar </h1>
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarView;
