"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Heart,
  ShieldCheck,
  Wallet,
  Clock3,
  Building2,
} from "lucide-react";

const rentSliderSections = [
  {
    id: "rentTop",
    title: "Top rentals across Texas",
    subtitle: "Curated listings for comfort, location, and monthly value",
    items: [
      {
        title: "Modern Loft in Dallas",
        location: "Dallas, Texas",
        price: "$1,850/mo",
        beds: 2,
        baths: 2,
        area: "1,240 sqft",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Luxury Apartment",
        location: "Austin, Texas",
        price: "$1,940/mo",
        beds: 2,
        baths: 2,
        area: "1,320 sqft",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Condo in Houston",
        location: "Houston, Texas",
        price: "$1,620/mo",
        beds: 2,
        baths: 2,
        area: "1,080 sqft",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Townhome in Plano",
        location: "Plano, Texas",
        price: "$2,280/mo",
        beds: 3,
        baths: 3,
        area: "1,960 sqft",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Studio in San Antonio",
        location: "San Antonio, Texas",
        price: "$1,260/mo",
        beds: 1,
        baths: 1,
        area: "760 sqft",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Rental Home in Fort Worth",
        location: "Fort Worth, Texas",
        price: "$2,640/mo",
        beds: 4,
        baths: 3,
        area: "2,420 sqft",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "rentFresh",
    title: "Available this month",
    subtitle: "Fresh rental homes ready for move in",
    items: [
      {
        title: "Apartment in Plano",
        location: "Plano, Texas",
        price: "$1,860/mo",
        beds: 2,
        baths: 2,
        area: "1,240 sqft",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "City Condo in Houston",
        location: "Houston, Texas",
        price: "$1,720/mo",
        beds: 2,
        baths: 2,
        area: "1,120 sqft",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Townhouse in Arlington",
        location: "Arlington, Texas",
        price: "$1,780/mo",
        beds: 3,
        baths: 3,
        area: "1,650 sqft",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Compact Studio in Austin",
        location: "Austin, Texas",
        price: "$1,180/mo",
        beds: 1,
        baths: 1,
        area: "690 sqft",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Family Rental in Dallas",
        location: "Dallas, Texas",
        price: "$2,480/mo",
        beds: 4,
        baths: 3,
        area: "2,260 sqft",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Duplex in Houston",
        location: "Houston, Texas",
        price: "$2,020/mo",
        beds: 3,
        baths: 2,
        area: "1,880 sqft",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

const rentTabData = {
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

const rentTabs = Object.keys(rentTabData);

export default function RentPage() {
  const [activeTab, setActiveTab] = useState("Popular");
  const sliderRefs = useRef({});

  const scrollSlider = (sectionId, direction) => {
    const slider = sliderRefs.current[sectionId];
    if (!slider) return;

    const card = slider.querySelector(".rent-card-item");
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
    <main className="rent-main-wrap">
      <section className="rent-first-block">
        <div className="rent-first-grid">
          <div className="rent-first-copy">
            <span className="rent-first-label">SMART RENTING EXPERIENCE</span>
            <h1 className="rent-first-heading">
              Rent with confidence, not confusion
            </h1>
            <p className="rent-first-para">
              Discover apartments, condos, and homes across Texas with a more
              polished rental experience. Better search, better value, and more
              practical choices for everyday living.
            </p>

            <div className="rent-first-form">
              <div className="rent-first-field">
                <label>Location</label>
                <input type="text" placeholder="Search city or area" />
              </div>

              <div className="rent-first-divider" />

              <div className="rent-first-field">
                <label>Property Type</label>
                <input type="text" placeholder="Apartment, Condo, House" />
              </div>

              <div className="rent-first-divider" />

              <div className="rent-first-field">
                <label>Budget</label>
                <input type="text" placeholder="Enter monthly budget" />
              </div>

              <button className="rent-first-submit" aria-label="Search rentals">
                <Search size={18} />
              </button>
            </div>

            <div className="rent-first-btns">
              <a href="#" className="rent-first-primary-btn">
                Explore Rentals
                <ArrowRight size={16} />
              </a>
              <a href="#" className="rent-first-outline-btn">
                Talk to an Agent
              </a>
            </div>
          </div>

          <div className="rent-first-right-panel">
            <div className="rent-first-panel-box">
              <div className="rent-first-panel-top">
                <div className="rent-first-panel-chip">Verified rentals</div>
                <div className="rent-first-panel-chip">Monthly options</div>
              </div>

              <div className="rent-first-panel-middle">
                <div className="rent-first-stat-card">
                  <div className="rent-first-stat-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4>Verified listings</h4>
                    <p>Trusted properties with cleaner discovery.</p>
                  </div>
                </div>

                <div className="rent-first-stat-card">
                  <div className="rent-first-stat-icon">
                    <Wallet size={18} />
                  </div>
                  <div>
                    <h4>Budget clarity</h4>
                    <p>Smarter options matched to your monthly plan.</p>
                  </div>
                </div>

                <div className="rent-first-stat-card">
                  <div className="rent-first-stat-icon">
                    <Clock3 size={18} />
                  </div>
                  <div>
                    <h4>Move in ready</h4>
                    <p>Fresh rental homes available right now.</p>
                  </div>
                </div>

                <div className="rent-first-stat-card">
                  <div className="rent-first-stat-icon">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h4>Top neighborhoods</h4>
                    <p>Better city coverage across Texas.</p>
                  </div>
                </div>
              </div>

              <div className="rent-first-panel-bottom">
                <div className="rent-first-number-card">
                  <strong>15K+</strong>
                  <span>Rental listings</span>
                </div>

                <div className="rent-first-number-card">
                  <strong>7.8K+</strong>
                  <span>Happy renters</span>
                </div>

                <div className="rent-first-number-card">
                  <strong>400+</strong>
                  <span>Trusted agents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {rentSliderSections.map((section) => (
        <section className="rent-slider-block" key={section.id}>
          <div className="rent-slider-head">
            <div className="rent-slider-copy">
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>

            <div className="rent-slider-controls">
              <button
                className="rent-slider-control-btn"
                type="button"
                onClick={() => scrollSlider(section.id, "prev")}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                className="rent-slider-control-btn"
                type="button"
                onClick={() => scrollSlider(section.id, "next")}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            className="rent-slider-row"
            ref={(el) => {
              sliderRefs.current[section.id] = el;
            }}
          >
            {section.items.map((item, index) => (
              <Link
                href={`/property/${item.title.toLowerCase().replaceAll(" ", "-")}`}
                key={`${section.id}-${index}`}
                className="rent-card-link"
              >
                <article className="rent-card-item">
                  <div className="rent-card-thumb">
                    <img src={item.image} alt={item.title} />
                    <span className="rent-card-tag">Popular choice</span>
                    <button
                      className="rent-card-heart"
                      type="button"
                      aria-label="Save rental"
                    >
                      <Heart size={16} />
                    </button>
                  </div>

                  <div className="rent-card-body">
                    <h3>{item.title}</h3>
                    <p className="rent-card-place">{item.location}</p>
                    <p className="rent-card-rate">{item.price}</p>
                    <div className="rent-card-details">
                      <span>
                        <BedDouble size={14} /> {item.beds}
                      </span>
                      <span>
                        <Bath size={14} /> {item.baths}
                      </span>
                      <span>
                        <Square size={14} /> {item.area}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <section className="rent-tab-block">
        <div className="rent-tab-inner">
          <h2 className="rent-tab-title">Inspiration for future getaways</h2>

          <div className="rent-tab-row">
            {rentTabs.map((tab) => (
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

          <div className="rent-tab-grid">
            {rentTabData[activeTab].map((item, index) => (
              <div className="rent-tab-item" key={`${activeTab}-${index}`}>
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