import React from 'react';

function App() {
  return (
    <div className="App">
      <header className='App-header' class='d-flex'>
        <nav class='d-flex flex-column flex-md-row justify-content-between align-items-end' id='navBar'>
          <NavLinks />
          <SocialLinks />
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
        <a href='#navBar'><i class="fas fa-arrow-alt-circle-up"></i></a>
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

function SocialLinks() {
  return (
    <ul class='d-flex' id='socialLinks'>
      <li><a href='#' target='blank'><i class="fab fa-facebook"></i></a></li>
      <li><a href='#' target='blank'><i class="fab fa-twitter"></i></a></li>
      <li><a href='#' target='blank'><i class="fab fa-instagram"></i></a></li>
    </ul>
  )
}
