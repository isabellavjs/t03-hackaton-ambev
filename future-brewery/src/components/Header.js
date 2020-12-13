import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Header ({ title }) {
  return(
    <div className="App-header">
      <div></div>
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
