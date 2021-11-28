import React, {useState} from 'react';
import generateId from '../../Utilities/generateID';
import expirationTime from '../../Utilities/expirationtime';

function Dashboard() {
    const [thoughts, setThoughts] = useState([{
        id: generateId(),
        text: 'Add your thoughts!',
        expires: expirationTime(),
        }
    ]);

    const addThought = (thought) => {
        setThoughts((thoughts) => [thought, ...thoughts]);
    };

    return (
        <div>
            <h1>Thought Machine</h1>
            <h3>Welcome! This is an open space for any of your thoughts.</h3>
            <h3>These thoughts disappear after 15 seconds, so feel free to share anything and everything you'd like!</h3>
            <h2>Thanks for visiting!</h2>
            <div className='thought-div'>

            </div>
        </div>
    )
};

export default Dashboard;
