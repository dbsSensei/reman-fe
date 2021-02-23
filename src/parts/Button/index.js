import React from 'react';
import propTypes from 'prop-types';
import './index.css';
import { Link } from 'react-router-dom';

export default function index(props) {
  if (props.type === 'link') {
    return <a href=""></a>;
  }

  // if(props.type === '')

  return <button></button>;
}

index.propTypes = {
  type: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
};
