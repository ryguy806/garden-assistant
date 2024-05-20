type TimeSlot = {
  time: Date;
  title: string;
  description: string;
  location: string;
};

interface DayProps {
  day: number;
  timeSlots: TimeSlot[];
}

const Day = ({ day, timeSlots }: DayProps) => {
  return (
    <div className='border-2 solid'>
      <div>{day}</div>
      <div>
        {timeSlots.map((timeSlot: TimeSlot) => {
          return (
            <div>
              <div>{timeSlot.time.getTime()}</div>
              <div>{timeSlot.title}</div>
              <div>{timeSlot.description}</div>
              <div>{timeSlot.location}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Day;
