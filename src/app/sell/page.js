"use client";
import Link from "next/link";
import React, { useRef } from "react";
import {
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Heart,
  TrendingUp,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Building2,
  Users,
  Home,
  CheckCircle2,
} from "lucide-react";

const sellSliderSections = [
  {
    id: "sellTop",
    title: "Homes recently sold with strong results",
    subtitle: "Examples of listings that performed well with the right presentation and pricing",
    items: [
      {
        title: "Modern Family House",
        location: "Dallas, Texas",
        price: "$695,000",
        tag: "Sold in 12 days",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Luxury Villa",
        location: "Austin, Texas",
        price: "$920,000",
        tag: "11 offers received",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Urban Townhome",
        location: "Houston, Texas",
        price: "$540,000",
        tag: "Above asking",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Premium Corner House",
        location: "Plano, Texas",
        price: "$780,000",
        tag: "Fast closing",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Suburban Residence",
        location: "Fort Worth, Texas",
        price: "$610,000",
        tag: "High buyer interest",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Stylish Home",
        location: "San Antonio, Texas",
        price: "$470,000",
        tag: "Verified buyers",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "sellSecond",
    title: "Popular property types to sell right now",
    subtitle: "High demand categories buyers are actively searching for",
    items: [
      {
        title: "Townhome",
        location: "Austin, Texas",
        price: "$520,000",
        tag: "Demand rising",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Family House",
        location: "Houston, Texas",
        price: "$640,000",
        tag: "Strong family market",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Luxury Apartment",
        location: "Dallas, Texas",
        price: "$430,000",
        tag: "Premium buyers",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Modern Villa",
        location: "Plano, Texas",
        price: "$845,000",
        tag: "High intent buyers",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Starter Home",
        location: "Arlington, Texas",
        price: "$355,000",
        tag: "Fast moving",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Corner Plot House",
        location: "Fort Worth, Texas",
        price: "$585,000",
        tag: "More inquiries",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "sellThird",
    title: "Seller opportunities across Texas",
    subtitle: "Areas where good listings can attract stronger attention",
    items: [
      {
        title: "Austin Seller Market",
        location: "Austin, Texas",
        price: "Avg. strong demand",
        tag: "Hot zone",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Dallas Suburbs",
        location: "Dallas, Texas",
        price: "Growing buyers",
        tag: "Steady market",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Houston Premium Belt",
        location: "Houston, Texas",
        price: "Luxury interest",
        tag: "High visibility",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Plano Growth Areas",
        location: "Plano, Texas",
        price: "Quality traffic",
        tag: "Top performers",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "San Antonio Expansion",
        location: "San Antonio, Texas",
        price: "Stable demand",
        tag: "Buyer ready",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Fort Worth Families",
        location: "Fort Worth, Texas",
        price: "Solid demand",
        tag: "Good turnover",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

const companyCards = [
  {
    icon: <TrendingUp size={20} />,
    title: "Better pricing strategy",
    text: "We position listings with a clearer pricing approach based on market demand and buyer behavior.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trusted presentation",
    text: "From visuals to listing quality, we help make your property feel stronger, cleaner, and more valuable.",
  },
  {
    icon: <Clock3 size={20} />,
    title: "Faster selling process",
    text: "A better structure can reduce delays and help you move from listing to closing more smoothly.",
  },
  {
    icon: <Users size={20} />,
    title: "Qualified buyer focus",
    text: "The goal is not just attention, but better attention from buyers who are more ready to act.",
  },
  {
    icon: <BadgeDollarSign size={20} />,
    title: "Higher perceived value",
    text: "Professional positioning can increase trust and improve how buyers view the worth of your home.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Market ready approach",
    text: "We shape your property for modern expectations so it stands out in a competitive listing space.",
  },
];

const sellTabsData = {
  Popular: [
    { title: "Austin", subtitle: "High demand sellers" },
    { title: "Dallas", subtitle: "Suburban homes" },
    { title: "Houston", subtitle: "Premium residences" },
    { title: "San Antonio", subtitle: "Family houses" },
    { title: "Fort Worth", subtitle: "Growing neighborhoods" },
    { title: "Plano", subtitle: "Luxury homes" },
    { title: "Arlington", subtitle: "Starter homes" },
    { title: "El Paso", subtitle: "Affordable inventory" },
    { title: "Galveston", subtitle: "Coastal properties" },
    { title: "Corpus Christi", subtitle: "Beach homes" },
    { title: "Lubbock", subtitle: "Residential opportunities" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Luxury: [
    { title: "Austin Hills", subtitle: "High end villas" },
    { title: "Dallas Uptown", subtitle: "Luxury apartments" },
    { title: "Houston Heights", subtitle: "Premium homes" },
    { title: "Plano Estates", subtitle: "Executive residences" },
    { title: "Frisco", subtitle: "Modern luxury homes" },
    { title: "Southlake", subtitle: "High value buyers" },
    { title: "Westlake", subtitle: "Elite inventory" },
    { title: "River Oaks", subtitle: "Prestige properties" },
    { title: "Highland Park", subtitle: "Luxury demand" },
    { title: "The Woodlands", subtitle: "Premium family homes" },
    { title: "Lakeway", subtitle: "Luxury market" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Families: [
    { title: "Plano", subtitle: "School district homes" },
    { title: "Frisco", subtitle: "Family demand" },
    { title: "Fort Worth", subtitle: "Spacious homes" },
    { title: "San Antonio", subtitle: "Affordable family houses" },
    { title: "Round Rock", subtitle: "Growing demand" },
    { title: "Sugar Land", subtitle: "Suburban buyers" },
    { title: "Katy", subtitle: "Family focused" },
    { title: "Arlington", subtitle: "Starter family homes" },
    { title: "Allen", subtitle: "Residential demand" },
    { title: "McKinney", subtitle: "Top neighborhoods" },
    { title: "Pearland", subtitle: "Move in ready homes" },
    { title: "Show more", subtitle: "⌄" },
  ],
  Investment: [
    { title: "Dallas", subtitle: "Rental ready areas" },
    { title: "Houston", subtitle: "Investor activity" },
    { title: "Austin", subtitle: "Growth potential" },
    { title: "San Antonio", subtitle: "Entry investment homes" },
    { title: "Fort Worth", subtitle: "Steady returns" },
    { title: "Plano", subtitle: "Premium resale" },
    { title: "Irving", subtitle: "Strong occupancy zones" },
    { title: "Garland", subtitle: "Affordable acquisitions" },
    { title: "Pasadena", subtitle: "Value inventory" },
    { title: "Laredo", subtitle: "Emerging demand" },
    { title: "Mesquite", subtitle: "Investor visibility" },
    { title: "Show more", subtitle: "⌄" },
  ],
};

const sellTabs = Object.keys(sellTabsData);

export default function SellPage() {
  const sliderRefs = useRef({});
  const [activeTab, setActiveTab] = React.useState("Popular");

  const scrollSlider = (sectionId, direction) => {
    const slider = sliderRefs.current[sectionId];
    if (!slider) return;

    const card = slider.querySelector(".sell-card-item");
    if (!card) return;

    const styles = window.getComputedStyle(slider);
    const gap = parseInt(styles.gap || "18", 10);
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main className="sell-main-wrap">
      <section className="sell-first-block">
        <div className="sell-first-grid">
          <div className="sell-first-copy">
            <span className="sell-first-label">SMART SELLING EXPERIENCE</span>
            <h1 className="sell-first-heading">
              Sell your property with more clarity, trust, and stronger positioning
            </h1>
            <p className="sell-first-para">
              We help shape listings that feel more professional, attract more relevant buyer attention, and create a smoother selling journey from presentation to closing.
            </p>

            <div className="sell-first-form">
              <div className="sell-first-field">
                <label>Location</label>
                <input type="text" placeholder="Enter property location" />
              </div>

              <div className="sell-first-divider" />

              <div className="sell-first-field">
                <label>Property Type</label>
                <input type="text" placeholder="House, Apartment, Villa" />
              </div>

              <div className="sell-first-divider" />

              <div className="sell-first-field">
                <label>Expected Price</label>
                <input type="text" placeholder="Enter asking price" />
              </div>

              <button className="sell-first-submit" aria-label="Search selling options">
                <Search size={18} />
              </button>
            </div>

            {/* <div className="sell-first-btns">
              <a href="#" className="sell-first-primary-btn">
                Start Selling
                <ArrowRight size={16} />
              </a>
              <a href="#" className="sell-first-outline-btn">
                Talk to an Expert
              </a>
            </div> */}
          </div>

          <div className="sell-first-media">
            <div className="sell-first-image-shell">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
                alt="House with trees"
              />
              <div className="sell-first-image-fade" />
            </div>

            <div className="sell-first-mini-note">
              <div className="sell-first-note-icon">
                <Home size={18} />
              </div>
              <div>
                <h4>Professional listing presentation</h4>
                <p>Homes that look cleaner and more trustworthy create stronger buyer response.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sell-company-block">
        <div className="sell-company-head">
          <div>
            <span className="sell-company-label">WHY DWELLIO</span>
            <h2>What we do and why it gives sellers an advantage</h2>
            <p>
              We are focused on making properties look more market ready, easier to trust, and better aligned with what serious buyers expect.
            </p>
          </div>
        </div>

        <div className="sell-company-grid">
          {companyCards.map((card, index) => (
            <div className="sell-company-card" key={index}>
              <div className="sell-company-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {sellSliderSections.map((section) => (
        <section className="sell-slider-block" key={section.id}>
          <div className="sell-slider-head">
            <div className="sell-slider-copy">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>

            <div className="sell-slider-controls">
              <button
                className="sell-slider-control-btn"
                type="button"
                onClick={() => scrollSlider(section.id, "prev")}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                className="sell-slider-control-btn"
                type="button"
                onClick={() => scrollSlider(section.id, "next")}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            className="sell-slider-row"
            ref={(el) => {
              sliderRefs.current[section.id] = el;
            }}
          >
            {section.items.map((item, index) => (
              <Link
                href={`/property/${item.title.toLowerCase().replaceAll(" ", "-")}`}
                key={`${section.id}-${index}`}
                className="sell-card-link"
              >
                <article className="sell-card-item">
                  <div className="sell-card-thumb">
                    <img src={item.image} alt={item.title} />
                    <span className="sell-card-tag">{item.tag}</span>
                    <button
                      className="sell-card-heart"
                      type="button"
                      aria-label="Save property"
                    >
                      <Heart size={16} />
                    </button>
                  </div>

                  <div className="sell-card-body">
                    <h3>{item.title}</h3>
                    <p className="sell-card-place">
                      <MapPin size={14} /> {item.location}
                    </p>
                    <p className="sell-card-rate">{item.price}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="sell-process-block">
        <div className="sell-process-left">
          <span className="sell-process-label">SELLING PROCESS</span>
          <h2>How we help your property move from listing to sale</h2>
          <p>
            A clearer process creates better outcomes. We focus on presentation, positioning, pricing, and the quality of buyer attention your property receives.
          </p>
        </div>

        <div className="sell-process-right">
          <div className="sell-process-step">
            <CheckCircle2 size={18} />
            <div>
              <h4>Prepare the listing</h4>
              <p>Build a cleaner, more polished property presentation.</p>
            </div>
          </div>

          <div className="sell-process-step">
            <CheckCircle2 size={18} />
            <div>
              <h4>Position it correctly</h4>
              <p>Align the listing with the right audience and price expectations.</p>
            </div>
          </div>

          <div className="sell-process-step">
            <CheckCircle2 size={18} />
            <div>
              <h4>Attract stronger buyers</h4>
              <p>Focus on better quality inquiries instead of random traffic.</p>
            </div>
          </div>

          <div className="sell-process-step">
            <CheckCircle2 size={18} />
            <div>
              <h4>Move toward closing</h4>
              <p>Reduce confusion and help create a smoother sale journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sell-tab-block">
        <div className="sell-tab-inner">
          <h2 className="sell-tab-title">Explore seller opportunities by category</h2>

          <div className="sell-tab-row">
            {sellTabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
                onMouseEnter={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="sell-tab-grid">
            {sellTabsData[activeTab].map((item, index) => (
              <div className="sell-tab-item" key={`${activeTab}-${index}`}>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}