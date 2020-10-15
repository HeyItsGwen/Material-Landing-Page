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
      <li>
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
    <section class='jumbotron d-flex flex-column flex-md-row justify-content-between'>
      <span class='align-self-md-center' id='titleP'>
        <h1>Your Brand</h1>
        <p>Put it in the spotlight, and show it off to the world</p>
      </span>
      <span class='card align-self-md-center'>
        <img src={watch} class='card-img-top' alt='a product'></img>
        <div class='card-body'>
          <h3 class='card-title text-right'>Make it yours</h3>
          <p class='card-text text-right'>Drive users to your products</p>
          <a href='http://www.ebay.com' target='blank' class='btn btn-info'>Shop</a>
        </div>
      </span>
    </section>
  )
}