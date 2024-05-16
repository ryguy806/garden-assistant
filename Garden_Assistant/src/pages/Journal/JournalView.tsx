import { getAllJournalItems, useQuery } from "wasp/client/operations";
import JournalList from "./JournalList";

const JournalView = () => {
  const { data: journalItems, isLoading, error } = useQuery(getAllJournalItems);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='mt-24'>
      <div className='flex items-start m-5'>
        <h1 className='font-bold text-xl'>Garden Journal</h1>
      </div>
      <div>
        <JournalList journalItems={journalItems} />
      </div>
    </div>
  );
};

export default JournalView;
