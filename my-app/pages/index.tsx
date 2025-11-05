import Image from 'next/image';
import {
    Zap, // Speed
    Lock, // Security
    Scaling, // Scalability
    Settings, // Admin Panel
    Globe, // Build Site
    Users, // Social
    // Twitter,
    // Instagram,
    // Youtube,
    // Facebook,
    Code,
    MessageSquare,
    DollarSign,
    Heart,
    Shield, // Privacy Policy
    FileText, // Terms
    Handshake, // DMCA
    Info, // About B&R
    User, // Team
} from 'lucide-react';

// Assuming this is your main logo file
import BRLogoMain from '../public/img/logo/logo-official.png'; 

// --- DUMMY DATA FOR STRUCTURE ---
const FEATURES = [
    { icon: Zap, title: "Nano-Second Load Times", description: "Our global CDN and SSD infrastructure deliver unmatched speed for peak performance." },
    { icon: Lock, title: "Zero-Trust Security", description: "DDoS protection, automated backups, and SSL certificates included on all plans." },
    { icon: Scaling, title: "Elastic Scaling", description: "Instantly adjust resources to handle traffic spikes without downtime or manual intervention." },
];

/* // PRICING DATA REMOVED as per user request (it is on ./plan)
const PRICING_PLANS = [
    // ... (pricing data removed)
];
*/

// --- COMPONENT STRUCTURE ---
export default function HostingLandingPage() {
    const currentYear = new Date().getFullYear();

    return (
        // data-theme="light" is already here for explicit light mode lock
        <div className="landing-wrapper" data-theme="light"> 
            <div className="landing-container">
                
                {/* 1. HERO SECTION */}
                <header className="hero-section">
                    <div className="header-logo-container">
                        <Image src={BRLogoMain} alt="Build & Run Logo" width={200} height={100} layout="fixed" />
                    </div>
                    <br></br>
                    
                    <h1 className="hero-title">
                        Decentralized Hosting <span className="text-accent-blue">Built for Speed</span>.
                    </h1>
                    
                    <p className="hero-subtitle">
                        Launch the future of your web projects instantly. High-performance, secure, and infinitely scalable hosting powered by Build & Run.
                    </p>
                    
                    <div className="hero-cta-group">
                        {/* Primary CTA now directs to the dedicated plans page */}
                        <a href="./plan" className="cta-button primary-cta">
                            View Hosting Plans 🚀
                        </a>
                        <a href="https://medium.com/@2buildandrun/build-and-run-v-4-0-4-8300c9759800" className="cta-button secondary-cta" target="_blank" rel="noopener noreferrer">
                            Read Developer Blog <Code size={20} />
                        </a>
                    </div>
                </header>

                {/* 2. CORE FEATURES SECTION */}
                <section className="features-section">
                    <h2 className="section-title">Why Choose B&R Hosting?</h2>
                    <div className="feature-grid">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <feature.icon size={40} className="feature-icon" />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING SECTION REMOVED --- 
                
                // <section className="pricing-section">...</section>

                */}
                
                {/* 3. UTILITY LINKS SECTION (All Old Links Integrated Here) */}
                <section className="utility-links-section">
                    <h2 className="section-title">Portal & Information</h2>
                    <div className="utility-links-grid">
                        {/* Key Portals */}
                        <a href="https://admin.buildandrun.net/login" className="utility-link" target="_blank" rel="noopener noreferrer">
                            <Settings size={24} /> Admin Control Panel
                        </a>
                        <a href="./plan" className="utility-link">
                            <Globe size={24} /> Build New Site
                        </a>
                        <a href="https://smmfollowers.com/" className="utility-link" target="_blank" rel="noopener noreferrer">
                            <Users size={24} /> Social Toolkit
                        </a>
                        
                        {/* Navigational & Informational Links */}
                    
                        <a href="./team" className="utility-link">
                            <User size={24} /> Our Team
                        </a>
                        <a href="./projects" className="utility-link">
                            <Code size={24} /> Projects
                        </a>

                        
                        {/* FAQ Link (Can lead to a separate section or page) */}
                        <a href="./faq" className="utility-link">
                            <MessageSquare size={24} /> FAQs
                        </a>
                    </div>
                </section>

            </div>
            
            {/* FOOTER - Clean and Functional */}
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