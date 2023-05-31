import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';


function AddPerson( {postPerson} ) {

    
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

    const handleSubmit = (event) => {

    event.preventDefault();

    
    const newPerson = {
        name: famousPersonName,
        role: famousPersonRole
    }

    postPerson(newPerson);

           
    setPersonName('');
    setPersonRole('');
    }

    return(
        <form onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" 
                 value = {famousPersonName}
                 onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input"
                 value = {famousPersonRole}
                 onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
    );
}

export default AddPerson;
