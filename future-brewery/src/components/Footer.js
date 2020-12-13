import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from  '@fortawesome/free-solid-svg-icons';

function Footer () {
  return (
    <div className="App-footer">
      <footer>
        <nav className="navigation">
          <p>Publicações</p>
          <Link className="link" to="/">
            <FontAwesomeIcon icon={ faHome } />
          </Link>
          <p>Histórico</p>
        </nav>
      </footer>
    </div>
  )
}

export default Footer;
