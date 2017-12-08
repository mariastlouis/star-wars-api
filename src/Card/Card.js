import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import emptyStar from '../images/fav-star-empty.png';
import fullStar from '../images/fav-star-full.png';

const Card = ({name, info, favorite, category, addFavorite}) => {

  const favoriteStar = favorite ? 
    <img src = { fullStar } alt = "favorite" /> :
    <img src = { emptyStar } alt = "not favorite" />;


  const dataKeys = Object.keys(info);
  const dataRows = dataKeys.map((key, index) => {
    return <li key = {index}> <span className="accent">
      {`${key}:`}</span>{` ${info[key]}`} </li>;

  });

  return (
    <div className = "card">
      <div className = "card-head">
        <div className = "head">
          <h2> {name} </h2>
        </div>
        <div className = "fav"
          onClick={ () => addFavorite(name, category)}>
          {favoriteStar}
        </div>
      </div>
      <div className = "card-body">
        <ul className = "card-data">
          {dataRows}
        </ul>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object,
  favorite: PropTypes.bool,
  category: PropTypes.string,
  addFavorite: PropTypes.func

};