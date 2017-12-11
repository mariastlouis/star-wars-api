import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';


const CardContainer = ({info, addFavorite, category}) => {
  const favoriteMessage = category === 'favorite' && !info.length
    ? 'No favorites selected. Choose one to display.' : '';

  return (
    <div className = "card-container">
      <div className = "card-holder">
        <div className = "category">
          <p>{favoriteMessage}</p>
        </div>
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

CardContainer.propTypes = {
  info: PropTypes.array,
  category: PropTypes.string,
  addFavorite: PropTypes.func
};