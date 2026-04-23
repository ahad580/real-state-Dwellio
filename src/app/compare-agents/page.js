"use client";

import { Star, MapPin, Phone, Mail } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Bryan Swan",
    company: "Dwellio Luxury Advisors",
    experience: "11 years",
    sales: "23 sales",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Emma Clark",
    company: "Dwellio Residential Group",
    experience: "9 years",
    sales: "31 sales",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Greg Kiar",
    company: "Dwellio Premier Realty",
    experience: "27 years",
    sales: "78 sales",
    rating: 5.0,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function CompareAgentsPage() {
  return (
    <main className="ca-page">
    
      <section className="ca-hero">
        <h1>Compare Top Real Estate Agents</h1>
        <p>
          Find the right expert based on experience, sales, and client ratings.
        </p>
      </section>
      <section className="ca-grid">
        {agents.map((agent) => (
          <div className="ca-card" key={agent.id}>
            <img src={agent.image} alt={agent.name} />

            <h3>{agent.name}</h3>
            <p className="ca-company">{agent.company}</p>

            <div className="ca-stats">
              <span>{agent.experience}</span>
              <span>{agent.sales}</span>
            </div>

            <div className="ca-rating">
              <Star size={16} /> {agent.rating}
            </div>

            {/* <div className="ca-actions">
              <button>View Profile</button>
              <button className="outline">Contact</button>
            </div> */}
          </div>
        ))}
      </section>
    </main>
  );
}