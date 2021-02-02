import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Entries from './components/Entries'
import AddEntry from './components/AddEntry'
import ViewJournals from './components/ViewJournals'

const App = () => {
  const [registrations, setRegistrations] = useState([
    {
      id:1,
      username: '',
      password: '',
      name: '',
      bioline: '',
    },
  ])
  
  const [entries, setEntries] = useState([
    {
      id:1,
      title: 'My First Entry',
      content: 'I love to learn.',
      date: 'January 25, 2021',
      tags: '#journaling, #growth', 
    },
    {
      id:2,
      title: 'React',
      content: 'Coding in React is fun.',
      date: 'January 26, 2021',
      tags: '#journaling, #webdevelopment', 
    },
    {
      id:3,
      title: 'Growth',
      content: 'Get comfortable with being uncomfortable.',
      date: 'January 27, 2021',
      tags: '#journaling, #growth', 
    },
  ])

  // Add Registration
  const addRegistration = (register) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newRegister = { id, ...register }
    setRegistrations ([...registrations, newRegister])
  }

  // Add Entry
  const addEntry = (entry) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newEntry = { id, ...entry }
    setEntries ([...entries, newEntry])
  }

  return (
    <div className='container'>
      <Header />
      <Registration onAdd={ addRegistration } />
      <AddEntry onAdd={ addEntry } />
      <Entries entries={ entries } />
      <ViewJournals entries={ entries } />  
      <Footer />
    </div>
  );
  }

export default App;