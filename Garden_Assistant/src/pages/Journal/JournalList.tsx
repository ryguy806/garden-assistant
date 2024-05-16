import JournalItem from "./JournalItem";

const JournalList = () => {
  return (
    <div>
      <ul className='list-disc list-inside'>
        <li>This will be a list of the Journal Items.</li>
        <li>
          <JournalItem />
        </li>
      </ul>
    </div>
  );
};

export default JournalList;
