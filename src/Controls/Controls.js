import React from 'react'
import PropTypes from 'prop-types';
import './Controls.css'


const Controls = ({clickCategory}) => {
  return (
    <div className = "controls">
       <button 
          className="compare-button character"
           onClick={ () => clickCategory('character')}>
          People
        </button>
        <button 
          className="compare-button character"
          onClick={ () => clickCategory('planet')}>
          Planets
        </button>
        <button 
          className="compare-button character"
          onClick={ () => clickCategory('vehicle')}>
          Vehicles
        </button>


    </div>
  )
}

export default Controls;