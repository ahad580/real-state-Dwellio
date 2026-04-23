"use client";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Menu,
  User,
  MapPin,
  Building2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const rotatingWords = [
  "Luxury Apartments",
  "Modern Villas",
  "Prime Commercial",
  "Rental Homes",
  "Investment Properties",
];

const sliderSections = [
  {
    id: "popular1",
    title: "Popular homes in Texas",
    subtitle: "",
    items: [
      {
        title: "Apartment in Austin",
        meta: "$124 for 2 nights",
        rating: "4.92",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Loft in Dallas",
        meta: "$138 for 2 nights",
        rating: "4.88",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Condo in Houston",
        meta: "$116 for 2 nights",
        rating: "4.95",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "popular2",
    title: "Popular homes in Texas",
    subtitle: "",
    items: [
      {
        title: "Apartment in Austin",
        meta: "$124 for 2 nights",
        rating: "4.92",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Loft in Dallas",
        meta: "$138 for 2 nights",
        rating: "4.88",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Condo in Houston",
        meta: "$116 for 2 nights",
        rating: "4.95",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "popular3",
    title: "Available next month in Texas",
    subtitle: "Handpicked stays and premium homes across top Texas areas",
    items: [
      {
        title: "Apartment in Austin",
        meta: "$124 for 2 nights",
        rating: "4.92",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Loft in Dallas",
        meta: "$138 for 2 nights",
        rating: "4.88",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Condo in Houston",
        meta: "$116 for 2 nights",
        rating: "4.95",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        meta: "$109 for 2 nights",
        rating: "4.90",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Townhome in Fort Worth",
        meta: "$142 for 2 nights",
        rating: "4.87",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Home in Plano",
        meta: "$131 for 2 nights",
        rating: "4.91",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

const inspirationData = {
  Popular: [
    { title: "Austin", subtitle: "Luxury rentals" },
    { title: "Dallas", subtitle: "Apartment rentals" },
    { title: "Houston", subtitle: "Condo rentals" },
    { title: "San Antonio", subtitle: "Vacation rentals" },
    { title: "Fort Worth", subtitle: "Villa rentals" },
    { title: "Plano", subtitle: "Monthly rentals" },
    { title: "Arlington", subtitle: "House rentals" },
    { title: "El Paso", subtitle: "Vacation rentals" },
    { title: "Galveston", subtitle: "Beach rentals" },
    { title: "Corpus Christi", subtitle: "Cabin rentals" },
    { title: "Lubbock", subtitle: "Apartment rentals" },
    { title: "Show more", subtitle: "⌄" },
  ],
  "Arts & culture": [
    { title: "Santa Fe", subtitle: "Art district stays" },
    { title: "New Orleans", subtitle: "Historic rentals" },
    { title: "Chicago", subtitle: "Museum district homes" },
    { title: "Boston", subtitle: "Culture rich apartments" },
    { title: "Philadelphia", subtitle: "Old city rentals" },
    { title: "Savannah", subtitle: "Heritage stays" },
    { title: "Nashville", subtitle: "Music inspired stays" },
    { title: "Portland", subtitle: "Creative neighborhoods" },
    { title: "Austin", subtitle: "Live music rentals" },
    { title: "Charleston", subtitle: "Historic villas" },
    { title: "Seattle", subtitle: "Gallery district homes" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Beach: [
    { title: "Miami", subtitle: "Oceanfront rentals" },
    { title: "Malibu", subtitle: "Beach houses" },
    { title: "San Diego", subtitle: "Coastal apartments" },
    { title: "Santa Monica", subtitle: "Sea view stays" },
    { title: "Galveston", subtitle: "Beach rentals" },
    { title: "Corpus Christi", subtitle: "Cabin rentals" },
    { title: "Destin", subtitle: "Family beach homes" },
    { title: "Myrtle Beach", subtitle: "Vacation condos" },
    { title: "Clearwater", subtitle: "Waterfront stays" },
    { title: "Naples", subtitle: "Luxury villas" },
    { title: "Honolulu", subtitle: "Island rentals" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Mountains: [
    { title: "Aspen", subtitle: "Ski retreats" },
    { title: "Denver", subtitle: "Mountain homes" },
    { title: "Boulder", subtitle: "Nature stays" },
    { title: "Lake Tahoe", subtitle: "Cabin rentals" },
    { title: "Jackson Hole", subtitle: "Luxury lodges" },
    { title: "Park City", subtitle: "Mountain villas" },
    { title: "Big Bear", subtitle: "Family cabins" },
    { title: "Vail", subtitle: "Premium chalets" },
    { title: "Estes Park", subtitle: "Scenic rentals" },
    { title: "Flagstaff", subtitle: "Cabin homes" },
    { title: "Breckenridge", subtitle: "Vacation stays" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Outdoors: [
    { title: "Yosemite", subtitle: "Nature stays" },
    { title: "Sedona", subtitle: "Desert rentals" },
    { title: "Moab", subtitle: "Adventure homes" },
    { title: "Bend", subtitle: "Outdoor retreats" },
    { title: "Jackson", subtitle: "Nature villas" },
    { title: "Lake Powell", subtitle: "Waterfront escapes" },
    { title: "Boise", subtitle: "Trailside rentals" },
    { title: "Telluride", subtitle: "Scenic cabins" },
    { title: "Mammoth", subtitle: "Outdoor lodges" },
    { title: "Crested Butte", subtitle: "Family retreats" },
    { title: "Tahoe", subtitle: "Lake & trail homes" },
    { title: "Show more", subtitle: "⌄" },
  ],
  "Things to do": [
    { title: "Orlando", subtitle: "Theme park stays" },
    { title: "Las Vegas", subtitle: "Entertainment rentals" },
    { title: "Los Angeles", subtitle: "City experience homes" },
    { title: "Austin", subtitle: "Nightlife rentals" },
    { title: "Chicago", subtitle: "Downtown stays" },
    { title: "Atlanta", subtitle: "Event apartments" },
    { title: "New York", subtitle: "City break homes" },
    { title: "Dallas", subtitle: "Shopping district rentals" },
    { title: "Houston", subtitle: "Food & fun stays" },
    { title: "Phoenix", subtitle: "Resort homes" },
    { title: "San Diego", subtitle: "Activity stays" },
    { title: "Show more", subtitle: "⌄" },
  ],
  "Travel tips & inspiration": [
    { title: "Weekend escapes", subtitle: "Short stay ideas" },
    { title: "Family trips", subtitle: "Kid friendly stays" },
    { title: "Luxury travel", subtitle: "Premium booking ideas" },
    { title: "Remote work", subtitle: "Workation homes" },
    { title: "Road trips", subtitle: "Stay stop inspiration" },
    { title: "City breaks", subtitle: "Urban getaway ideas" },
    { title: "Nature stays", subtitle: "Outdoor inspiration" },
    { title: "Romantic trips", subtitle: "Couple stay ideas" },
    { title: "Budget trips", subtitle: "Value booking ideas" },
    { title: "Long stays", subtitle: "Monthly rental ideas" },
    { title: "Seasonal travel", subtitle: "Best time to go" },
    { title: "Show more", subtitle: "⌄" },
  ],
  "Luxury apartments": [
    { title: "New York", subtitle: "Skyline apartments" },
    { title: "Miami", subtitle: "Waterfront apartments" },
    { title: "Los Angeles", subtitle: "Luxury rentals" },
    { title: "Chicago", subtitle: "Downtown penthouses" },
    { title: "Dallas", subtitle: "Premium apartments" },
    { title: "Houston", subtitle: "Modern condo rentals" },
    { title: "Austin", subtitle: "High end apartments" },
    { title: "Seattle", subtitle: "Luxury towers" },
    { title: "Boston", subtitle: "Executive stays" },
    { title: "San Francisco", subtitle: "City apartments" },
    { title: "Atlanta", subtitle: "Luxury high rises" },
    { title: "Show more", subtitle: "⌄" },
  ],
};

const inspirationTabs = Object.keys(inspirationData);

const Page = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeInspirationTab, setActiveInspirationTab] = useState("Popular");

  const popularRef1 = useRef(null);
  const popularRef2 = useRef(null);
  const popularRef3 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollSlider = (sliderRef, direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".dw-home-card");
    if (!card) return;

    const styles = window.getComputedStyle(sliderRef.current);
    const gap = parseInt(styles.gap || "18", 10);
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const sliderRefs = {
    popular1: popularRef1,
    popular2: popularRef2,
    popular3: popularRef3,
  };

  return (
    <>
      <main>
        <section className="dw-hero">
          <div className="dw-hero-inner">
            <div className="dw-hero-left">
              <h1 className="dw-hero-title">
                Find your next
                <br />
                <span className="dw-hero-loop">{rotatingWords[currentWord]}</span>
              </h1>

              <p className="dw-hero-text">
                Discover handpicked properties designed for modern living.
                Explore homes, rentals, and investment opportunities with a
                cleaner and smarter experience.
              </p>

              <div className="dw-hero-actions">
                <Link href="/buy" className="dw-primary-btn">
                  Explore Properties
                  <ArrowRight size={18} />
                </Link>

                <Link href="/list-property" className="dw-secondary-btn">
                  List Your Property
                </Link>
              </div>

              <div className="dw-hero-stats">
                <div className="dw-stat-card">
                  <h3>12K+</h3>
                  <p>Verified Listings</p>
                </div>

                <div className="dw-stat-card">
                  <h3>8.5K+</h3>
                  <p>Happy Buyers</p>
                </div>

                <div className="dw-stat-card">
                  <h3>320+</h3>
                  <p>Trusted Agents</p>
                </div>
              </div>
            </div>

            <div className="dw-hero-right">
              <div className="dw-hero-visual">
                <div className="dw-hero-image-card large-card">
                  <img src="/real-estate.webp" alt="Luxury property" />
                </div>

                <div className="dw-floating-card top-card">
                  <span>Featured Property</span>
                  <h4>Modern Family Villa</h4>
                  <p>Texas, US</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {sliderSections.map((section) => (
          <section className="dw-popular" key={section.id}>
            <div className="dw-popular-head">
              <div className={section.subtitle ? "dw-popular-head-left" : "dw-popular-title-wrap"}>
                {section.subtitle ? (
                  <>
                    <div className="dw-popular-title-wrap">
                      <h2 className="dw-popular-title">{section.title}</h2>
                      <button className="dw-title-arrow" aria-label="Explore more">
                        →
                      </button>
                    </div>
                    <p className="dw-popular-subtitle">{section.subtitle}</p>
                  </>
                ) : (
                  <>
                    <h2 className="dw-popular-title">{section.title}</h2>
                    <button className="dw-title-arrow" aria-label="Explore more">
                      →
                    </button>
                  </>
                )}
              </div>

              <div className="dw-popular-nav">
                <button
                  className="dw-popular-nav-btn"
                  aria-label="Previous"
                  onClick={() => scrollSlider(sliderRefs[section.id], "prev")}
                >
                  ‹
                </button>
                <button
                  className="dw-popular-nav-btn"
                  aria-label="Next"
                  onClick={() => scrollSlider(sliderRefs[section.id], "next")}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="dw-popular-grid slider" ref={sliderRefs[section.id]}>
              {section.items.map((item, index) => (
                <Link
                  href={`/property/${item.title.toLowerCase().replaceAll(" ", "-")}`}
                  key={`${section.id}-${index}`}
                  className="dw-home-card-link"
                >
                  <article className="dw-home-card">
                    <div className="dw-home-image-wrap">
                      <img src={item.image} alt={item.title} />
                      <span className="dw-home-badge">Guest favorite</span>
                      <button className="dw-home-like" aria-label="Save home">
                        ♡
                      </button>
                    </div>

                    <div className="dw-home-content">
                      <h3>{item.title}</h3>
                      <p>
                        {item.meta} <span>•</span> ★ {item.rating}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="dw-recommend">
          <div className="dw-recommend-inner">
            <div className="dw-recommend-left">
              <h2>Get home recommendations</h2>
              <p>Sign in for a more personalized experience.</p>
              <Link href="/account?mode=signup" className="dw-recommend-btn">
                Sign in
              </Link>
            </div>

            <div className="dw-recommend-right">
              <div className="dw-rec-stack">
                <div className="dw-rec-badge badge-one">
                  <div className="dw-rec-badge-icon">🏠</div>
                  <div>
                    <h4>Recommended homes</h4>
                    <p>based on your monthly budget</p>
                  </div>
                </div>

                <div className="dw-rec-badge badge-two">
                  <div className="dw-rec-badge-icon">📍</div>
                  <div>
                    <h4>Recommended homes</h4>
                    <p>based on your preferred location</p>
                  </div>
                </div>

                <div className="dw-rec-card back-card-two"></div>
                <div className="dw-rec-card back-card-one"></div>

                <div className="dw-rec-card main-card">
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
                    alt="Recommended house"
                  />

                  <div className="dw-rec-card-content">
                    <h3>$695,000</h3>

                    <div className="dw-rec-meta">
                      <span>4 bd</span>
                      <span>3 ba</span>
                      <span>3,102 sqft</span>
                      <span>House for Sale</span>
                    </div>

                    <div className="dw-rec-line"></div>
                    <div className="dw-rec-line short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dw-agents">
          <div className="dw-agents-inner">
            <div className="dw-agents-left">
              <p className="dw-agents-tag">Dwellio™ Selling</p>

              <h2>
                Looking to sell?
                <br />
                Find a trusted expert.
              </h2>

              <p className="dw-agents-text">
                We matched you with top real estate experts in your area.
              </p>

              <p className="dw-agents-subtext">
                Enter your address to review and compare agents.
              </p>

              <Link href="/compare-agents" className="dw-agents-btn">
                Compare agents
                <span>→</span>
              </Link>
            </div>

            <div className="dw-agents-right">
              <div className="dw-agent-card">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
                  alt="Agent 1"
                />
                <h3>Gregg Kiar</h3>
                <p className="dw-agent-company">Dwellio Premier Realty</p>
                <p className="dw-agent-license">License # 472276</p>

                <div className="dw-agent-stats">
                  <div>
                    <strong>27 years</strong>
                    <span>Experience</span>
                  </div>
                  <div>
                    <strong>78 sales</strong>
                    <span>In past year</span>
                  </div>
                </div>
              </div>

              <div className="dw-agent-card">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
                  alt="Agent 2"
                />
                <h3>Bryan Swan</h3>
                <p className="dw-agent-company">Dwellio Luxury Advisors</p>
                <p className="dw-agent-license">License # 0666344</p>

                <div className="dw-agent-stats">
                  <div>
                    <strong>11 years</strong>
                    <span>Experience</span>
                  </div>
                  <div>
                    <strong>23 sales</strong>
                    <span>In past year</span>
                  </div>
                </div>
              </div>

              <div className="dw-agent-more">
                <div className="dw-agent-more-circle">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                    alt="More agents"
                  />
                </div>
                <h3>+4</h3>
                <p>more agents</p>

                <div className="dw-agent-stats blur-stats">
                  <div>
                    <strong>14 years</strong>
                    <span>Experience</span>
                  </div>
                  <div>
                    <strong>32 sales</strong>
                    <span>In past year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dw-inspiration">
          <div className="dw-inspiration-inner">
            <h2 className="dw-inspiration-title">Inspiration for future getaways</h2>

            <div className="dw-inspiration-tabs">
              {inspirationTabs.map((tab) => (
                <button
                  key={tab}
                  className={activeInspirationTab === tab ? "active" : ""}
                  onClick={() => setActiveInspirationTab(tab)}
                  onMouseEnter={() => setActiveInspirationTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="dw-inspiration-grid">
              {inspirationData[activeInspirationTab].map((item, index) => (
                <div className="dw-inspiration-item" key={`${activeInspirationTab}-${index}`}>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="dw-footer">
          <div className="dw-footer-inner">
            <div className="dw-footer-top">
              <div className="dw-footer-col">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Get help with a safety issue</a>
                <a href="#">AirCover</a>
                <a href="#">Travel insurance</a>
                <a href="#">Anti-discrimination</a>
                <a href="#">Disability support</a>
                <a href="#">Cancellation options</a>
              </div>

              <div className="dw-footer-col">
                <h4>Hosting</h4>
                <a href="#">List your property</a>
                <a href="#">Host with Dwellio</a>
                <a href="#">Property management</a>
                <a href="#">Hosting resources</a>
                <a href="#">Community forum</a>
                <a href="#">Host responsibly</a>
                <a href="#">Find a co-host</a>
              </div>

              <div className="dw-footer-col">
                <h4>Dwellio</h4>
                <a href="#">About us</a>
                <a href="#">Newsroom</a>
                <a href="#">Careers</a>
                <a href="#">Investors</a>
                <a href="#">Gift cards</a>
                <a href="#">Emergency stays</a>
                <a href="#">Contact us</a>
              </div>
            </div>

            <div className="dw-footer-bottom">
              <div className="dw-footer-bottom-left">
                <span>© 2026 Dwellio.</span>
                <span>·</span>
                <a href="#">Privacy</a>
                <span>·</span>
                <a href="#">Terms</a>
                <span>·</span>
                <a href="#">Your Privacy Choices</a>
              </div>

              <div className="dw-footer-bottom-right">
                <a href="#">English (US)</a>
                <a href="#">$ USD</a>
                <a href="#">Facebook</a>
                <a href="#">X</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Page;