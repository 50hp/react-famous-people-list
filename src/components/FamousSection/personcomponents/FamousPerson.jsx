import {useState} from 'react';

function FamousPerson(prop) {

    return (

        <li key={prop.person.id}>{prop.person.name} is famous for{prop.person.role}</li>

    );
}

export default FamousPerson;
