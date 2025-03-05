import React, { useState } from 'react';

export default function KeyEvent() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const uppercaseValue = e.target.value.toUpperCase();
        setInputValue(uppercaseValue);
        console.log(uppercaseValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Submitted!');
        }
    };

    return (
        <div className='card'>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
