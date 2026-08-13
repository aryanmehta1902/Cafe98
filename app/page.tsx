import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FiArrowDown, FiArrowDownRight, FiMapPin, FiPhone } from "react-icons/fi";

const drinks = [
  ["Espresso / Ristretto", "$3 · iced $5"],
  ["Americano", "$4 · iced $5"],
  ["Latte / Cappuccino", "$5 · iced $6"],
  ["White or Dark Mocha", "$6 · iced $7"],
  ["Matcha / Chai Latte", "$6 · iced $7"],
  ["Turkish Coffee", "$4"],
];

const kitchen = [
  ["Sausage Melt Bagel", "$8"],
  ["Protein Classic Bagel", "$9"],
  ["Chopped BLT Bagel", "$8.5"],
  ["House Croissant Sandwich", "$10"],
  ["Chimney Sandwich", "$12"],
  ["Fresh-baked pastry", "from $4"],
];

function MenuList({ items }: { items: string[][] }) {
  return (
    <ul className="menu-list">
      {items.map(([name, price]) => (
        <li key={name}>
          <span>{name}</span>
          <span className="menu-rule" aria-hidden="true" />
          <span>{price}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Cafe 98, back to top">
          <img src="/images/cafe98-logo-white.png" alt="Cafe 98, Lake City, Colorado" />
        </a>
        <a className="glass-button menu-jump" href="#menu">
          Menu <FiArrowDownRight className="menu-arrow" aria-hidden="true" />
        </a>
      </header>

      <section className="hero photo-section" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Coffee · Pastry · Mountain air</p>
          <h1>Coffee, pastries<br />&amp; a mountain view.</h1>
          <p className="hero-copy">
            Fresh coffee and house-made pastries in downtown Lake City.
          </p>
          <a className="scroll-cue" href="#story" aria-label="Scroll to our story">
            <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="story photo-section" id="story">
        <div className="story-grid">
          <div className="story-card glass-panel">
            <p className="eyebrow">Our story</p>
            <h2>A little café<br />in Lake City.</h2>
            <p>
              We make our pastries from scratch, pull every espresso to order, and
              keep the welcome easy. The menu brings together Turkish favorites,
              classic café drinks, and plenty of good things for the road.
            </p>
          </div>
          <div className="story-photos" aria-label="Inside Cafe 98">
            <img className="story-photo story-photo-main" src="/images/story-wall.jpg" alt="Sunlight and local art inside Cafe 98" />
            <img className="story-photo story-photo-float" src="/images/pistachio-latte.jpg" alt="Iced pistachio coffee" />
          </div>
        </div>
      </section>

      <section className="menu-section photo-section" id="menu">
        <div className="menu-wrap glass-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The menu</p>
              <h2>Coffee &amp;<br />something to eat.</h2>
            </div>
            <p className="menu-note">Our short list of favorites. Seasonal bakes and specials change often.</p>
          </div>
          <div className="menu-columns">
            <div>
              <h3>Coffee &amp; tea</h3>
              <MenuList items={drinks} />
            </div>
            <div>
              <h3>From the kitchen</h3>
              <MenuList items={kitchen} />
            </div>
          </div>
          <p className="menu-small">Oat, soy, and coconut milk available · ask about today’s gluten-free bake</p>
        </div>
        <div className="food-strip" aria-label="A few Cafe 98 favorites">
          <figure><img src="/images/croissants.jpg" alt="Chocolate pistachio croissants" /><figcaption>Morning bakes</figcaption></figure>
          <figure><img src="/images/matcha-latte.jpg" alt="Matcha latte with leaf art" /><figcaption>Matcha</figcaption></figure>
          <figure><img src="/images/sandwich.jpg" alt="Roast beef sandwich" /><figcaption>Trail-ready</figcaption></figure>
          <figure><img src="/images/berry-pastry.jpg" alt="Berry topped chocolate pastries" /><figcaption>Something sweet</figcaption></figure>
        </div>
      </section>

      <section className="contact photo-section" id="contact">
        <div className="contact-shade" />
        <div className="contact-card glass-panel">
          <p className="eyebrow">Come say hello</p>
          <h2>See you at<br />Cafe 98.</h2>
          <div className="location-line">
            <FiMapPin aria-hidden="true" />
            <span>308 N Silver St, Lake City, CO 81235</span>
          </div>
          <div className="social-row" aria-label="Contact Cafe 98">
            <a className="icon-button" href="tel:+19704979981" aria-label="Call Cafe 98">
              <FiPhone aria-hidden="true" /><span>(970) 497-9981</span>
            </a>
            <a className="icon-button icon-only" href="https://www.instagram.com/explore/search/keyword/?q=cafe%2098%20lake%20city" target="_blank" rel="noreferrer" aria-label="Find Cafe 98 on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a className="icon-button icon-only" href="https://www.facebook.com/search/top?q=cafe%2098%20lake%20city%20colorado" target="_blank" rel="noreferrer" aria-label="Find Cafe 98 on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="footer-mark">© 2026 Cafe 98</p>
      </section>
    </main>
  );
}
