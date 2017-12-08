import React from 'react';
import PropTypes from 'prop-types';
import './Controls.css';


export default class Controls extends React.Component {

  constructor() {
    super();
    this.state = {active: 0};
    this.passClickInfo = this.passClickInfo.bind(this);
  }

  passClickInfo (category, position) {
    this.props.clickCategory(category);
    this.toggle(position);
  }

  toggle(position) {
    if (this.state.active === position) {
      this.setState({active : null});
    } else {
      this.setState({active: position});
    }
  }

  bgColor(position) {
    if (this.state.active === position) {
      return "#feda4a";
    } return "";
  }


  render(){
    const favoriteNumber = this.props.favorites.length;
    return (
      <div className = "controls">
        <button 
          style = {{backgroundColor: this.bgColor(0)}}
          className="compare-button character"
          onClick={ () => this.passClickInfo('character', 0)}>
            People
        </button>
        <button
          style = {{backgroundColor: this.bgColor(1)}} 
          className="compare-button planet"
          onClick={ () => this.passClickInfo('planet', 1)}>
            Planets
        </button>
        <button
          style = {{backgroundColor: this.bgColor(2)}}
          className="compare-button vehicle"
          onClick={ () => this.passClickInfo('vehicle', 2)}>
            Vehicles
        </button>
        <button
          style = {{backgroundColor: this.bgColor(3)}}
          className="compare-button favorite"
          onClick={ () => this.passClickInfo('favorite', 3)}>
            Favorites: {favoriteNumber}
        </button>
      </div>
    );
  }
}

