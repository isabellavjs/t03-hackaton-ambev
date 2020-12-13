import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from  '@fortawesome/free-solid-svg-icons';

function Footer () {
  return (
    <div className="App-footer">
      <footer>
        <nav className="navigation">
          <p>Feed de notícias</p>
          <Link className="link" to="/">
            <FontAwesomeIcon icon={ faHome } />
          </Link>
          <p>Histórico de consumo</p>
        </nav>
      </footer>
    </div>
  )
}

export default Footer;
