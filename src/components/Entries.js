import Entry from './Entry'

const Entries = ({ entries }) => {
  return (
    <div>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default Entries