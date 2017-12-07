import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({name, data}) => {
  
const dataKeys = Object.keys(data);
const dataRows = dataKeys.map((key, index) => {
 return <li key = {index}> <span className="accent"> {`${key}:`}</span>{` ${data[key]}`} </li> 

  });

  return (
    <div className = "card">
      <div className = "card-head">
        <h2> {name} </h2>
      </div>
      <div className = "card-body">
        <ul className = "card-data">
          {dataRows}
        </ul>
      </div>
    </div>
  )
}

export default Card;