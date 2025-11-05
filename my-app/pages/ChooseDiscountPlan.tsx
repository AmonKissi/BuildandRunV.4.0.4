import React from 'react';

// --- Feature data for plans (cleaner structure, using the existing regular features) ---
const planFeatures = {
  regular: [
    { text: 'Domain & Hosting', icon: '🌐' },
    { text: 'MySQL Database', icon: '🗄️' },
    { text: 'SSL Certificate (Basic)', icon: '🔒' },
    { text: 'Priority Support', icon: '📞' },
    // Adding the specific build feature here:
    { text: 'Full-Stack Build (FE, API, BE)', icon: '💻' }, 
  ],
};

// --- Plan Card Component (Reused from previous code) ---
interface PlanProps {
  name: string;
  oneTimePrice: string;
  monthlyPrice: string;
  description: string;
  features: { text: string; icon: string }[];
  href: string;
  isRecommended?: boolean;
}

const Plan: React.FC<PlanProps> = ({
  name,
  oneTimePrice,
  monthlyPrice,
  description,
  features,
  href,
  isRecommended = false,
}) => {
  return (
    <div className={`br-plan-card ${isRecommended ? 'br-plan-recommended' : ''}`}>
      {isRecommended && <div className="br-badge-recommended">Special Offer</div>}
      
      <h3 className="br-plan-title">{name}</h3>
      <p className="br-plan-description">{description}</p>
      
      <div className="br-price-group">
        <div className="br-price-main">
          <span className="br-price-monthly">{monthlyPrice}</span>/mo
        </div>
        <p className="br-price-onetime">
          Plus {oneTimePrice} one-time setup
        </p>
      </div>

      <a href={href} className="br-plan-button">
        Secure Discount Plan
      </a>

      <ul className="br-plan-features-list">
        {features.map((f, i) => (
          <li key={i}>
            <span className="br-feature-icon">{f.icon}</span> {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Footer Component (Reused from previous code) ---
const Footer: React.FC = () => {
  return (
    <footer className="br-footer">
      <div className="br-footer-content">
        <p className="br-footer-note">
          © 2025 Build and Run v3.0.3 — Made with ❤️
        </p>
      </div>
    </footer>
  );
};


// --- Main Discount Plan Component ---
const ChooseDiscountPlan: React.FC = () => {
  const DISCOUNT_LINK = "https://buy.stripe.com/dRmbJ0bbf72Y7Ov2tE1oI0k";
  
  return (
    <div className="br-pricing-page">
      <header className="br-header">
        
        {/* Homepage button - Centered on mobile, Right on Desktop */}
        <div className="br-header-top-bar">
          <a href="https://buildandrun.net" className="br-homepage-link">
            🏠 Homepage
          </a>
        </div>

        <img
          className="br-brand-logo"
          src="./img/logo/logobr.png" // Ensure this path is correct
          alt="Brstore Logo"
        />
        <h1 className="br-page-title">
          <span className="br-highlight-text">Limited Time Offer:</span> Discounted Website Build
        </h1>
        <p className="br-page-subtitle">
          Launch your website with **full front-end and back-end architecture** at a special price 🚀
        </p>
      </header>
      
      <main className="br-plans-grid-container br-single-plan-focus">
        {/* Only one discounted plan card */}
        <Plan
          name="Regular Discounted"
          oneTimePrice="$700" // Discounted price
          monthlyPrice="$12.99" // Monthly fee
          description="The perfect foundation for launching a professional, full-stack website."
          features={planFeatures.regular}
          href={DISCOUNT_LINK}
          isRecommended={true} // Highlight this single card
        />
      </main>

      <Footer />
    </div>
  );
};

export default ChooseDiscountPlan;