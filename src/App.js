import React from 'react';

function App() {
  return (
    <div className="App">
      <header class='d-flex'>
        <img src='' alt='company logo'/>
        <nav className="App-header" id='navBar'>
          <NavLinks />
        </nav>
      </header>
    </div>
  );
}

export default App;

function NavLinks() {
  return (
    <ul class='d-flex'>
      <li>
        <a href='#navBar'>To Top</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#retailers'>Find a Retailer</a>
      </li>
    </ul>
  )
}
