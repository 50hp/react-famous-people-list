import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import FamousPerson from './FamousPerson.jsx';



function FamousList(prop) {
        

    return (
        <div>
             <div className="ListPeople">
                <ul>
                    { prop.famousPeopleArray.map(person =>
                        <FamousPerson
                             person={person}
                        />
                    )}
                </ul>
            </div>
        </div>
    );




}


export default FamousList;
