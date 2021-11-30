import React, {useEffect} from 'react';

export function Thought(props) {
    const {thought, removeThought} = props;

    useEffect(() => {
        const timeRemaining = thought.expirationTime - Date.now();

        const timeout = setTimeout(() => {
            removeThought(thought.id)
        }, timeRemaining);

        return () => {
            clearTimeout(timeout);
        }
    }, [thought]);

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li className='thought-li'>
            <button className='remove-button' onClick={handleRemoveClick}></button>
            <p className='text' >{thought.text}</p>
        </li>
    )
};