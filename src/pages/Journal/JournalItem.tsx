import { JournalItem } from "wasp/entities";

const JournalItemView = ({ journalItem }: { journalItem: JournalItem }) => {
  const { date, entry } = journalItem;
  return (
    <div>
      <div>{date.toString()}</div>
      <div>{entry}</div>
    </div>
  );
};

export default JournalItemView;
