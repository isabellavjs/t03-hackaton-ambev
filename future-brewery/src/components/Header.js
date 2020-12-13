import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from  '@fortawesome/free-solid-svg-icons';

function Header ({ title }) {
  return(
    <div className="App-header">
      <FontAwesomeIcon icon={ faHome } />
      <header>
        <h1 className="page-title">
          { title }
        </h1>
      </header>
    </div>
  )
}

export default Header;
