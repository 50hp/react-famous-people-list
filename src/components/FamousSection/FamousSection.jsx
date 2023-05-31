import React, { useState } from 'react';
import './FamousSection.css';
import axios from 'axios';
import {useEffect} from 'react';
import FamousList from './personcomponents/FamousPersonList.jsx';
import AddPerson from './personcomponents/FamousPersonForm.jsx';




function FamousSection() {

    let [famousPeopleArray, setPeopleArray] = useState([]);

    const fetchPeople = () => {
        // TODO: fetch the list of people from the server
        axios({
            method: 'GET',
            url: '/people',
        }).then( (response) => {
            setPeopleArray(response.data);
            console.log(response.data)
        }).catch( (error) => {
            console.log(error)
        });

    }

    const postPerson = (newPerson) => {

        console.log(newPerson);

        axios({
            method: 'POST',
            url: '/people',
            data: newPerson
        }).then( response => {
            console.log('success')
            fetchPeople();
        }).catch( err => {
            console.log(err);
        });

    }

      useEffect( () => {
      fetchPeople();
      }, [])

    return (
      <section className="new-person-section">
    
        <AddPerson
            postPerson={postPerson}
        />
        <FamousList
            famousPeopleArray={famousPeopleArray}
        />

      </section>
    );
}

export default FamousSection;
