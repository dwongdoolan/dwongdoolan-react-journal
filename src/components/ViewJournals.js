import Journal from './Journal'

const ViewJournals = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <Journal key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default ViewJournals