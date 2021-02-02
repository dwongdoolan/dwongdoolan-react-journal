import { useState } from 'react'

const AddEntry = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a title')
      return
    }
    if (!content) {
      alert('Please add content')
      return
    }
    if (!date) {
      alert('Please add a date')
      return
    }
    if (!tags) {
      alert('Please add a tag')
      return
    }

    onAdd({ title, content, date, tags })

    // Clear the form
    setTitle('')
    setContent('')
    setDate('')
    setTags('')
  }
  
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text'
          placeholder='Add Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Content</label>
        <input
          type='text'
          placeholder='Add Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Add Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Tags</label>
        <input
          type='text'
          placeholder='Add Tags'
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Journal Entry' className='btn btn-block' />
    </form>
  )
}

export default AddEntry