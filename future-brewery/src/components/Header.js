import React from 'react';

function Header ({ title }) {
  return(
    <div className="App-header">
      <header>
        <h1 className="page-title">
          { title }
        </h1>
      </header>
    </div>
  )
}

export default Header;
