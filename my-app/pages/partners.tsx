import Image from "next/image";
import {
    Home,
    Heart,
    // Facebook,
    // Twitter,
    // Instagram,
    // Youtube,
    // Slack,
    Handshake, 
    ExternalLink, 
} from "lucide-react";

// Assuming BRLogoOfficial is imported from local source 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- Partner Data (FINAL) ---
const PARTNERS = [
    {
        name: "SMM Followers",
        category: "Digital Marketing",
        tagline: "Best SMM Followers service for boosting social presence.",
        logoPlaceholder: "https://placehold.co/120x120/4ade80/000000?text=SMM", 
        href: "https://smmfollowers.com/",
    },
    {
        name: "REA",
        category: "Real Estate (Ivory Coast)",
        tagline: "The premier real estate app for property listings in Ivory Coast.",
        logoPlaceholder: "https://placehold.co/120x120/f4a261/ffffff?text=REA", 
        href: "https://rea.mobi",
    },
];

// --- Partner Card Component ---
interface PartnerCardProps {
    name: string;
    category: string;
    tagline: string;
    logoPlaceholder: string;
    href: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, category, tagline, logoPlaceholder, href }) => {
    return (
        <div className="partner-card-v2">
            <div className="partner-logo-wrapper">
                {/* Using a placeholder for the partner logo */}
                <Image 
                    src={logoPlaceholder} 
                    alt={`${name} Logo`} 
                    width={120} 
                    height={120} 
                    className="partner-logo-img"
                    unoptimized
                />
            </div>
            
            <h3 className="partner-name">{name}</h3>
            <p className="partner-category">{category}</p>
            <p className="partner-tagline">{tagline}</p>
            
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button secondary-cta partner-view-button"
            >
                <ExternalLink size={18} /> View Site
            </a>
        </div>
    );
};

// --- Main Partners Page Component ---
export default function PartnersPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION */}
                <header className="hero-section partners-header">
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
                        Our <span className="text-accent-blue">Partners</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Collaborating with industry leaders to deliver comprehensive solutions and expanded capabilities.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/company" className="cta-button primary-cta">
                            <Handshake size={20} /> Why Partner With Us?
                        </a>
                        <a href="/" className="cta-button secondary-cta">
                            <Home size={20} /> Back to Homepage
                        </a>
                    </div>
                </header>

                {/* 2. PARTNERSHIP GRID */}
                <section className="partners-grid-section">
                    <h2 className="section-title">Featured Collaborators</h2>
                    <p className="section-subtitle">Working together to build the future of digital presence and marketing.</p>
                    
                    <div className="partners-grid-v2">
                        {PARTNERS.map((partner, index) => (
                            <PartnerCard key={index} {...partner} />
                        ))}
                    </div>
                    
                </section>

                {/* 3. INFO & COMMANDS SECTION */}
                 <section className="info-commands-section">
                    <h2 className="section-title">Explore Our Ecosystem</h2>
                    <div className="info-commands-grid">
                        <a href="./plan" className="utility-link">
                            View Hosting Plans 🚀
                        </a>
                        <a href="/careers" className="utility-link">
                            Job Opportunities 💼
                        </a>
                        <a href="/terms-of-service" className="utility-link">
                            Terms Of Service 📜
                        </a>
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