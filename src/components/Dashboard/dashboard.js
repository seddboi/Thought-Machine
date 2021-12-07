import React, {useState} from 'react';
import {generateId} from '../../Utilities/generateId.js';
import {expirationTime} from '../../Utilities/expirationTime.js';
import {Form} from '../Form/Form.js';
import {Thought} from '../Thought/Thought.js';

import './Dashboard.css'

export function Dashboard() {
    // Sets up sample message when site first loads up; eventually disappears after 15s
    // generateId adheres an id number starting at 0, to each thought to easily identify each thought
    // expirationTime sets the automatic removal of the "thought" 15 seconds away from current time
    const [thoughts, setThoughts] = useState([
        {
        id: generateId(),
        text: "Don't worry...",
        expiresAt: expirationTime(),
        }, 
        {
        id: generateId(),
        text: 'They disappear after 15 seconds!',
        expiresAt: expirationTime(), 
        }
    ]);

    //adds new thought object to array lists out all collective thoughts in thoughts array
    const addThought = (thought) => {
        setThoughts((prev) => [thought, ...prev]);
    };

    const removeThought = (thoughtID) => {
        //reuses state and uses filter function to cycle through each object in the thoughts array,
        // and remove the thought whose ID matches the one that was selected(clicked) on
        setThoughts((prev) => {
            return prev.filter((thought) => thought.id !== thoughtID)
        });
    };

    return (
        <div>
            <h1 className='main-title'>Thought Machine</h1>
            <h3 className='second-title'>This is an open space for any of your thoughts.</h3>
            <h3 className='second-title'>Thanks for visiting!</h3>
            <Form addThought={addThought} />
            <ul className='thoughts'>
                {thoughts.map( thought => 
                    (<Thought key={thought.id} thought={thought} removeThought={removeThought} />) 
                )}
            </ul>
            <a target='_blank' href='https://github.com/seddboi'><h4 className='credits'>created by gian z :)</h4></a>
        </div>
    )
};