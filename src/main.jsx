import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Clock3,
  Flame,
  Globe2,
  Mail,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  X,
  Utensils,
  Navigation,
  Sparkles,
  Star,
  Image as ImageIcon,
} from "lucide-react";
import "./styles.css";

const A = "/images/";

const hours = [
  ["Saturday", "11:30 AM – 10:00 PM"],
  ["Sunday", "11:30 AM – 10:00 PM"],
  ["Monday", "11:30 AM – 10:00 PM"],
  ["Tuesday", "11:30 AM – 10:00 PM"],
  ["Wednesday", "11:30 AM – 10:00 PM"],
  ["Thursday", "11:30 AM – 10:00 PM"],
  ["Friday", "11:30 AM – 10:00 PM"],
];

const menu = [
  { title: "Breakfast", items: [["Breakfast", "£6.00"]] },
  {
    title: "Soup",
    items: [
      ["Chickpea Soup", "£4.00"],
      ["Rice & Soup", "£5.00"],
    ],
  },
  {
    title: "Family Meal Deal",
    note: "Includes 4 × rice, 1 × mix grill, 4 × soup, 4 × drinks and 2 × portions of salad.",
    items: [["Family Meal Deal", "£45.00"]],
  },
  {
    title: "Main Dishes",
    items: [
      ["Mix Qozi", "£13.00"],
      ["Lamb Small Pieces", "£11.00"],
      ["Lamb Qozi", "£11.00"],
      ["Chicken Qozi", "£10.00"],
      ["Qorma Sabzi", "£10.00"],
      ["Chicken Small Pieces", "£10.00"],
      ["Kofta", "£10.00"],
      ["Kobeh", "£10.00"],
      ["Shafta", "£10.00"],
      ["Dolma", "£11.00"],
      ["Lamb Head", "£15.00"],
    ],
  },
  {
    title: "Charcoal Grill",
    note: "All served with salad and choice of sauce.",
    items: [
      ["Kofta Kebab · 1 × skewer", "£5.00"],
      ["Chicken Kebab · 1 × skewer", "£5.00"],
      ["Chicken Wings · 1 × skewer", "£5.00"],
      ["Lamb Liver · 1 × skewer", "£5.00"],
      ["Lamb Kidney · 1 × skewer", "£5.00"],
      ["Lamb Heart · 1 × skewer", "£5.00"],
      ["Mix Grill · 5 shish", "£20.00"],
    ],
  },
  {
    title: "Wraps",
    note: "All served with salad and choice of sauce.",
    items: [
      ["Mix Wrap", "£5.00"],
      ["Chicken Wrap", "£5.00"],
      ["Mince Wrap", "£5.00"],
      ["Chicken Liver Wrap", "£5.00"],
      ["Falafel Wrap", "£5.00"],
      ["Potato Wrap", "£5.00"],
      ["Aubergine Wrap", "£5.00"],
      ["Chicken Kebab with Rice", "£9.00"],
      ["Kofta Kebab with Rice", "£10.00"],
    ],
  },
  {
    title: "Fish",
    note: "All served with salad.",
    items: [
      ["Full Seabass Fish", "£13.00"],
      ["Full Seabass Fish with Rice", "£15.00"],
    ],
  },
  {
    title: "Rice Dishes",
    items: [
      ["Lamb Biryani", "£12.00"],
      ["Chicken Biryani", "£11.00"],
      ["Biryani", "£9.00"],
    ],
  },
  {
    title: "Drinks",
    items: [
      ["Water", "£1.00"],
      ["Cola", "£1.00"],
      ["Pepsi", "£1.00"],
      ["Yoghurt Drink", "£1.00"],
      ["Tea", "£1.00"],
      ["Hot Milk", "£1.00"],
    ],
  },
];

const gallery = [
  [
    "food-platter.webp",
    "Charcoal mixed platter with grilled meats, tomatoes, onions and fresh herbs",
  ],
  ["mixed-platter.webp", "Mixed grilled dishes served with flatbread"],
  ["kofta.webp", "Freshly grilled kofta served with salad"],
  ["chicken-skewers.webp", "Charcoal-grilled chicken skewers"],
  ["grill-platter.webp", "Assorted charcoal-grilled meats"],
  ["kofta-platter.webp", "Kofta platter with grilled vegetables"],
  ["large-platter.webp", "Large mixed grill platter"],
  ["mixed-grill-board.webp", "Mixed grill selection"],
  ["table-meal.webp", "Rice, bread, sauces and traditional meat dishes"],
  ["grilled-chicken.webp", "Charcoal-grilled chicken"],
  ["rice-counter.webp", "Rice prepared for service"],
  ["storefront.webp", "Sarchnar Restaurant exterior in Newcastle upon Tyne"],
];

function useOpenStatus() {
  const [state, setState] = useState({ open: false, day: "" });
  useEffect(() => {
    const check = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/London" }),
      );
      const day = now.toLocaleDateString("en-GB", { weekday: "long" });
      const mins = now.getHours() * 60 + now.getMinutes();
      setState({ open: mins >= 690 && mins < 1320, day });
    };
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, []);
  return state;
}

function App() {
  const [mobile, setMobile] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const status = useOpenStatus();
  const todayHours = useMemo(
    () => hours.find(([d]) => d === status.day)?.[1] || "11:30 AM – 10:00 PM",
    [status.day],
  );

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const closeMobile = () => setMobile(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMobile();
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="status-dot" />{" "}
        {status.open ? "Open now" : "Closed now"}{" "}
        <span className="announcement-sep">·</span> Daily 11:30 AM – 10:00 PM{" "}
        <span className="announcement-right">
          Newcastle upon Tyne · NE4 6NX
        </span>
      </div>

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Sarchnar Restaurant home"
          >
            <span className="brand-mark">
              <Flame size={18} />
            </span>
            <span>
              <strong>SARCHNAR</strong>
              <small>RESTAURANT · سەرچنار</small>
            </span>
          </button>
          <div className={`nav-links ${mobile ? "mobile-open" : ""}`}>
            {[
              "home",
              "about",
              "menu",
              "gallery",
              "hours",
              "location",
              "contact",
            ].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
            <a className="nav-cta" href="#menu" onClick={closeMobile}>
              View Menu <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            className="mobile-toggle"
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? "Close menu" : "Open menu"}
          >
            {mobile ? <X /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-image" aria-hidden="true">
            <img src={A + "food-platter.webp"} alt="" fetchPriority="high" />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="eyebrow">
              <span /> AUTHENTIC FOOD · NEWCASTLE UPON TYNE
            </div>
            <h1>
              Sarchnar
              <br />
              <em>Restaurant</em>
            </h1>
            <p className="kurdish">ڕیستۆرانتی سەرچنار</p>
            <p className="hero-copy">
              A warm table for charcoal-grilled favourites, traditional dishes,
              generous platters and everyday dining in the heart of Newcastle.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("menu")}
              >
                Explore the Menu <ChevronRight size={18} />
              </button>
              <a className="btn btn-glass" href="tel:+447877340606">
                Call +44 7877 340606 <Phone size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Clock3 size={16} /> {status.open ? "Open now" : "Closed now"}
              </span>
              <span>
                <MapPin size={16} /> NE4 6NX
              </span>
              <span>
                <Utensils size={16} /> £10–£20 typical
              </span>
            </div>
          </div>
          <button
            className="scroll-cue"
            onClick={() => scrollTo("about")}
            aria-label="Scroll to about"
          >
            <span /> Discover
          </button>
        </section>

        <section className="intro-band">
          <div className="container intro-grid">
            <div>
              <span className="section-kicker">01 · THE TABLE</span>
              <h2>
                Food made to be <em>shared.</em>
              </h2>
            </div>
            <p>
              Sarchnar Restaurant brings together a broad selection of grilled
              meats, traditional dishes, rice plates, wraps and simple drinks.
              The menu and photography on this site are presented from the
              restaurant information supplied for this project.
            </p>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <span className="section-kicker">02 · ABOUT SARCHNAR</span>
              <h2>
                A relaxed place for <em>good food.</em>
              </h2>
              <p>
                Located in Newcastle upon Tyne, Sarchnar Restaurant offers an
                approachable dining experience built around hearty plates and
                charcoal-grilled food. From individual dishes to large mixed
                platters, the menu is designed for both everyday meals and
                sharing.
              </p>
              <div className="feature-list">
                <div>
                  <span>01</span>
                  <b>Charcoal grill</b>
                  <small>Grilled favourites prepared for the table.</small>
                </div>
                <div>
                  <span>02</span>
                  <b>Traditional plates</b>
                  <small>Rice dishes and familiar home-style choices.</small>
                </div>
                <div>
                  <span>03</span>
                  <b>Easy to reach</b>
                  <small>Serving Newcastle upon Tyne from NE4 6NX.</small>
                </div>
              </div>
              <button
                className="text-link"
                onClick={() => scrollTo("location")}
              >
                Find the restaurant <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="about-visual">
              <img
                src={A + "storefront.webp"}
                alt="Sarchnar Restaurant storefront in Newcastle upon Tyne"
                loading="lazy"
              />
              <div className="photo-tag">
                <span>NEWCASTLE</span>
                <strong>NE4 6NX</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section menu-section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">03 · THE MENU</span>
                <h2>
                  From the grill, <em>to your table.</em>
                </h2>
              </div>
              <p>
                Prices shown are transcribed from the supplied restaurant menu
                photographs and may change.
              </p>
            </div>
            <div className="menu-toolbar">
              <button
                className={`filter ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Browse menu <ChevronDown size={17} />
              </button>
              <span>
                Typical price range: <b>£10–£20 per person</b>
              </span>
            </div>
            <div className={`menu-grid ${menuOpen ? "expanded" : ""}`}>
              {menu.map((cat, i) => (
                <article className="menu-card" key={cat.title}>
                  <div className="menu-card-top">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h3>{cat.title}</h3>
                  </div>
                  {cat.note && <p className="menu-note">{cat.note}</p>}
                  <div className="menu-items">
                    {cat.items.map(([name, price]) => (
                      <div className="menu-item" key={name}>
                        <span>{name}</span>
                        <i />
                        <b>{price}</b>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="menu-image-note">
              <img
                src={A + "menu-full.webp"}
                alt="Original Sarchnar Restaurant menu photograph"
                loading="lazy"
              />
              <div>
                <span className="section-kicker">ORIGINAL MENU</span>
                <p>
                  The menu layout shown here is based on the restaurant menu
                  images supplied with this project.
                </p>
                <button
                  className="text-link"
                  onClick={() =>
                    setLightbox({
                      src: A + "menu-full.webp",
                      alt: "Original Sarchnar Restaurant menu",
                    })
                  }
                >
                  View menu image <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-head light">
              <div>
                <span className="section-kicker">04 · GALLERY</span>
                <h2>
                  A closer look at <em>the food.</em>
                </h2>
              </div>
              <p>
                Real restaurant photography supplied for Sarchnar Restaurant.
              </p>
            </div>
            <div className="gallery-grid">
              {gallery.map(([src, alt], i) => (
                <button
                  className={`gallery-item g${i + 1}`}
                  key={src}
                  onClick={() => setLightbox({ src: A + src, alt })}
                  aria-label={`Open image: ${alt}`}
                >
                  <img
                    src={A + src}
                    alt={alt}
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                  <span>
                    <ImageIcon size={16} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="section hours-section">
          <div className="container hours-grid">
            <div>
              <span className="section-kicker">05 · OPENING HOURS</span>
              <h2>
                Come by when <em>you're ready.</em>
              </h2>
              <p className="muted">Open daily from 11:30 AM until 10:00 PM.</p>
              <div className="live-status">
                <span className="status-dot" />{" "}
                {status.open
                  ? `Open now · closes at 10:00 PM`
                  : `Closed now · today ${todayHours}`}
              </div>
            </div>
            <div className="hours-card">
              {hours.map(([day, time]) => (
                <div className={day === status.day ? "today" : ""} key={day}>
                  <span>{day}</span>
                  <b>{time}</b>
                  {day === status.day && <i>Today</i>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="location-section">
          <div className="location-map">
            <div className="map-art">
              <div className="map-grid" />
              <div className="pin">
                <span>
                  <MapPin size={25} />
                </span>
                <b>Sarchnar Restaurant</b>
              </div>
              <div className="map-label label1">NE4</div>
              <div className="map-label label2">Newcastle</div>
              <div className="map-road r1" />
              <div className="map-road r2" />
              <div className="map-road r3" />
            </div>
          </div>
          <div className="location-card">
            <span className="section-kicker">06 · FIND US</span>
            <h2>
              In <em>Newcastle.</em>
            </h2>
            <p>
              Sarchnar Restaurant
              <br />
              Newcastle upon Tyne
              <br />
              NE4 6NX
              <br />
              United Kingdom
            </p>
            <div className="plus-code">
              <span>PLUS CODE</span>
              <b>X9F7+75 Newcastle upon Tyne, UK</b>
            </div>
            <div className="location-actions">
              <a
                className="btn btn-dark"
                href="https://www.google.com/maps/search/?api=1&query=X9F7%2B75%20Newcastle%20upon%20Tyne%2C%20UK"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions <Navigation size={17} />
              </a>
              <a className="btn btn-outline" href="tel:+447877340606">
                Call us <Phone size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <span className="section-kicker">07 · CONTACT</span>
              <h2>
                Let's keep it <em>simple.</em>
              </h2>
              <p className="muted">
                Questions, directions or just want to speak with the restaurant?
                Use whichever option suits you.
              </p>
              <div className="contact-links">
                <a href="tel:+447877340606">
                  <span>
                    <Phone />
                  </span>
                  <div>
                    <small>CALL US</small>
                    <b>+44 7877 340606</b>
                  </div>
                  <ArrowUpRight />
                </a>
                <a href="mailto:rawshtuk@outlook.com">
                  <span>
                    <Mail />
                  </span>
                  <div>
                    <small>EMAIL US</small>
                    <b>rawshtuk@outlook.com</b>
                  </div>
                  <ArrowUpRight />
                </a>
                <a
                  href="https://web.facebook.com/messages/t/100090880260751/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <MessageCircle />
                  </span>
                  <div>
                    <small>MESSENGER</small>
                    <b>Message Sarchnar Restaurant</b>
                  </div>
                  <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="contact-card">
              <Sparkles size={24} />
              <span>GOOD TO KNOW</span>
              <h3>Typical price range</h3>
              <strong>£10–£20</strong>
              <p>
                Per person. This is a reported typical range, not an official
                fixed menu price.
              </p>
              <button className="text-link" onClick={() => scrollTo("menu")}>
                See the menu <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <button className="brand" onClick={() => scrollTo("home")}>
              <span className="brand-mark">
                <Flame size={18} />
              </span>
              <span>
                <strong>SARCHNAR</strong>
                <small>RESTAURANT · سەرچنار</small>
              </span>
            </button>
            <p>
              Traditional food, charcoal grill and generous plates in Newcastle
              upon Tyne.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("menu")}>Menu</button>
            <button onClick={() => scrollTo("gallery")}>Gallery</button>
          </div>
          <div>
            <h4>Visit</h4>
            <button onClick={() => scrollTo("hours")}>Opening Hours</button>
            <button onClick={() => scrollTo("location")}>Location</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+447877340606">+44 7877 340606</a>
            <a href="mailto:rawshtuk@outlook.com">rawshtuk@outlook.com</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=X9F7%2B75%20Newcastle%20upon%20Tyne%2C%20UK"
              target="_blank"
              rel="noreferrer"
            >
              Newcastle upon Tyne · NE4 6NX
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Sarchnar Restaurant</span>
          <span>Accessibility · Privacy · Terms</span>
          <span>Newcastle upon Tyne, UK</span>
        </div>
      </footer>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
