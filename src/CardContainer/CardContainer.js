import React from 'react';
import Card from '../Card/Card.js'
import PropTypes from 'prop-types';
import './CardContainer.css';



const CardContainer = ({characterArray}) => {


  return (
    <div className = "card-container">
      <div className = "card-holder">
      {
        characterArray.map((character, index) =>{
          return (
            <Card
            key = {index}
            name = {character.name}
            data = {character.data} />
            );
        })
      }
      </div>
    </div>
  )
}

export default CardContainer;