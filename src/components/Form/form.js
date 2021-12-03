import React, {useState} from 'react';
import {generateId} from '../../Utilities/generateId.js';
import {expirationTime} from '../../Utilities/expirationTime.js';

import './Form.css';

export function Form(props) {
    const [text, setText] = useState('');

    //this function is called everytime the text value in the entry box is changed... adjusts state value of text
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //sets object for new thought and fills in new message; new generated ID and new time 15 seconds ahead of current time
        const thought = {
            id: generateId(),
            text: text,
            expiresAt: expirationTime(),
        };
        
        // checks if text has any text within it, then submits the new 'thought' to props.addThought
        if (text.length > 0) {
            props.addThought(thought);
            // sets text state back to blank after submitting new thought
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='Form'>
            <input value={text} onChange={handleTextChange} type='text' placeholder="Go ahead ... there's no CIA agents here :)" />
            <input type='submit' value='add' />
        </form>
    );
};