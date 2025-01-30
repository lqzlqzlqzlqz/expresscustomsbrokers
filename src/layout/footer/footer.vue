<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section logo-section">
          <a href="/" class="logo-link">
            <img
              src="https://expresscustomsbrokers.co.nz/wp-content/uploads/2022/05/cropped-EXPRESS-CUSTOMS-BROKERS-LTDLOGO-01.png"
              alt="Express Customs Brokers Logo"
              class="logo-image cropped-logo"
            />
          </a>
          <p class="tagline">In the global era, make your life simpler</p>
        </div>
        <div class="footer-section menu-section">
          <h6 class="section-title">Menu</h6>
          <ul class="menu-list">
            <li><a href="/" class="menu-link">Home</a></li>
            <li><a href="/contact/" class="menu-link">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section services-section">
          <h6 class="section-title">Services</h6>
          <ul class="services-list">
            <!-- <li><a href="/services/section1" :class="{ 'menu-link': true }">Carousel</a></li> -->
            <li><a href="/services/section2" :class="{ 'menu-link': true }">Import & Export Service</a></li>
            <li><a href="/services/section3" :class="{ 'menu-link': true }">Ocean Freight</a></li>
            <li><a href="/services/section4" :class="{ 'menu-link': true }">Air Freight</a></li>
            <li><a href="/services/section5" :class="{ 'menu-link': true }">Service List</a></li>
          </ul>
        </div>
        <div class="footer-section links-section">
          <h6 class="section-title">Useful Links</h6>
          <ul class="links-list">
            <li><a href="https://www.customs.govt.nz/" target="_blank" class="link">New Zealand Customs</a></li>
            <li><a href="https://www.mpi.govt.nz/" target="_blank" class="link">Ministry of Primary Industries</a></li>
            <li><a href="https://www.mfat.govt.nz/" target="_blank" class="link">Ministry of Foreign Affairs & Trade</a></li>
            <li><a href="https://www.standards.govt.nz/" target="_blank" class="link">Standards New Zealand</a></li>
            <li><a href="http://cargotracking.utopiax.org/" target="_blank" class="link">Cargo Tracking</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2024 Express Customs Broker. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 20px;
  }
  
  .logo-link {
    display: block;
    margin-bottom: 10px;
  }
  
  .logo-image {
    width: 120px;
    height: auto;
  }
  
  .tagline {
    font-size: 14px;
    color: #aaa;
    margin-top: 10px;
  }
  
  .section-title {
    font-size: 16px;
    margin-bottom: 15px;
    color: #fff;
    text-transform: uppercase;
  }
  
  .menu-list,
  .services-list,
  .links-list {
    list-style: none;
    padding: 0;
    margin-left: 0;
  }
  
  .menu-link,
  .link {
    color: #bbb;
    text-decoration: none;
    display: block;
    margin: 5px 0;
    transition: color 0.3s;
    text-decoration: underline;
  }
  
  .menu-link:hover,
  .link:hover {
    color: #fff;
  }
  
  .footer-bottom {
    border-top: 1px solid #444;
    padding-top: 15px;
    font-size: 14px;
    color: #aaa;
    margin-top: 20px;
  }

  .cropped-logo {
  display: block;
  margin: auto;
  height: auto;
  object-fit: cover;
  object-position: top;
  clip-path: inset(0px 0px 20px 0px);
}
  </style>