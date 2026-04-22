"use client";

import { useState } from "react";
import {
  Building2,
  MapPin,
  BadgeDollarSign,
  FileText,
  Image as ImageIcon,
  Home,
} from "lucide-react";

export default function ListPropertyPage() {
  const [listingType, setListingType] = useState("sell");
  const [propertyType, setPropertyType] = useState("apartment");

  return (
    <main className="lp-page">
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <span className="lp-tag">List with Dwellio</span>
          <h1 className="lp-title">Add your property details</h1>
          <p className="lp-text">
            Fill in the details below to list your property for sale or rent.
            Keep the information clear so buyers and tenants can contact you easily.
          </p>
        </div>
      </section>

      <section className="lp-form-wrap">
        <div className="lp-form-card">
          <div className="lp-form-head">
            <h2>Property Information</h2>
            <p>Enter the main details of your property</p>
          </div>

          <form className="lp-form">
            <div className="lp-grid lp-grid-2">
              <div className="lp-field">
                <label>
                  <FileText size={16} />
                  Property Title
                </label>
                <input type="text" placeholder="Modern apartment in Austin" />
              </div>

              <div className="lp-field">
                <label>
                  <MapPin size={16} />
                  Location
                </label>
                <input type="text" placeholder="Austin, Texas" />
              </div>
            </div>

            <div className="lp-grid lp-grid-2">
              <div className="lp-field">
                <label>
                  <BadgeDollarSign size={16} />
                  Listing Type
                </label>

                <div className="lp-toggle">
                  <button
                    type="button"
                    className={listingType === "sell" ? "active" : ""}
                    onClick={() => setListingType("sell")}
                  >
                    Sell
                  </button>
                  <button
                    type="button"
                    className={listingType === "rent" ? "active" : ""}
                    onClick={() => setListingType("rent")}
                  >
                    Rent
                  </button>
                </div>
              </div>

              <div className="lp-field">
                <label>
                  <Home size={16} />
                  Property Type
                </label>

                <div className="lp-toggle lp-toggle-wrap">
                  <button
                    type="button"
                    className={propertyType === "apartment" ? "active" : ""}
                    onClick={() => setPropertyType("apartment")}
                  >
                    Apartment
                  </button>
                  <button
                    type="button"
                    className={propertyType === "house" ? "active" : ""}
                    onClick={() => setPropertyType("house")}
                  >
                    House
                  </button>
                  <button
                    type="button"
                    className={propertyType === "villa" ? "active" : ""}
                    onClick={() => setPropertyType("villa")}
                  >
                    Villa
                  </button>
                  <button
                    type="button"
                    className={propertyType === "condo" ? "active" : ""}
                    onClick={() => setPropertyType("condo")}
                  >
                    Condo
                  </button>
                </div>
              </div>
            </div>

            <div className="lp-grid lp-grid-3">
              <div className="lp-field">
                <label>Price</label>
                <input type="number" placeholder="Enter price" />
              </div>

              <div className="lp-field">
                <label>Bedrooms</label>
                <input type="number" placeholder="3" />
              </div>

              <div className="lp-field">
                <label>Bathrooms</label>
                <input type="number" placeholder="2" />
              </div>
            </div>

            <div className="lp-grid lp-grid-3">
              <div className="lp-field">
                <label>Area</label>
                <input type="text" placeholder="1450 sqft" />
              </div>

              <div className="lp-field">
                <label>Garage</label>
                <input type="text" placeholder="1 Car" />
              </div>

              <div className="lp-field">
                <label>Year Built</label>
                <input type="text" placeholder="2022" />
              </div>
            </div>

            <div className="lp-field">
              <label>
                <Building2 size={16} />
                Full Address
              </label>
              <input type="text" placeholder="123 Main Street, Austin, Texas 78701" />
            </div>

            <div className="lp-field">
              <label>Description</label>
              <textarea
                rows="6"
                placeholder="Write a short and clear description about your property"
              />
            </div>

            <div className="lp-grid lp-grid-2">
              <div className="lp-field">
                <label>Amenities</label>
                <input
                  type="text"
                  placeholder="WiFi, Parking, Air Conditioning, Gym"
                />
              </div>

              <div className="lp-field">
                <label>Features</label>
                <input
                  type="text"
                  placeholder="Balcony, Pool, Smart Access, Fireplace"
                />
              </div>
            </div>

            <div className="lp-field">
              <label>
                <ImageIcon size={16} />
                Property Images
              </label>
              <input type="file" multiple />
            </div>

            <div className="lp-contact-box">
              <h3>Contact Information</h3>

              <div className="lp-grid lp-grid-3">
                <div className="lp-field">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>

                <div className="lp-field">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>

                <div className="lp-field">
                  <label>Phone</label>
                  <input type="text" placeholder="+1 234 567 890" />
                </div>
              </div>
            </div>

            <div className="lp-actions">
              <button type="submit" className="lp-primary-btn">
                Submit Property
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}