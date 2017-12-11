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

 
  getActive(position) {
    if(this.state.active === position) {
      return 'active'
    } return ''
  }

 

  render(){
    const favoriteNumber = this.props.favorites.length;
    return (
      <div className = "controls">
        <button 
          className={`compare-button character ${this.getActive(0)}`}
          onClick={ () => this.passClickInfo('character', 0)}>
            People
        </button>
        <button
          className={`compare-button planet ${this.getActive(1)}`}
          onClick={ () => this.passClickInfo('planet', 1)}>
            Planets
        </button>
        <button
          className={`compare-button vehicle ${this.getActive(2)}`}
          onClick={ () => this.passClickInfo('vehicle', 2)}>
            Vehicles
        </button>
        <button
          className={`compare-button favorite ${this.getActive(3)}`}
          onClick={ () => this.passClickInfo('favorite', 3)}>
            Favorites: {favoriteNumber}
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  clickCategory: PropTypes.func,
  favorites: PropTypes.array
};

