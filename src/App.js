import React from 'react';

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
        <AboutSection />
        <FindARetailer />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

function NavLinks() {
  return (
    <ul class='d-flex navLinks'>
      <li class='firstLi'>
        <a href='#header'><i class="fas fa-igloo"></i></a>
      </li>
      <li>
        <a href='#aboutSection'>About</a>
      </li>
      <li>
        <a href='#retailers'>Find a Retailer</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
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
    <section class='jumbotron d-flex flex-md-row justify-content-center justify-content-md-between align-items-center'>
      <span class='align-self-md-center' id='titleP'>
        <h1>It's<br/>Your<br/>Brand</h1>
        <p>Show it off to the world</p>
      </span>
    </section>
  )
}

function AboutSection() {
  return (
    <section id='aboutSection' class='d-flex flex-column align-items-center'>
      <div class='row'>
        <div class='col-12 col-sm-6 col-md-4 text-center d-flex aboutInfo justify-content-center'>
          <span class='d-block'>
            <i class="fas fa-info-circle"></i>
            <p>Show people how good your brand is, let them know how much they need you</p>
          </span>
        </div>
        <div class='col-12 col-sm-6 col-md-4 text-center d-flex aboutInfo justify-content-center'>
          <span class='d-block alternateGrey'>
            <i class="far fa-paper-plane"></i>
            <p>Maybe talk about your successes, your achievements, or plans...</p>
          </span>
        </div>
        <div class='col-12 d-none d-md-block col-md-4 col-lg-4 text-center aboutInfo'>
          <span class='d-block'>
            <i class="fas fa-pager"></i>
            <p>Or let them know how good your customer service is, or the reviews you've gotten.</p>
          </span>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 col-sm-6 col-md-4 text-center d-flex aboutInfo justify-content-center'>
          <span class='d-block alternateGrey'>
            <i class="fas fa-scroll"></i>
            <p>It could be your employees, or customer service team, with their headshots</p>
          </span>
        </div>
        <div class='col-12 col-sm-6 col-md-4 text-center d-flex aboutInfo justify-content-center'>
          <span class='d-block'>
            <i class="fas fa-palette"></i>
            <p>Let the world know what you have to offer in short, bite-sized portions</p>
          </span>
        </div>
        <div class='col-12 d-none d-md-block col-md-4 col-lg-4 text-center aboutInfo'>
          <span class='d-block alternateGrey'>
            <i class="fas fa-arrow-circle-down"></i>
            <p>Then send them further to something actionable: a shop, social media, a contact form...</p>
          </span>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 downArrow'>
          <a href='#retailers'><i class="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  )
}

function FindARetailer() {
  return (
    <section id='retailers' class='d-flex flex-column align-items-center'>
      <h3>Find A Retailer <i class="fas fa-shopping-cart"></i></h3>
      <div class='row' id='retailerDiv'>
        <div class='col-6'>
          <p>ONE</p>
          <p>SHOP LINKS</p>
        </div>
        <div class='col-6'>
          <p>TWO</p>
          <p>Physical Locations</p>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <div id='contact' class='d-flex flex-column align-items-center'>
      <h3><i class="fas fa-comments"></i> Contact Us</h3>
      <div class='row justify-content-around' id='contactDiv'>
        <div class='col-sm-6 col-12 d-flex flex-column justify-content-center contactSections'>
          <p class='text-center'>Find us on social media</p>
          <ul class='d-flex justify-content-around bottomSocials'>
            <li><a href='http://www.facebook.com' target='blank'><i class="fab fa-facebook"></i></a></li>
            <li><a href='http://www.twitter.com' target='blank'><i class="fab fa-twitter"></i></a></li>
            <li><a href='http://www.instagram.com' target='blank'><i class="fab fa-instagram"></i></a></li>
          </ul>
          <p class='text-center'>Or send us an email at:<br/><a class='text-center' href='emailto:exampleemail@email.com'>YourBrand@email.com</a></p>
          <p class='text-center'></p>
        </div>
        <div class='col-sm-6 col-12 contactSections'>
          <p>Or contact us here, and we'll get back to you:</p>
          <form id='contactForm'>
            <div class='form-group'>
              <label for='emailInput'>Your Email:</label>
              <input type='email' class='form-control' id='emailInput' aria-describedby="emailHelp"></input>
              <small id='emailHelp' class='form-text text-muted'>Your information is safe with us!</small>
            </div>
            <div class='form-group'>
              <label for='helpInput'>How can we help?</label>
              <input type='text' class='form-control' id='helpInput'></input>
            </div>
            <button type='submit' class='btn btn-secondary'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div id='footer' class='d-flex flex-column align-items-center'>
      <p>Copyright <i class="fas fa-copyright"></i>Your Brand 2020. | <a class='text-center' href='emailto:exampleemail@email.com'>YourBrand@email.com</a> | 1(800)555-1234</p>
      <p>Made with ♥ and <i class="fas fa-coffee"></i> by <a href='https://github.com/HeyItsGwen' target='blank'>Gwen</a></p>
    </div>
  )
}