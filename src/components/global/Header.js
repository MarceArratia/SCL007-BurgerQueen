//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Header.css';

class Header extends Component {
  static propTypes ={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title,} = this.props;
//key guarda la posición de cada elemento en el array
    return (
      <div className="Header">
      <h1>{title}</h1>

      </div>
    );
  }
}

export default Header;
