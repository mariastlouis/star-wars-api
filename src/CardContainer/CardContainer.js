import React from 'react';
import Card from '../Card/Card.js'
import PropTypes from 'prop-types';
import './CardContainer.css';


const CardContainer = ({data, addFavorite, category}) => {

  return (
    <div className = "card-container">
      <div className = "card-holder">
      {
        data.map((stat, index) =>{
          return (
            <Card
            key = {index}
            name = {stat.name}
            data = {stat.data}
            favorite = {stat.favorite} 
            addFavorite = {addFavorite}
            category = {category} />
            );
        })
      }
      </div>
    </div>
  )
}

export default CardContainer;