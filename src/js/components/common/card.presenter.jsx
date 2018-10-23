import React from 'react';

export const Card = ({ title, lineA, lineB }) => {
    const cardStyle = {
      border: '1px solid black',
      borderRadius: '4px',
      margin: '10px',
      padding: '10px'
    };

    return (
      <div 
        style={cardStyle}
      >
        <div>{title}</div>
        <div>{lineA}</div>
        <div>{lineB}</div>
      </div>
    )
}