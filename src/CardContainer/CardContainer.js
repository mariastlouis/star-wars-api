import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';


const CardContainer = ({info, addFavorite, category}) => {

  return (
    <div className = "card-container">
      <div className = "card-holder">
        {
          info.map((stat, index) =>{
            return (
              <Card
                key = {index}
                name = {stat.name}
                info = {stat.info}
                favorite = {stat.favorite} 
                addFavorite = {addFavorite}
                category = {category} />
            );
          })
        }
      </div>
    </div>
  );
};

export default CardContainer;