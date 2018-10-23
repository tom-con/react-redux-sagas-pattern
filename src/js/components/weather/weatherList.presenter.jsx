import React from 'react';

import { Card } from '../common/card.presenter';

export const WeatherList = ({ cities }) => {
  const listStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
  
  return (
    <div 
      style={listStyle}
    >
      {cities.map(({name, description, temperature}, i) => {
        return (
          <Card 
            key={`${i}-${name}`}
            title={name}
            lineA={description}
            lineB={temperature}
          />
        )
      })}
    </div>
  )
}


