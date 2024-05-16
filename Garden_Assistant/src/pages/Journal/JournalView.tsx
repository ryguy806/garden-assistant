import { getAllJournalItems, useQuery } from "wasp/client/operations";
import JournalList from "./JournalList";
import { AuthUser } from "wasp/auth";

const JournalView = ({ user }: { user: AuthUser }) => {
  const { data: journalItems, isLoading, error } = useQuery(getAllJournalItems);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='mt-24'>
      <div className='flex items-center m-5 justify-center'>
        <h1 className='font-bold text-xl'>Garden Journal</h1>
      </div>
      <div>{journalItems && <JournalList journalItems={journalItems} />}</div>
    </div>
  );
};

export default JournalView;
