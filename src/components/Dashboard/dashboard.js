import React, {useState} from 'react';
import {generateId} from '../../Utilities/generateId.js';
import {expirationTime} from '../../Utilities/expirationTime.js';
import {Form} from '../Form/Form.js';
import {Thought} from '../Thought/Thought.js';

export function Dashboard() {
    // Sets up sample message when site first loads up; eventually disappears after 15s
    // generateId adheres an id number starting at 0, to each thought to easily identify each thought
    // expirationTime sets the automatic removal of the "thought" 15 seconds away from current time
    const [thoughts, setThoughts] = useState([
        {
        id: generateId(),
        text: "Add your thoughts, don't be shy!",
        expiresAt: expirationTime(),
        }, 
        {
        id: generateId(),
        text: 'They disappear after 15 seconds!',
        expiresAt: expirationTime(), 
        }
    ]);
    console.log(thoughts);
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
    // console.log(thoughts.map((thought) => thought.id));
    return (
        <div>
            <h1>Thought Machine</h1>
            <h3>Welcome! This is an open space for any of your thoughts.</h3>
            <h2>Thanks for visiting!</h2>
            <Form addThought={addThought} />
            <ul className='thoughts'>
                {thoughts.map( thought => 
                    (<Thought key={thought.id} thought={thought} removeThought={removeThought} />) 
                    // thought.text
                )}
            </ul>
        </div>
    )
};