import { getAllJournalItems, useQuery } from "wasp/client/operations";
import JournalList from "./JournalList";
import { AuthUser } from "wasp/auth";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { createJournalItem } from "wasp/client/operations";

const JournalView = ({ user }: { user: AuthUser }) => {
  const { data: journalItems, isLoading, error } = useQuery(getAllJournalItems);

  const [addEntry, setAddEntry] = useState(false);
  const handleAddEntry = () => setAddEntry(true);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='mt-24 w-96'>
      <div className='flex items-center m-5 justify-center'>
        <h1 className='font-bold text-xl'>Garden Journal</h1>
      </div>
      <div>{journalItems && <JournalList journalItems={journalItems} />}</div>
      <div className='border-2 border-black'>
        <div className='text-lg underline m-3'>New Journal Entry</div>
        <div className='m-5'>
          {addEntry ? (
            <JournalItemForm setAddEntry={setAddEntry} />
          ) : (
            <button
              onClick={handleAddEntry}
              className='border-black border-2 rounded-md'
            >
              Add Entry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalView;

interface JournalItemFormProps {
  setAddEntry: Dispatch<SetStateAction<boolean>>;
}

const JournalItemForm: FC<JournalItemFormProps> = ({ setAddEntry }) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const entry = target.entry.value;
      target.reset();
      await createJournalItem({ entry });
    } catch (e: any) {
      window.alert("Error" + e.message);
    }
    setAddEntry(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='textarea'
        name='entry'
        placeholder='Entry'
        className='border-2'
      />
      <button type='submit'>Add Entry</button>
    </form>
  );
};
