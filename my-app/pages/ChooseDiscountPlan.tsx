import {
    Zap, // Uptime/Performance (Used for feature list)
    Lock, // Security, SSL
    Globe, // Domain & Hosting
    Users, // Social
    Code, // Full-Stack Build
    MessageSquare,
    DollarSign,
    Heart,
    User,
    Check, // For available features
    Database, // MySQL Database
    Phone, // Priority Support
} from 'lucide-react';

// NOTE: We use standard <img> tag for logo compatibility outside Next.js
// The logo is referenced directly via a static path string.

// --- SINGLE DISCOUNTED PLAN STRUCTURE ---
const DISCOUNT_LINK = "https://buy.stripe.com/dRmbJ0bbf72Y7Ov2tE1oI0k";

const DISCOUNT_PLAN_DETAILS = {
    name: "Full-Stack Build & Launch",
    oneTimePrice: "$700", // Discounted one-time setup
    monthlyPrice: "$12.99", // Monthly hosting fee
    description: "The perfect foundation for launching a professional, full-stack website (Front-end, API, and Database).",
    isRecommended: true,
    buttonText: "Secure Discount Plan",
    features: [
        { text: "Full-Stack Build (FE, API, BE)", icon: Code, available: true },
        { text: "Domain & Hosting Included", icon: Globe, available: true },
        { text: "MySQL Database Access", icon: Database, available: true },
        { text: "SSL Certificate (Basic)", icon: Lock, available: true },
        { text: "Priority Support (30 days)", icon: Phone, available: true },
        { text: "99.9% Uptime SLA", icon: Zap, available: true },
    ],
};

// --- RENDER COMPONENT ---
export default function DiscountPlanPage() {
    const currentYear = new Date().getFullYear();
    const plan = DISCOUNT_PLAN_DETAILS;

    return (
        <div className="landing-wrapper" data-theme="light"> 
            <div className="landing-container">
                
                {/* 1. HEADER SECTION (Consistent styling, new content) */}
                <header className="hero-section" style={{ paddingBottom: '3rem', marginBottom: '3rem' }}>
                    <div className="header-logo-container">
                        <a href="/">
                            {/* Using standard <img> tag */}
                            <img 
                                src="/img/logo/logo-official.png" 
                                alt="Build & Run Logo" 
                                width={200} 
                                height={100} 
                                style={{ height: 'auto', width: '200px' }} 
                            />
                        </a>
                    </div>
                    <br></br>
                    
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)'}}>
                        <span className="text-accent-blue">Limited Time Offer:</span> Discounted Website Build
                    </h1>
                    
                    <p className="hero-subtitle">
                        Launch your website with **full front-end and back-end architecture** at a special price 🚀
                    </p>
                </header>

                {/* 2. PRICING SECTION (Dedicated Single Plan Focus) */}
                <section className="pricing-section" style={{ display: 'flex', justifyContent: 'center' }}>
                    
                    <div className="pricing-grid" style={{ gridTemplateColumns: 'minmax(300px, 450px)', maxWidth: '450px' }}>
                        
                        <div key={plan.name} className={`plan-card ${plan.isRecommended ? 'pro-card' : ''}`} style={{ position: 'relative' }}>
                            
                            {plan.isRecommended && (
                                <div className="plan-tag" style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#ef4444',
                                    color: 'white',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.05em',
                                    boxShadow: '0 4px 10px rgba(239, 68, 68, 0.5)'
                                }}>
                                    SPECIAL OFFER
                                </div>
                            )}

                            <h3 className="plan-title">{plan.name}</h3>
                            <p style={{ color: 'var(--color-text-subtle)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                {plan.description}
                            </p>
                            
                            <div className="plan-price-group">
                                <p className="plan-price">
                                    {plan.monthlyPrice}
                                    <span style={{ fontSize: '1.25rem', fontWeight: '400', color: 'var(--color-text-subtle)' }}>/mo</span>
                                </p>
                                <p style={{ color: 'var(--color-text-subtle)', marginTop: '-1.5rem', marginBottom: '1.5rem' }}>
                                    Plus **{plan.oneTimePrice}** one-time setup
                                </p>
                            </div>
                            
                            <a 
                                href={DISCOUNT_LINK}
                                className={`cta-button primary-cta`}
                                style={{ margin: '1rem 0 2rem 0', fontWeight: '800' }}
                            >
                                {plan.buttonText}
                            </a>

                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => {
                                    const Icon = feature.icon;
                                    return (
                                        <li key={fIndex}>
                                            <Icon size={20} className="feature-check" style={{ color: 'var(--color-accent-blue)' }} />
                                            <span>
                                                {feature.text}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. UTILITY LINKS SECTION (Quick Links) */}
                <section className="utility-links-section" style={{ marginTop: '5rem' }}>
                    <h2 className="section-title">Explore & Navigate</h2>
                    <div className="utility-links-grid">
                        <a href="/" className="utility-link">
                            <Globe size={24} /> Back to Hosting Landing
                        </a>
                        <a href="./faq" className="utility-link">
                            <MessageSquare size={24} /> Review FAQs
                        </a>
                        <a href="./team" className="utility-link">
                            <User size={24} /> Meet Our Team
                        </a>
                    </div>
                </section>

            </div>
            
            {/* FOOTER - Clean and Functional (Consistent with index.tsx) */}
            <footer className="footer-new">
                <div className="footer-content">
                    <div className="footer-links-group">
                        <a className="footer-link" href="./company">Company</a>
                        <a className="footer-link" href="./partners">Partners</a>
                        <a className="footer-link" href="./privacy-policy">Privacy</a>
                        <a className="footer-link" href="./terms-of-service">Terms</a>
                        <a className="footer-link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank" rel="noopener noreferrer">DMCA.com</a>
                    </div>
                    
                 <div className="social-icons-group">
                        <a className="social-icon-link" href="https://www.facebook.com/buildandrun.net/" target="_blank" rel="noopener noreferrer">
                        </a>
                        <a className="social-icon-link" href="https://www.twitter.com/brstore_us" target="_blank" rel="noopener noreferrer">
                        </a>
                        <a className="social-icon-link" href="https://www.instagram.com/bdrstoreus/" target="_blank" rel="noopener noreferrer">
                        </a>
                        <a className="social-icon-link" href="https://www.youtube.com/@buildandrun." target="_blank" rel="noopener noreferrer">
                        </a>
                    </div>
                </div>
                <p className="copyright">
                    &copy;{currentYear} B&R | All Rights Reserved. Crafted with <Heart size={16} className="heart-icon"/> 
                </p>
            </footer>
        </div>
    );
}