import { JournalItem } from "wasp/entities";
import { toSentenceCase } from "./JournalView";

const JournalItemView = ({ journalItem }: { journalItem: JournalItem }) => {
  const { date, entry } = journalItem;

  const fixedEntry = toSentenceCase(entry).replaceAll(" i ", " I ");

  console.log("Entry JI", entry);
  console.log("Entry JI", fixedEntry);

  return (
    <div className='w-full'>
      <div>{date.toDateString()}</div>
      <div>{fixedEntry}</div>
    </div>
  );
};

export default JournalItemView;
