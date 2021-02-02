const Entry = ({ entry }) => {
  return (
    <div className='entry'>
      <h5>{entry.tags}</h5>
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
    </div>
  )
}

export default Entry