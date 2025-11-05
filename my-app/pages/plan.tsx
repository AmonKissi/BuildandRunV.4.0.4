import Image from "next/image";
import {
    Home,
    Heart,
    // Facebook,
    // Twitter,
    // Instagram,
    // Youtube,
    Globe,      // Domain
    Database,   // MySQL
    ShieldCheck,// SSL
    Phone,      // Support
    Star,       // Premium
    FileTerminal, // FTP
    Mail,       // Emails
    CheckCheck, // Everything in
    Server,     // VPS
    AppWindow,  // App Dev
    Building,   // Enterprise
    LayoutGrid, // Templates
    Monitor,    // UI8 Templates
} from "lucide-react";

// Use the official logo
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- Feature data with Lucide Icons ---
const planFeatures = {
  regular: [
    { text: 'Domain & Hosting', icon: Globe },
    { text: 'MySQL Database', icon: Database },
    { text: 'SSL Certificate (Basic)', icon: ShieldCheck },
    { text: 'Priority Support', icon: Phone },
  ],
  premium: [
    { text: 'Domain & Hosting (Premium)', icon: Star },
    { text: 'MySQL Database', icon: Database },
    { text: 'SSL Certificate (Wildcard)', icon: ShieldCheck },
    { text: 'FTP Access', icon: FileTerminal },
    { text: 'Unlimited Emails', icon: Mail },
    { text: '24/7 User Support', icon: Phone },
  ],
  unlimited: [
    { text: 'Everything in Premium', icon: CheckCheck },
    { text: 'Dedicated VPS Server', icon: Server },
    { text: 'Application Development', icon: AppWindow },
    { text: 'Full Enterprise Access', icon: Building },
  ],
};

// --- Array of all plans for mapping ---
const ALL_PLANS = [
    {
        name: "Regular",
        oneTimePrice: "$1,000",
        monthlyPrice: "$12.99",
        description: "Perfect for launching your dream site and getting started.",
        features: planFeatures.regular,
        href: "https://buy.stripe.com/dR62aoaeAdvEbDi4gt",
        isRecommended: false,
    },
    {
        name: "Premium",
        oneTimePrice: "$2,000",
        monthlyPrice: "$34.99",
        description: "Ideal for businesses, creative portfolios, and growing traffic.",
        features: planFeatures.premium,
        href: "https://buy.stripe.com/8wMdT6cmI77ggXCdR4",
        isRecommended: true, // Highlighted plan
    },
    {
        name: "Unlimited",
        oneTimePrice: "$3,000",
        monthlyPrice: "$59.99",
        description: "Full access for enterprises, custom platforms, and high-demand applications.",
        features: planFeatures.unlimited,
        href: "https://buy.stripe.com/aEU02g72o8bkePuaET",
        isRecommended: false,
    }
];

// --- Main Plan Page Component ---
export default function PlanPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="landing-wrapper" data-theme="light">
            
            {/* Simple Top Nav */}
            <nav className="plan-header-nav">
                <a href="/" className="plan-homepage-link">
                    <Home size={16} /> Back to Homepage
                </a>
            </nav>

            <div className="landing-container">
                
                {/* 1. HERO SECTION */}
                <header className="hero-section plan-header">
                    <div className="header-logo-container">
                        <Image 
                            src={BRLogoOfficial} 
                            alt="Build & Run Logo" 
                            width={200} 
                            height={100} 
                            style={{ width: '100%', height: 'auto', maxWidth: '200px' }} 
                            priority 
                        /> 
                    </div>
                    
                    <h1 className="hero-title">
                        Find the right <span className="text-accent-blue">hosting</span> plan for you
                    </h1>
                    
                    <p className="hero-subtitle">
                        Build a stunning website or app with full support every step of the way 🚀
                    </p>

                    {/* TEMPLATE BUTTONS CONTAINER */}
                    <div className="template-buttons-container">
                        <a href="https://typedream.com/templates" target="_blank" rel="noopener noreferrer" className="cta-button secondary-cta">
                            <LayoutGrid size={18} /> View Templates (Typedream)
                        </a>
                        <a href="https://ui8.net/" target="_blank" rel="noopener noreferrer" className="cta-button secondary-cta">
                            <Monitor size={18} /> View Templates (UI8)
                        </a>
                    </div>
                </header>

                {/* 2. PRICING GRID SECTION */}
                <section className="pricing-grid-section">
                    <div className="pricing-grid-v2">
                        {ALL_PLANS.map((plan, index) => {
                            const isRecommended = plan.isRecommended;
                            return (
                                <div key={index} className={`plan-card-v2 ${isRecommended ? 'plan-card-recommended' : ''}`}>
                                    {isRecommended && (
                                        <div className="plan-badge-recommended">Most Popular</div>
                                    )}
                                    
                                    <h3 className="plan-title-v2">{plan.name}</h3>
                                    <p className="plan-description-v2">{plan.description}</p>
                                    
                                    <div className="plan-price-group">
                                        <div className="plan-price-main">
                                            {plan.monthlyPrice}
                                            <span className="plan-price-suffix">/mo</span>
                                        </div>
                                        <p className="plan-price-onetime">
                                            Plus {plan.oneTimePrice} one-time setup
                                        </p>
                                    </div>

                                    <a href={plan.href} className={`cta-button ${isRecommended ? 'primary-cta' : 'secondary-cta'}`}>
                                        Choose Plan
                                    </a>

                                    <ul className="plan-features-list-v2">
                                        {plan.features.map((feature, i) => {
                                            const Icon = feature.icon;
                                            return (
                                                <li key={i}>
                                                    <Icon size={18} className="plan-feature-icon" /> {feature.text}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>
                
            </div>
            
            {/* FOOTER - Standardized Footer */}
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
                        {/* <Facebook size={24} /> */}
                        </a>
                        <a className="social-icon-link" href="https://www.twitter.com/brstore_us" target="_blank" rel="noopener noreferrer">
                        {/* <Twitter size={24} /> */}
                        </a>
                        <a className="social-icon-link" href="https://www.instagram.com/bdrstoreus/" target="_blank" rel="noopener noreferrer">
                        {/* <Instagram size={24} /> */}
                        </a>
                        <a className="social-icon-link" href="https://www.youtube.com/@buildandrun." target="_blank" rel="noopener noreferrer">
                        {/* <Youtube size={24} /> */}
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