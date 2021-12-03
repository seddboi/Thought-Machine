import React, {useEffect} from 'react';

export function Thought(props) {
    // variables that takes in props that were entered by the user, on the dashboard
    const {thought, removeThought} = props;

    useEffect(() => {
        // adjusts the countdown of the time to the time set to the current time. 
        // once they are equal(the subtraction is equal to zero), the timout triggers
        const timeRemaining = thought.expiresAt - Date.now();
        
        // tomeout function that deletes message after time remaining "runs out"
        const timeout = setTimeout(() => {
            removeThought(thought.id)
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
        <li className='Thought'>
            <button className='remove-button' onClick={handleRemoveClick}>&times;</button>
            <p className='text' >{thought.text}</p>
        </li>
    )
};