import React, {useEffect} from 'react';

import './Thought.css';
import 'animate.css';

export function Thought(props) {
    // variables that takes in props that were entered by the user, on the dashboard
    const {thought, removeThought} = props;

    useEffect(() => {
        // adjusts the countdown of the time to the time set to the current time. 
        // once they are equal(the subtraction is equal to zero), the timout triggers
        const timeRemaining = thought.expiresAt - Date.now();
        
        // timeout function that deletes message after time remaining "runs out"
        const timeout = setTimeout(() => {
            removeThought(thought.id);
            // document.getElementById('Thought').classList.remove('animate__fadeIn');
            // document.getElementById('Thought').classList.add('animate__fadeOut');
        }, timeRemaining);

        // cleanup function to clear out time
        return () => {
            clearTimeout(timeout);
        }
    }, [thought]);

    // removes thought at selected id, when you select the x button attached
    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li id='Thought' className='Thought animate__animated animate__fadeIn'>
            <h4 className='text' >{thought.text}</h4>
            <button className='remove-button' onClick={handleRemoveClick}>&times;</button>
        </li>
    )
};