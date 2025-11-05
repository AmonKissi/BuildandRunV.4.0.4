import Image from "next/image"; // Keep Image for the logo
import {
    Home,
    Users,
    MessageSquare,
    FileText,
    Heart,
    Briefcase,
    CheckCircle, 
    // Facebook, 
    // Twitter,  
    // Instagram, 
    // Youtube,  
} from "lucide-react";

// Assuming BRLogoOfficial is imported from local source if not in public folder
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 


// --- TEAM MEMBER DATA STRUCTURE (FINAL WITH CORRECT PUBLIC PATHS) ---
const TEAM_MEMBERS = [
    {
        name: "Amon",
        role: "Web Developer\nSoftware Engineer", 
        image: "/team-old/img/team/amon.jpg", // Kept the path in case you want it back later
        color: "blue-light", 
    },
    {
        name: "Chirag",
        role: "Marketing",
        image: "/team-old/img/team/chirag.jpg",
        color: "pink-light", 
    },
    {
        name: "Kelvin",
        role: "Application Developer\nSoftware Engineer",
        image: "/team-old/img/team/kelvin.jpg",
        color: "yellow-light", 
    },
    {
        name: "André",
        role: "Graphic Designer",
        image: "/team-old/img/team/andre.jpg", 
        color: "gray-light", 
    },
    {
        name: "Lee",
        role: "Scrum Master\nSoftware Engineer",
        image: "/team-old/img/team/lee.jpg",
        color: "blue-soft", 
    },
];

export default function TeamPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION */}
                <header className="hero-section team-header">
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
                        Introducing The Future: <span className="text-accent-blue">Team</span> 👨🏽‍💻
                    </h1>
                    
                    <p className="hero-subtitle">
                        Discover and meet the dedicated people who power **Build and Run**.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/" className="cta-button primary-cta">
                            <Home size={20} /> Back to Homepage
                        </a>
                        <a href="/careers" className="cta-button secondary-cta" rel="noopener noreferrer">
                            <Briefcase size={20} /> Join Our Team
                        </a>
                    </div>
                </header>

                {/* 2. TEAM MEMBERS GRID (IMAGE REMOVED) */}
                <section className="team-grid-section">
                    <h2 className="section-title">Our Dedicated Experts ({TEAM_MEMBERS.length})</h2>
                    <div className="team-grid-reference">
                        {TEAM_MEMBERS.map((member, index) => (
                            <div 
                                key={index} 
                                className={`team-card-reference card-bg-${member.color}`}
                                // Added style override to reduce card height since the image is gone
                                style={{ minHeight: '150px' }} 
                            >
                                <div className="team-info-reference">
                                    <h3 className="team-name-reference">
                                        {member.name} 
                                        <CheckCircle size={16} className="checkmark-icon" />
                                    </h3>
                                    {/* Using map to split roles by newline for distinct lines */}
                                    {member.role.split('\n').map((line, i) => (
                                        <p key={i} className="team-role-line">{line}</p>
                                    ))}
                                </div>
                                {/* REMOVED: Image component and container */}
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* 3. INFO & COMMANDS SECTION (Reused for consistency) */}
                <section className="info-commands-section">
                    <h2 className="section-title">Build and Run Resources</h2>
                    <div className="info-commands-grid">
                        <a href="/faq" className="utility-link">
                            <MessageSquare size={24} /> FAQs & Support
                        </a>
                        <a href="/company" className="utility-link">
                            <Users size={24} /> About Our Company
                        </a>
                        <a href="/terms-of-service" className="utility-link">
                            <FileText size={24} /> Terms Of Service 📜
                        </a>
                    </div>
                </section>
                
            </div>
            
            {/* FOOTER - Standardized Footer (Using Lucide Icons) */}
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