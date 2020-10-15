import React from 'react';
import watch from './images/watch.jpg';

function App() {
  return (
    <div className="App">
      <header className='App-header' class='d-flex' id='header'>
        <nav class='d-flex flex-column flex-sm-row justify-content-between align-items-md-end align-items-center' id='navBar'>
          <NavLinks />
          <SocialLinks />
        </nav>
      </header>
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;

function NavLinks() {
  return (
    <ul class='d-flex'>
      <li class='firstLi'>
        <a href='#header'><i class="fas fa-arrow-alt-circle-up"></i></a>
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
    <ul class='d-none d-sm-flex' id='socialLinks'>
      <li><a href='http://www.facebook.com' target='blank'><i class="fab fa-facebook"></i></a></li>
      <li><a href='http://www.twitter.com' target='blank'><i class="fab fa-twitter"></i></a></li>
      <li><a href='http://www.instagram.com' target='blank'><i class="fab fa-instagram"></i></a></li>
    </ul>
  )
}

function HeroSection() {
  return (
    <section class='jumbotron d-flex flex-column flex-md-row justify-content-between align-items-center'>
      <span class='align-self-md-center' id='titleP'>
        <h1>It's<br/>Your<br/>Brand</h1>
        <p>Put it in the spotlight; Show it off to the world</p>
      </span>
    </section>
  )
}