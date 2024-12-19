import React from "react";
function Homepage() {
  return (
    <div id="Homepage" className="parent">
      {/* Header Section */}
      <header className="header">
        <h2 className="logo">MuYMuY</h2>
        <div className="button-container">
          <button className="butU">
            <a href="loginpage.html#register">Sign Up</a>
          </button>
          <button id="butI" className="butI">
            <a href="loginpage.html#login">Sign In</a>
          </button>
        </div>
      </header>

      {/* Navigation Section */}
      <nav className="navi">
        <div className="nav-items">
          <nav>Home</nav>
          <nav>Job</nav>
          <nav>About Us</nav>
          <nav>Contact Us</nav>
        </div>
        <div className="language-wrapper">
          <button className="lan-button">
            ENG
            <img className="dropdown-icon" src="/img/down.png" alt="Dropdown Icon" />
          </button>
        </div>
      </nav>

      {/* Learn More Section */}
      <div className="learnmore">
        <p>Career Builder & MuYMuY are combining!</p>
        <nav>Learn More</nav>
        <img className="arrow" src="/img/right-arrow.png" alt="Arrow Icon" />
      </div>

      {/* Search Section */}
      <section className="search-container">
        <div className="search">
          <div className="text">
            <h3>Find the</h3>
            <h3>Right</h3>
            <h3>Fit</h3>
          </div>
          <div className="sitesearch">
            <div className="keyword">
              <input type="text" className="inpu" placeholder="Keywords and companies" />
              <button className="clear-input">
                <svg>
                  <use xlinkHref="#close"></use>
                </svg>
              </button>
              <img className="icon" src="/img/searches.png" alt="Search Icon" />
            </div>
            <div className="location">
              <input type="text" className="loc-input" placeholder="Location" />
              <button className="clear-input">
                <svg>
                  <use xlinkHref="#close"></use>
                </svg>
              </button>
              <img className="loc-icon" src="/img/location.png" alt="Location Icon" />
            </div>
            <div className="submit">
              <button className="success">Search</button>
            </div>
          </div>
        </div>

        <div className="popular-search">
          <h4>Popular Searches</h4>
          <div className="ButSearch">
            {["Work From Home", "Part Time", "Customer Service", "Engineering", "IT", "Data Analyst", "Digital Marketing", "Software Engineer", "Doctor", "English Teacher"].map((search, index) => (
              <button key={index}>
                <img src="/img/searches.png" alt="Search Icon" /> {search}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content Section */}
      <section className="extra-content">
        <div className="left">
          <h2>Sign In to get job alert</h2>
          <p>Our powerful matching technology will send job matches right to your inbox.</p>
          <button className="explore-button">Explore Now</button>
        </div>
        <div>
          <img src="/img/image 15.png" alt="Extra Content Image" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="contact">
          <h1>MuYMuY</h1>
          <p>MuYMuY is Cambodia's #1 Job Matching Service</p>
          <p>Find us on social media:</p>
          <div className="sm">
            <img src="/img/facebook.png" alt="Facebook Icon" />
            <img src="/img/github.png" alt="GitHub Icon" />
            <img src="/img/search.png" alt="Search Icon" />
          </div>
        </div>
        <div className="add">
          <h4>Our Contact</h4>
          <p>#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab, Khan Porsenchey, Phnom Penh, Cambodia</p>
          <p>Tel: 855 9999999</p>
          <p>Email: muymuy@gmail.com</p>
          <p>Monday-Friday</p>
          <p>8:00am - 5:00pm</p>
        </div>
      </footer>
      <div className="credit">
        <p>All rights reserved &#xA9; 2024 MuYMuY.</p>
      </div>
    </div>
  );
}

export default Homepage;
