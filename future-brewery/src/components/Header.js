import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from  '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header ({ title }) {
  return(
    <div className="App-header">
      <Link to="/">
        <FontAwesomeIcon icon={ faHome } />
      </Link>
      <header>
        <h1 className="page-title">
          { title }
        </h1>
      </header>
      <FontAwesomeIcon icon={ faBell } />
    </div>
  )
}

export default Header;
