import React from 'react';

export default function BookCard({ image, title, authors1, authors2 }) {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>Автор: {authors1}</p>
            <p>Шыққан жылы: {authors2}</p>
        </div>
    );
}
