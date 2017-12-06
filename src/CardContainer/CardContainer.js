import React from 'react';
import Card from '../Card/Card.js'
import PropTypes from 'prop-types';
import './CardContainer.scss';



const CardContainer = ({characterArray}) => {



  return (
    <div className = "cardContainer">
      {
        characterArray.map((character, index) =>{
          return (

            <Card
            name = {character.name}
            data = {character.data} />
            )
        })
      }
      
    </div>
  )
}

export default CardContainer;