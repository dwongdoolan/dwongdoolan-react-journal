const Journal = ({ entry }) => {
  return (
    <div className='journal'>
      <h5>{entry.tags}</h5>
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
      <br />
      <p>{entry.content}</p>
    </div>
  )
}

export default Journal