import { getAllJournalItems, useQuery } from "wasp/client/operations";
import JournalItemView from "./JournalItem";
import { JournalItem } from "wasp/entities";

const JournalList = ({ journalItems }: { journalItems: JournalItem[] }) => {
  if (!journalItems?.length) return <div>No Entries</div>;

  return (
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
  );
};

export default JournalList;
