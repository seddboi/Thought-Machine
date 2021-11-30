import React, {useState} from 'react';
import generateId from '../../Utilities/generateID.js';
import expirationTime from '../../Utilities/expirationtime.js';
import Form from '../Form/form.js';
import Thought from '../Thought/thought.js';

function Dashboard() {
    const [thoughts, setThoughts] = useState([{
        id: generateId,
        text: 'Add your thoughts!',
        expires: expirationTime,
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
            prev.filter((thought) => thought.id !== thoughtID)
        });
    };

    return (
        <div>
            <h1>Thought Machine</h1>
            <h3>Welcome! This is an open space for any of your thoughts.</h3>
            <h3>These thoughts disappear after 15 seconds, so feel free to share anything and everything you'd like!</h3>
            <h2>Thanks for visiting!</h2>
            <Form addThought={addThought} />
            <ul className='thoughts-ul'>
                {thoughts.map((thought) => (
                    <Thought key={thought.id} thought={thought} removeThought={removeThought} /> 
                ))}
            </ul>
        </div>
    )
};

export default Dashboard;
