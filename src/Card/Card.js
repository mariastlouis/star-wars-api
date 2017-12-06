import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({name, data}) => {
  
const dataKeys = Object.keys(data);
const dataRows = dataKeys.map(key => {
 return <li> {`${key}: ${data[key]}`} </li> 

  });

  return (
    <div className = "card">
      <h2> {name} </h2>
      <div>
        <ul>
          {dataRows}
        </ul>
      </div>

      
    </div>
  )
}

export default Card;