import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="logo">Adwiser.</div>
    <div class="nav-links">
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
        <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" style="display: none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <div class="badge">Next-Gen Digital Marketing</div>
      <h1>Elevate your brand<br>to the <span class="gradient-text">stratosphere</span></h1>
      <p>We craft ultra-visual, high-converting digital experiences. From Meta Ads to cutting-edge web development, Adwiser is your unfair advantage.</p>
      <div class="cta-group">
        <a href="#services" class="btn btn-primary">Explore Services</a>
        <a href="#contact" class="btn btn-outline">Let's Talk</a>
      </div>
    </div>
    <div class="hero-graphics">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="glass-card decorative-card-1">
        <div class="stat">2.5x</div>
        <div class="stat-label">ROI Increase</div>
      </div>
      <div class="glass-card decorative-card-2">
        <div class="stat">Meta</div>
        <div class="stat-label">Ads Experts</div>
      </div>
    </div>
  </header>

  <section id="services" class="services">
    <div class="section-header">
      <h2>Our Arsenal</h2>
      <p>Everything you need to dominate the digital landscape.</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <h3>Lead Generation</h3>
        <p>High-quality, intent-driven leads that convert. We fill your pipeline so you can focus on closing.</p>
      </div>
      
      <div class="service-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3>Meta Ads Accounts</h3>
        <p>Secure, verified, and warmed-up Meta Ads accounts ready for scaling without bans.</p>
      </div>

      <div class="service-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </div>
        <h3>Ads Setup & Strategy</h3>
        <p>Pixel integration, audience targeting, and campaign architecture designed for maximum ROI.</p>
      </div>

      <div class="service-card">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h3>Website Development</h3>
        <p>Blazing fast, ultra-visual websites built to convert. We don't just build sites, we build digital experiences.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="glass-card contact-card">
      <h2>Ready to level up?</h2>
      <p>Let's build something extraordinary together.</p>
      <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent! (Demo only)');">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Tell us about your project" rows="4" required></textarea>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="footer-content">
      <div class="logo">Adwiser.</div>
      <p>&copy; ${new Date().getFullYear()} Adwiser. All rights reserved.</p>
    </div>
  </footer>
`

// Theme Toggling Logic
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Check for saved theme preference or system preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'light') {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  } else {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }
};

// Initialize theme
setTheme(getPreferredTheme());

// Toggle event listener
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
