import { useState } from 'react'

const Registration = ({ onAdd, onClick }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [bioline, setBioline] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!username) {
      alert('Please enter username')
      return
    }
    if (!password) {
      alert('Please enter password')
      return
    }
    if (!name) {
      alert('Please enter name')
      return
    }
    if (!bioline) {
      alert('Please enter bio line')
      return
    }

    onAdd({ username, password, name, bioline })

    // Clear the form 
    setUsername('')
    setPassword('')
    setName('')
    setBioline('')
  }

  return (
    <form className='registration-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Username</label>
        <input
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='text'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Bio line</label>
        <input
          type='text'
          placeholder='Enter Bio line'
          value={bioline}
          onChange={(e) => setBioline(e.target.value)}
        />
      </div>

      <input type='submit' value='Submit Registration' className='btn btn-block' onClick={onAdd}/>
    </form>
  )
}

export default Registration