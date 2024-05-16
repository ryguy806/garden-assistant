import { createJournalItem } from "wasp/client/operations";
import JournalItemView from "./JournalItem";
import { JournalItem } from "wasp/entities";
import { FormEvent } from "react";

const JournalList = ({ journalItems }: { journalItems: JournalItem[] }) => {
  if (!journalItems?.length) return <div>No Entries</div>;

  return (
    <div>
      <div>
        <ul className='list-disc list-inside'>
          {journalItems &&
            journalItems.map((journalItem: JournalItem) => (
              <li key={journalItem.id}>
                <JournalItemView journalItem={journalItem} />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <div>New Journal Entry</div>
        <JournalItemForm />
      </div>
    </div>
  );
};

export default JournalList;

const JournalItemForm = () => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='textarea' name='entry' placeholder='Entry' />
      <button type='submit'>Add Entry</button>
    </form>
  );
};
