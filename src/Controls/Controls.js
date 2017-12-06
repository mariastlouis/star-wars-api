import React from 'react'
import PropTypes from 'prop-types';


const Controls = ({clickCategory}) => {
  return (
    <div className = "controls">
       <button 
          className="compare-button"
           onClick={ () => clickCategory('character')}>
          People
        </button>
        <button 
          className="compare-button"
          onClick={ () => clickCategory('planet')}>
          Planets
        </button>
        <button 
          className="compare-button"
          onClick={ () => clickCategory('vehicle')}>
          Planets
        </button>


    </div>
  )
}

export default Controls;