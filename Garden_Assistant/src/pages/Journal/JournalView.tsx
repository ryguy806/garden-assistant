import JournalList from "./JournalList";

const JournalView = () => {
  return (
    <div className='mt-24'>
      <div className='flex items-start m-5'>
        <h1 className='font-bold text-xl'>Journal View</h1>
      </div>
      <div>
        <JournalList />
      </div>
    </div>
  );
};

export default JournalView;
