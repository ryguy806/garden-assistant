import { createJournalItem } from "wasp/client/operations";
import JournalItemView from "./JournalItem";
import { JournalItem } from "wasp/entities";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";

const JournalList = ({ journalItems }: { journalItems: JournalItem[] }) => {
  if (!journalItems?.length) return <div>No Entries</div>;

  const [addEntry, setAddEntry] = useState(false);
  const handleAddEntry = () => setAddEntry(true);

  return (
    <div>
      <div className='bg-[#f5f5f5] w-full mx-auto my-0 p-0'>
        <ul className='text-[#555] p-0 w-[500px] border-[1px] border-[#dedede]'>
          {journalItems &&
            journalItems.map((journalItem: JournalItem) => (
              <li
                key={journalItem.id}
                className='border-b-[1px] border-dotted border-[#ccc]h-auto p-3 capitalize'
              >
                <JournalItemView journalItem={journalItem} />
              </li>
            ))}
        </ul>
      </div>
      <br />
      <div className='border-2 border-black'>
        <div className='text-lg underline mb-3'>New Journal Entry</div>
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

export default JournalList;

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
