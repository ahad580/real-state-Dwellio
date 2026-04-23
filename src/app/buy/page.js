"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Heart,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building2,
} from "lucide-react";

const featuredHomes = [
  {
    id: 1,
    title: "Luxury Villa in Austin",
    location: "Austin, Texas",
    price: "$695,000",
    beds: 4,
    baths: 3,
    area: "3,120 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Modern Family Home",
    location: "Dallas, Texas",
    price: "$540,000",
    beds: 3,
    baths: 2,
    area: "2,450 sqft",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Elegant Condo",
    location: "Houston, Texas",
    price: "$420,000",
    beds: 2,
    baths: 2,
    area: "1,680 sqft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Townhome in Plano",
    location: "Plano, Texas",
    price: "$485,000",
    beds: 3,
    baths: 3,
    area: "2,050 sqft",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Garden Side Villa",
    location: "Fort Worth, Texas",
    price: "$890,000",
    beds: 5,
    baths: 4,
    area: "4,220 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Bright Duplex Home",
    location: "Plano, Texas",
    price: "$570,000",
    beds: 4,
    baths: 3,
    area: "2,760 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  },
];

const neighborhoods = [
  { name: "Austin", desc: "Premium family homes" },
  { name: "Dallas", desc: "Modern city living" },
  { name: "Houston", desc: "Elegant suburban homes" },
  { name: "San Antonio", desc: "Affordable luxury picks" },
  { name: "Fort Worth", desc: "Spacious houses for families" },
  { name: "Plano", desc: "High-value residential zones" },
];

const topPicks = [
  {
    id: 1,
    title: "Contemporary House",
    price: "$775,000",
    location: "Austin, TX",
    beds: 5,
    baths: 4,
    area: "3,950 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Urban Family Residence",
    price: "$610,000",
    location: "Dallas, TX",
    beds: 4,
    baths: 3,
    area: "2,860 sqft",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Stylish Condo",
    price: "$455,000",
    location: "Houston, TX",
    beds: 2,
    baths: 2,
    area: "1,540 sqft",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Minimal Townhome",
    price: "$520,000",
    location: "San Antonio, TX",
    beds: 3,
    baths: 3,
    area: "2,110 sqft",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Garden Side Villa",
    price: "$890,000",
    location: "Fort Worth, TX",
    beds: 5,
    baths: 4,
    area: "4,220 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Bright Duplex Home",
    price: "$570,000",
    location: "Plano, TX",
    beds: 4,
    baths: 3,
    area: "2,760 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function DwellioBuyPage() {
  const featuredSliderRef = useRef(null);
  const [activeFooterTab, setActiveFooterTab] = useState("popular");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isContactModalOpen]);

  const footerTabs = useMemo(
    () => [
      {
        key: "popular",
        label: "Popular",
        items: [
          "Austin homes",
          "Dallas family houses",
          "Houston condos",
          "San Antonio villas",
          "Fort Worth townhomes",
          "Plano residences",
        ],
      },
      {
        key: "luxury",
        label: "Luxury Homes",
        items: [
          "Luxury villas in Austin",
          "Premium estates in Dallas",
          "Pool homes in Houston",
          "Large family houses in Plano",
          "Modern mansions in Fort Worth",
          "Exclusive gated homes",
        ],
      },
      {
        key: "budget",
        label: "Budget Friendly",
        items: [
          "Affordable Austin homes",
          "Starter homes in Dallas",
          "Budget condos in Houston",
          "Compact homes in Plano",
          "Low maintenance townhomes",
          "First time buyer options",
        ],
      },
      {
        key: "investment",
        label: "Investment",
        items: [
          "High ROI homes in Texas",
          "Rental ready properties",
          "Vacation home opportunities",
          "Multi family investment homes",
          "Fast growing neighborhoods",
          "Investor friendly communities",
        ],
      },
    ],
    []
  );

  const activeFooterItems =
    footerTabs.find((tab) => tab.key === activeFooterTab)?.items || [];

  const scrollFeatured = (direction) => {
    if (!featuredSliderRef.current) return;

    const firstCard = featuredSliderRef.current.querySelector(".db-property-card");
    if (!firstCard) return;

    const styles = window.getComputedStyle(featuredSliderRef.current);
    const gap = parseInt(styles.columnGap || styles.gap || "20", 10);
    const scrollAmount = firstCard.offsetWidth + gap;

    featuredSliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent.");
    setIsContactModalOpen(false);
  };

  return (
    <div className="db-page">
      <div className={isContactModalOpen ? "cm-blur-shell" : ""}>
        <main className="db-main">
          <section className="buyhero-wrap">
            <div className="buyhero-grid">
              <div className="buyhero-left">
                <div className="buyhero-copy">
                  <div className="buyhero-pill-row">
                    <span className="buyhero-pill">Texas Market</span>
                    <span className="buyhero-pill">Verified Listings</span>
                    <span className="buyhero-pill">Trusted Experts</span>
                  </div>

                  <h1 className="buyhero-title">
                    Buy better,
                    <br />
                    live smarter
                  </h1>

                  <p className="buyhero-text">
                    Discover elevated homes across Texas with a buying experience that
                    feels cleaner, calmer, and more intentional from first search to
                    final decision.
                  </p>

                  <div className="buyhero-actions">
                    {/* <button className="buyhero-primary-btn" type="button">
                      Explore Properties <ArrowRight size={16} />
                    </button> */}

                    <button
                      type="button"
                      className="buyhero-secondary-btn"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      Talk to an Agent
                    </button>
                  </div>

                  <div className="buyhero-stats">
                    <div className="buyhero-stat-card">
                      <strong>18K+</strong>
                      <span>Homes for sale</span>
                    </div>
                    <div className="buyhero-stat-card">
                      <strong>9.2K+</strong>
                      <span>Verified buyers</span>
                    </div>
                    <div className="buyhero-stat-card">
                      <strong>500+</strong>
                      <span>Trusted experts</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="buyhero-right">
                <div className="buyhero-media">
                  <div className="buyhero-info-grid">
                    <div className="buyhero-mini-card">
                      <div className="buyhero-icon-box">
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <h5>Strong buyer demand</h5>
                        <p>Premium zones across Austin and Dallas remain active.</p>
                      </div>
                    </div>

                    <div className="buyhero-mini-card">
                      <div className="buyhero-icon-box">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <h5>Verified listings</h5>
                        <p>Cleaner discovery with more confidence in each option.</p>
                      </div>
                    </div>

                    <div className="buyhero-mini-card">
                      <div className="buyhero-icon-box">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h5>Luxury ready</h5>
                        <p>From modern villas to family estates and townhomes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="db-section">
            <div className="db-section-head">
              <div>
                <h2>Featured homes for buying</h2>
                <p>Curated listings for buyers looking for comfort and value</p>
              </div>

              <div className="db-slider-nav">
                <button
                  className="db-round-arrow"
                  type="button"
                  onClick={() => scrollFeatured("prev")}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  className="db-round-arrow"
                  type="button"
                  onClick={() => scrollFeatured("next")}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="db-slider-viewport">
              <div ref={featuredSliderRef} className="db-slider-track">
                {featuredHomes.map((home) => (
                  <Link
                    href={`/property/${home.title.toLowerCase().replaceAll(" ", "-")}`}
                    key={home.id}
                    className="db-property-link"
                  >
                    <article className="db-property-card db-property-slide-card">
                      <div className="db-property-image-wrap">
                        <img src={home.image} alt={home.title} />
                        <span className="db-badge">Hot deal</span>
                        <button className="db-fav-btn" type="button">
                          <Heart size={16} />
                        </button>
                      </div>

                      <div className="db-property-body">
                        <h3>{home.title}</h3>
                        <div className="db-location">
                          <MapPin size={14} />
                          <span>{home.location}</span>
                        </div>

                        <div className="db-price-row">
                          <strong>{home.price}</strong>
                          <span>For Sale</span>
                        </div>

                        <div className="db-meta">
                          <span>
                            <BedDouble size={14} /> {home.beds}
                          </span>
                          <span>
                            <Bath size={14} /> {home.baths}
                          </span>
                          <span>
                            <Square size={14} /> {home.area}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="db-highlight-strip">
            <div className="db-highlight-left">
              <span className="db-kicker">SMART MATCHING</span>
              <h2>Get homes recommended around your buying budget</h2>
              <p>
                Sign in to unlock tailored purchase recommendations based on your
                budget, preferred location, and home type.
              </p>
              <Link href="/account" className="db-outline-btn">
                Sign in
              </Link>
            </div>

            <div className="db-highlight-right">
              <div className="db-mini-stack db-mini-top">
                <span className="db-mini-icon">🏡</span>
                <div>
                  <strong>Recommended homes</strong>
                  <p>Based on your budget range</p>
                </div>
              </div>

              <div className="db-mini-stack db-mini-mid">
                <span className="db-mini-icon">📍</span>
                <div>
                  <strong>Preferred locations</strong>
                  <p>Homes near your selected areas</p>
                </div>
              </div>

              <div className="db-price-card">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
                  alt="Recommended home"
                />
                <div className="db-price-card-body">
                  <h3>$695,000</h3>
                  <p>4 BD &nbsp; 3 BA &nbsp; 3,102 sqft &nbsp; House for Sale</p>
                </div>
              </div>
            </div>
          </section>

          <section className="db-agent-section">
            <div className="db-agent-copy">
              <span className="db-kicker">DWELLIO™ BUYING ASSIST</span>
              <h2>Need help buying? Work with a trusted expert</h2>
              <p>
                We match you with top local real estate experts who understand
                your market and help you close with confidence.
              </p>
              <button className="db-primary-btn" type="button">
                Compare agents <ArrowRight size={16} />
              </button>
            </div>

            <div className="db-agent-list">
              <div className="db-agent-card">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Agent"
                />
                <h4>Greg Kiar</h4>
                <p>Dwellio Premier Realty</p>
                <div className="db-agent-stats">
                  <span>27 yrs</span>
                  <span>78 sales</span>
                </div>
              </div>

              <div className="db-agent-card">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Agent"
                />
                <h4>Bryan Swan</h4>
                <p>Dwellio Luxury Advisors</p>
                <div className="db-agent-stats">
                  <span>11 yrs</span>
                  <span>23 sales</span>
                </div>
              </div>

              <div className="db-agent-card">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Agent"
                />
                <h4>Emma Clark</h4>
                <p>Dwellio Residential Group</p>
                <div className="db-agent-stats">
                  <span>9 yrs</span>
                  <span>31 sales</span>
                </div>
              </div>
            </div>
          </section>

          <section className="db-section">
            <div className="db-section-head">
              <div>
                <h2>Top picks across Texas</h2>
                <p>Best value homes selected for families, investors, and buyers</p>
              </div>
              <button className="db-round-arrow" type="button">
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="db-grid db-grid-3">
              {topPicks.map((home) => (
                <Link
                  href={`/property/${home.title.toLowerCase().replaceAll(" ", "-")}`}
                  key={home.id}
                  className="db-property-link"
                >
                  <article className="db-property-card db-property-card-large">
                    <div className="db-property-image-wrap">
                      <img src={home.image} alt={home.title} />
                      <span className="db-badge">Verified</span>
                      <button className="db-fav-btn" type="button">
                        <Heart size={16} />
                      </button>
                    </div>

                    <div className="db-property-body">
                      <h3>{home.title}</h3>
                      <div className="db-location">
                        <MapPin size={14} />
                        <span>{home.location}</span>
                      </div>

                      <div className="db-price-row">
                        <strong>{home.price}</strong>
                        <span>For Sale</span>
                      </div>

                      <div className="db-meta">
                        <span>
                          <BedDouble size={14} /> {home.beds}
                        </span>
                        <span>
                          <Bath size={14} /> {home.baths}
                        </span>
                        <span>
                          <Square size={14} /> {home.area}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="db-section">
            <div className="db-section-head">
              <div>
                <h2>Browse by neighborhood</h2>
                <p>Explore popular buying zones with strong lifestyle value</p>
              </div>
            </div>

            <div className="db-neighborhoods">
              {neighborhoods.map((item, index) => (
                <div className="db-neighborhood-card" key={index}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <a href="#">
                    Explore <ChevronRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="db-footer">
          <div className="db-footer-top">
            <div className="db-footer-shell">
              <h3>Inspiration for future home buying</h3>

              <div
                className="db-footer-tabs-wrap"
                onMouseLeave={() => setActiveFooterTab("popular")}
              >
                <div className="db-footer-tabs">
                  {footerTabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      className={`db-footer-tab ${activeFooterTab === tab.key ? "active" : ""}`}
                      onClick={() => setActiveFooterTab(tab.key)}
                      onMouseEnter={() => setActiveFooterTab(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="db-footer-dropdown">
                  <div className="db-footer-dropdown-grid">
                    {activeFooterItems.map((item, index) => (
                      <a href="#" key={`${activeFooterTab}-${index}`}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="db-footer-bottom">
            <p>Created and maintained by Logisol technologies. Privacy · Terms · Your Privacy Choices</p>
            <p>English (US) $ USD</p>
          </div>
        </footer>
      </div>

      {isContactModalOpen && (
        <div
          className="cm-overlay"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="cm-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cm-close"
              onClick={() => setIsContactModalOpen(false)}
              aria-label="Close form"
            >
              ×
            </button>

            <div className="cm-head">
              <h3>Contact Agent</h3>
              <p>
                Talk with our property expert for pricing, visits, and buying guidance.
              </p>
            </div>

            <div className="cm-agent">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Bryan Swan"
              />
              <div className="cm-agent-info">
                <h4>Bryan Swan</h4>
                <span>Residential Expert</span>
                <a href="tel:+12145550144">(214) 555-0144</a>
                <a href="mailto:bryan@dwellio.com">bryan@dwellio.com</a>
              </div>
            </div>

            <form className="cm-form" onSubmit={handleContactSubmit}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <textarea
                rows="3"
                placeholder="I'm interested in buying a property and would like to talk to an agent."
              />
              <button type="submit">Send Message</button>
            </form>

            <p className="cm-note">
              Your information is secure and will not be shared.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}