"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Share2,
  Heart,
  BedDouble,
  Bath,
  Square,
  CarFront,
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Tag,
  ChevronLeft,
  ChevronRight,
  AirVent,
  Wifi,
  Flame,
  ParkingSquare,
  PawPrint,
  WashingMachine,
  Building2,
  Home,
  Warehouse,
  Dumbbell,
} from "lucide-react";
import { getPropertyBySlug, properties, formatSlug } from "@/data/properties";

const amenityIconMap = {
  "Air Conditioning": AirVent,
  "Central Heating": Flame,
  WiFi: Wifi,
  "Washer & Dryer": WashingMachine,
  "Pet Friendly": PawPrint,
  Fireplace: Flame,
  "Built-in Wardrobes": Warehouse,
  "Covered Parking": ParkingSquare,
  "Gym Access": Dumbbell,
  Elevator: Building2,
};

const featureIconMap = {
  Bedrooms: BedDouble,
  Bathrooms: Bath,
  Kitchen: Home,
  Garage: CarFront,
  Parking: ParkingSquare,
};

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = String(params?.slug || "");
  const property = useMemo(() => getPropertyBySlug(slug), [slug]);

  const [activeImage, setActiveImage] = useState(property.gallery?.[0] || "");
  const [saved, setSaved] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${property.title} at ${property.address}.`,
  });
  const [mortgageOpen, setMortgageOpen] = useState(false);

  const nearbyRef = useRef(null);
  const similarRef = useRef(null);

  const isRental = String(property.status).toLowerCase().includes("rent");
  const salePrice = Number(property.price || 0);
  const downPayment = Math.round(salePrice * 0.2);
  const loanAmount = Math.max(salePrice - downPayment, 0);
  const years = 30;
  const monthlyRate = 0.068 / 12;
  const months = years * 12;
  const estimatedMonthly =
    loanAmount > 0
      ? Math.round(
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      )
      : 0;

  const sameCity = properties.filter(
    (item) => item.slug !== property.slug && item.city === property.city
  );
  const sameCategory = properties.filter(
    (item) =>
      item.slug !== property.slug &&
      item.category?.toLowerCase() === property.category?.toLowerCase()
  );

  const nearbyProperties = sameCity.slice(0, 4);
  const similarProperties = sameCategory.slice(0, 4);

  const scrollRow = (ref, direction) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: direction === "next" ? 320 : -320,
      behavior: "smooth",
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: property.title,
          text: property.description,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch {
      // ignore
    }
  };

  const handleScheduleTour = () => {
    setContactForm((prev) => ({
      ...prev,
      message: `I would like to schedule a tour for ${property.title} at ${property.address}.`,
    }));
    document
      .getElementById("pd-contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleRequestInfo = () => {
    setContactForm((prev) => ({
      ...prev,
      message: `Please share more information about ${property.title} at ${property.address}.`,
    }));
    document
      .getElementById("pd-contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <>
      <main className="pd-page">
        <div className="pd-shell">
          <div className="pd-back-row">
            <button
              className="pd-back-btn"
              onClick={() => {
                if (window.history.length > 1) router.back();
                else router.push("/");
              }}
            >
              <ArrowLeft size={16} />
              Back to listings
            </button>
          </div>

          <section className="pd-hero-grid">
            <div className="pd-left-main">
              <div className="pd-gallery-wrap">
                <div className="pd-main-image-card">
                  <img src={activeImage} alt={property.title} />
                  <div className="pd-image-count">
                    <CalendarDays size={15} />
                    1 / {property.gallery.length}
                  </div>
                </div>

                <div className="pd-side-gallery">
                  {property.gallery.slice(1, 4).map((img, index) => (
                    <button
                      key={`${img}-${index}`}
                      className="pd-thumb-card"
                      onClick={() => setActiveImage(img)}
                    >
                      <img src={img} alt={`${property.title} ${index + 2}`} />
                    </button>
                  ))}
                </div>
              </div>

              <section className="pd-content-card">
                <h1>{property.title}</h1>

                <div className="pd-location-line">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>

                <div className="pd-badges">
                  {property.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>

                <p className="pd-description-short">{property.description}</p>

                <div className="pd-divider" />

                <div className="pd-section">
                  <h2>Key Details</h2>
                  <div className="pd-key-grid">
                    <div>
                      <span>Property Type</span>
                      <strong>{property.category}</strong>
                    </div>
                    <div>
                      <span>Year Built</span>
                      <strong>{property.yearBuilt}</strong>
                    </div>
                    <div>
                      <span>Lot Size</span>
                      <strong>{property.lotSize}</strong>
                    </div>
                    <div>
                      <span>Property ID</span>
                      <strong>{property.propertyId}</strong>
                    </div>
                    <div>
                      <span>Status</span>
                      <strong>{property.status}</strong>
                    </div>
                  </div>
                </div>

                <div className="pd-divider" />

                <div className="pd-section">
                  <h2>Features</h2>
                  <div className="pd-feature-grid">
                    {property.features.map((feature) => {
                      const Icon =
                        Object.entries(featureIconMap).find(([key]) =>
                          feature.toLowerCase().includes(key.toLowerCase())
                        )?.[1] || BadgeCheck;

                      return (
                        <div className="pd-feature-item" key={feature}>
                          <span className="pd-feature-icon">
                            <Icon size={16} />
                          </span>
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pd-divider" />

                <div className="pd-section">
                  <h2>Description</h2>
                  <p className="pd-long-description">{property.longDescription}</p>
                </div>

                <div className="pd-divider" />

                <div className="pd-section">
                  <h2>Amenities</h2>
                  <div className="pd-amenities-grid">
                    {property.amenities.map((amenity) => {
                      const Icon = amenityIconMap[amenity] || ShieldCheck;
                      return (
                        <div className="pd-amenity-item" key={amenity}>
                          <Icon size={16} />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pd-divider" />

                <div className="pd-section">
                  <h2>Location</h2>
                  <div className="pd-location-box">
                    <div className="pd-map-box">
                      <div className="pd-map-pin">
                        <MapPin size={22} />
                      </div>
                    </div>

                    <div className="pd-location-content">
                      <h4>{property.address}</h4>
                      <ul>
                        {property.locationHighlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {nearbyProperties.length > 0 && (
                  <>
                    <div className="pd-divider" />
                    <div className="pd-section">
                      <div className="pd-row-head">
                        <h2>Nearby Properties</h2>
                        <div className="pd-row-nav">
                          <button onClick={() => scrollRow(nearbyRef, "prev")}>
                            <ChevronLeft size={16} /> 
                          </button>
                          <button onClick={() => scrollRow(nearbyRef, "next")}>
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="pd-card-row" ref={nearbyRef}>
                        {nearbyProperties.map((item) => (
                          <Link
                            href={`/property/${item.slug || formatSlug(item.title)}`}
                            key={item.slug}
                            className="pd-mini-card"
                          >
                            <div className="pd-mini-thumb">
                              <img src={item.gallery[0]} alt={item.title} />
                              <span>{item.status}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSaved((prev) => !prev);
                                }}
                              >
                                <Heart size={14} />
                              </button>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.location}</p>
                            <strong>{item.priceLabel}</strong>
                            <small>
                              {item.beds} Beds &nbsp; | &nbsp; {item.baths} Baths
                              &nbsp; | &nbsp; {item.area.toLocaleString()} Sq Ft
                            </small>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {similarProperties.length > 0 && (
                  <>
                    <div className="pd-divider" />
                    <div className="pd-section">
                      <div className="pd-row-head">
                        <h2>Similar Properties</h2>
                        <div className="pd-row-nav">
                          <button onClick={() => scrollRow(similarRef, "prev")}>
                            <ChevronLeft size={16} />
                          </button>
                          <button onClick={() => scrollRow(similarRef, "next")}>
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="pd-card-row" ref={similarRef}>
                        {similarProperties.map((item) => (
                          <Link
                            href={`/property/${item.slug || formatSlug(item.title)}`}
                            key={item.slug}
                            className="pd-mini-card"
                          >
                            <div className="pd-mini-thumb">
                              <img src={item.gallery[0]} alt={item.title} />
                              <span>{item.status}</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSaved((prev) => !prev);
                                }}
                              >
                                <Heart size={14} />
                              </button>
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.location}</p>
                            <strong>{item.priceLabel}</strong>
                            <small>
                              {item.beds} Beds &nbsp; | &nbsp; {item.baths} Baths
                              &nbsp; | &nbsp; {item.area.toLocaleString()} Sq Ft
                            </small>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </section>
            </div>

            <aside className="pd-sidebar">
              <div className="pd-side-top-actions">
                <button onClick={handleShare}>
                  <Share2 size={15} />
                  Share
                </button>
                <button onClick={() => setSaved((prev) => !prev)}>
                  <Heart size={15} fill={saved ? "currentColor" : "none"} />
                  {saved ? "Saved" : "Save"}
                </button>
              </div>

              <div className="pd-price-card">
                <span className="pd-status-pill">{property.status}</span>
                <h2>{property.priceLabel}</h2>
                <h3>{property.title}</h3>
                <p>{property.address}</p>

                <div className="pd-stats-grid">
                  <div>
                    <strong>{property.beds}</strong>
                    <span>Bedrooms</span>
                  </div>
                  <div>
                    <strong>{property.baths}</strong>
                    <span>Bathrooms</span>
                  </div>
                  <div>
                    <strong>{property.area.toLocaleString()}</strong>
                    <span>Sq Ft</span>
                  </div>
                  <div>
                    <strong>{property.garage}</strong>
                    <span>Garage</span>
                  </div>
                </div>

                <button className="pd-primary-cta" onClick={handleScheduleTour}>
                  Schedule a Tour
                </button>
                <button className="pd-secondary-cta" onClick={handleRequestInfo}>
                  Request More Info
                </button>
              </div>

              <div className="pd-contact-card" id="pd-contact-form">
                <h3>Contact Agent</h3>

                <div className="pd-agent-box">
                  <img src={property.agent.image} alt={property.agent.name} />
                  <div>
                    <strong>{property.agent.name}</strong>
                    <span>{property.agent.role}</span>
                    <p>
                      <Phone size={14} /> {property.agent.phone}
                    </p>
                    <p>
                      <Mail size={14} /> {property.agent.email}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="pd-form">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                  <button type="submit" className="pd-primary-cta">
                    Send Message
                  </button>
                </form>

                <div className="pd-form-note">
                  <Lock size={14} />
                  Your information is secure and will not be shared.
                </div>
              </div>

              <div className="pd-mortgage-card">
                <h3>{isRental ? "Estimate Your Monthly Cost" : "Estimate Your Mortgage"}</h3>

                <div className="pd-mortgage-line">
                  <span>{isRental ? "Listed Price" : "Sale Price"}</span>
                  <strong>{property.priceLabel}</strong>
                </div>
                <div className="pd-mortgage-line">
                  <span>Down Payment (20%)</span>
                  <strong>{currency(downPayment)}</strong>
                </div>
                <div className="pd-mortgage-line">
                  <span>Loan Term</span>
                  <strong>{years} Years Fixed</strong>
                </div>

                <div className="pd-mortgage-total">
                  <span>Estimated Monthly Payment</span>
                  <h4>{currency(estimatedMonthly)} <small>/month</small></h4>
                </div>

                {mortgageOpen && (
                  <div className="pd-mortgage-extra">
                    <div className="pd-mortgage-line">
                      <span>Loan Amount</span>
                      <strong>{currency(loanAmount)}</strong>
                    </div>
                    <div className="pd-mortgage-line">
                      <span>Interest Rate</span>
                      <strong>6.8%</strong>
                    </div>
                  </div>
                )}

                <button
                  className="pd-secondary-cta"
                  onClick={() => setMortgageOpen((prev) => !prev)}
                >
                  {mortgageOpen
                    ? "Hide Mortgage Breakdown"
                    : "View Full Mortgage Breakdown"}
                </button>
              </div>
            </aside>
          </section>

          <section className="pd-bottom-strip">
            <div>
              <ShieldCheck size={18} />
              <div>
                <strong>Verified Listings</strong>
                <span>All properties are verified for accuracy.</span>
              </div>
            </div>
            <div>
              <BadgeCheck size={18} />
              <div>
                <strong>Expert Agents</strong>
                <span>Work with trusted local experts.</span>
              </div>
            </div>
            <div>
              <Lock size={18} />
              <div>
                <strong>Secure Transactions</strong>
                <span>Your data and privacy are protected.</span>
              </div>
            </div>
            <div>
              <Tag size={18} />
              <div>
                <strong>Best Deals</strong>
                <span>Find properties at the best value.</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .pd-page {
          background: #f7f8fc;
          min-height: 100vh;
          color: #121212;
          padding-bottom: 50px;
        }

        .pd-topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(247, 248, 252, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #eceef6;
        }

        .pd-topbar-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .pd-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .pd-logo-mark {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #3b57f7, #6b7dff);
          color: #fff;
          font-weight: 700;
        }

        .pd-logo strong {
          display: block;
          font-size: 20px;
        }

        .pd-logo small {
          display: block;
          color: #70758a;
          font-size: 12px;
        }

        .pd-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px;
          border: 1px solid #e8ebf4;
          border-radius: 999px;
          background: #fff;
        }

        .pd-nav a {
          text-decoration: none;
          color: #3d4355;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 999px;
        }

        .pd-nav a:hover {
          background: #f3f5fb;
        }

        .pd-top-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pd-lite-btn,
        .pd-circle-btn,
        .pd-side-top-actions button,
        .pd-back-btn,
        .pd-row-nav button,
        .pd-thumb-card {
          border: 1px solid #e5e9f2;
          background: #fff;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .pd-lite-btn {
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 600;
        }

        .pd-circle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }

        .pd-shell {
          max-width: 1320px;
          margin: 0 auto;
          padding: 220px 20px 0;
        }

        .pd-back-row {
          margin-bottom: 18px;
        }

        .pd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 600;
          color: #39405a;
        }

        .pd-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) 320px;
          gap: 22px;
          align-items: start;
        }

        .pd-left-main {
          min-width: 0;
        }

        .pd-gallery-wrap {
          display: grid;
          grid-template-columns: 1.35fr 0.62fr;
          gap: 10px;
          margin-bottom: 18px;
        }

        .pd-main-image-card,
        .pd-thumb-card {
          overflow: hidden;
          border-radius: 18px;
          position: relative;
        }

        .pd-main-image-card img,
        .pd-thumb-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pd-main-image-card {
          min-height: 420px;
        }

        .pd-side-gallery {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          gap: 10px;
          min-height: 420px;
        }

        .pd-thumb-card {
          padding: 0;
        }

        .pd-thumb-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(34, 53, 95, 0.1);
        }

        .pd-image-count {
          position: absolute;
          left: 14px;
          bottom: 14px;
          background: rgba(16, 19, 31, 0.72);
          color: #fff;
          border-radius: 999px;
          padding: 8px 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .pd-content-card,
        .pd-price-card,
        .pd-contact-card,
        .pd-mortgage-card,
        .pd-bottom-strip {
          background: #fff;
          border: 1px solid #e8ebf4;
          border-radius: 20px;
        }

        .pd-content-card {
          padding: 24px 22px;
        }

        .pd-content-card h1 {
          margin: 0 0 10px;
          font-size: 48px;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .pd-location-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6c738a;
          margin-bottom: 14px;
        }

        .pd-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 18px;
        }

        .pd-badges span {
          padding: 8px 14px;
          border-radius: 999px;
          background: #eef2ff;
          color: #5066f7;
          font-size: 13px;
          font-weight: 700;
        }

        .pd-description-short,
        .pd-long-description {
          color: #5d6479;
          line-height: 1.8;
          margin: 0;
        }

        .pd-divider {
          height: 1px;
          background: #eceef6;
          margin: 22px 0;
        }

        .pd-section h2 {
          margin: 0 0 16px;
          font-size: 30px;
          line-height: 1.1;
        }

        .pd-key-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .pd-key-grid div {
          padding-right: 10px;
          border-right: 1px solid #eceef6;
        }

        .pd-key-grid div:last-child {
          border-right: none;
        }

        .pd-key-grid span {
          display: block;
          color: #7a8198;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .pd-key-grid strong {
          font-size: 16px;
        }

        .pd-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .pd-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e8ebf4;
          border-radius: 14px;
          padding: 14px 12px;
          color: #2f3650;
          font-weight: 600;
          background: #fcfdff;
        }

        .pd-feature-icon {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background: #eef2ff;
          color: #4c61f4;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .pd-amenities-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .pd-amenity-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #41485f;
          font-weight: 500;
        }

        .pd-location-box {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 18px;
          align-items: start;
        }

        .pd-map-box {
          min-height: 170px;
          border-radius: 18px;
          background: linear-gradient(180deg, #edf3ff, #e9f8ee);
          border: 1px solid #dfe7f5;
          position: relative;
          overflow: hidden;
        }

        .pd-map-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#d7dfef 1px, transparent 1px),
            linear-gradient(90deg, #d7dfef 1px, transparent 1px);
          background-size: 34px 34px;
          opacity: 0.45;
        }

        .pd-map-pin {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #4a61f7;
          color: white;
          display: grid;
          place-items: center;
          z-index: 2;
          box-shadow: 0 18px 30px rgba(74, 97, 247, 0.24);
        }

        .pd-location-content h4 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .pd-location-content ul {
          margin: 0;
          padding-left: 18px;
          color: #5d6479;
          line-height: 1.9;
        }

        .pd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 88px;
        }

        .pd-side-top-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .pd-side-top-actions button {
          padding: 10px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .pd-price-card,
        .pd-contact-card,
        .pd-mortgage-card {
          padding: 20px;
        }

        .pd-status-pill {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: #eef2ff;
          color: #4b61f5;
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 14px;
        }

        .pd-price-card h2 {
          font-size: 46px;
          margin: 0 0 10px;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .pd-price-card h3 {
          margin: 0 0 8px;
          font-size: 26px;
        }

        .pd-price-card p {
          margin: 0 0 16px;
          color: #6a7186;
          line-height: 1.6;
        }

        .pd-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          padding: 14px 0 18px;
          margin-bottom: 12px;
          border-top: 1px solid #eceef6;
          border-bottom: 1px solid #eceef6;
        }

        .pd-stats-grid div {
          text-align: center;
        }

        .pd-stats-grid strong {
          display: block;
          font-size: 24px;
          margin-bottom: 4px;
        }

        .pd-stats-grid span {
          color: #7a8198;
          font-size: 12px;
        }

        .pd-primary-cta,
        .pd-secondary-cta {
          width: 100%;
          border-radius: 14px;
          padding: 15px 16px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .pd-primary-cta {
          border: none;
          background: linear-gradient(135deg, #3f56f5, #5870ff);
          color: #fff;
          margin-bottom: 10px;
        }

        .pd-secondary-cta {
          background: #fff;
          border: 1px solid #dfe4f2;
          color: #2f3650;
        }

        .pd-agent-box {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 14px 0 18px;
        }

        .pd-agent-box img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
        }

        .pd-agent-box strong,
        .pd-agent-box span,
        .pd-agent-box p {
          display: block;
        }

        .pd-agent-box span,
        .pd-agent-box p {
          color: #6b7288;
          margin-top: 4px;
        }

        .pd-agent-box p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0;
        }

        .pd-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pd-form input,
        .pd-form textarea {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #e2e6f1;
          background: #fff;
          padding: 14px 14px;
          outline: none;
          font: inherit;
        }

        .pd-form-note {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6f7690;
          font-size: 13px;
        }

        .pd-mortgage-card h3 {
          margin: 0 0 18px;
          font-size: 28px;
        }

        .pd-mortgage-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #5f667d;
          padding: 9px 0;
          border-bottom: 1px solid #eef1f7;
        }

        .pd-mortgage-total {
          padding: 16px 0 18px;
        }

        .pd-mortgage-total span {
          color: #6f7690;
          display: block;
          margin-bottom: 8px;
        }

        .pd-mortgage-total h4 {
          margin: 0;
          font-size: 40px;
          line-height: 1;
        }

        .pd-mortgage-total small {
          font-size: 16px;
          color: #6f7690;
        }

        .pd-mortgage-extra {
          margin-bottom: 12px;
        }

        .pd-row-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
        }

        .pd-row-nav {
          display: flex;
          gap: 8px;
        }

        .pd-row-nav button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
        }

        .pd-card-row {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-behavior: smooth;
          padding-bottom: 6px;
        }

        .pd-card-row::-webkit-scrollbar {
          display: none;
        }

        .pd-mini-card {
          min-width: 290px;
          text-decoration: none;
          color: inherit;
          background: #fff;
          border: 1px solid #e8ebf4;
          border-radius: 18px;
          padding: 10px;
        }

        .pd-mini-thumb {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 12px;
          height: 180px;
          background: #eef2f8;
        }

        .pd-mini-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pd-mini-thumb span {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(255, 255, 255, 0.96);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }

        .pd-mini-thumb button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.96);
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .pd-mini-card h4 {
          margin: 0 0 6px;
          font-size: 22px;
          line-height: 1.15;
        }

        .pd-mini-card p {
          margin: 0 0 8px;
          color: #6d748a;
        }

        .pd-mini-card strong {
          display: block;
          font-size: 24px;
          margin-bottom: 6px;
        }

        .pd-mini-card small {
          color: #6b7288;
          font-size: 13px;
        }

        .pd-bottom-strip {
          margin-top: 20px;
          padding: 18px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .pd-bottom-strip > div {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .pd-bottom-strip strong {
          display: block;
          margin-bottom: 4px;
        }

        .pd-bottom-strip span {
          display: block;
          color: #6d748a;
          line-height: 1.6;
          font-size: 14px;
        }

        @media (max-width: 1200px) {
          .pd-hero-grid {
            grid-template-columns: 1fr;
          }

          .pd-sidebar {
            position: static;
          }

          .pd-bottom-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .pd-gallery-wrap,
          .pd-location-box {
            grid-template-columns: 1fr;
          }

          .pd-side-gallery {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            min-height: auto;
          }

          .pd-key-grid,
          .pd-feature-grid,
          .pd-amenities-grid,
          .pd-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pd-nav {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .pd-shell,
          .pd-topbar-inner {
            padding-left: 14px;
            padding-right: 14px;
          }

          .pd-content-card h1,
          .pd-price-card h2,
          .pd-mortgage-total h4 {
            font-size: 34px;
          }

          .pd-section h2,
          .pd-mortgage-card h3,
          .pd-price-card h3 {
            font-size: 24px;
          }

          .pd-key-grid,
          .pd-feature-grid,
          .pd-amenities-grid,
          .pd-bottom-strip {
            grid-template-columns: 1fr;
          }

          .pd-top-actions {
            display: none;
          }

          .pd-mini-card {
            min-width: 250px;
          }
        }
      `}</style>
    </>
  );
}