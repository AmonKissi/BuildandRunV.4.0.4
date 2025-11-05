import Image from "next/image";
import {
    Home,
    Mail,
    Heart,
    Briefcase,
    Globe,      // World icon for remote work
    DollarSign, // Money icon for competitive pay
    Clock,      // Clock icon for flexible hours
    Coffee,     // Coffee icon for team culture/perks
    Users,      // Icon for company link
    FileText,
    // Facebook,
    // Instagram,
    // Twitter,
    // Youtube,   // Icon for TOS
} from "lucide-react";


// Assuming BRLogoOfficial is imported from local source 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- CAREERS PAGE CONTENT DATA ---
const BENEFITS = [
    {
        title: "Work from Anywhere",
        icon: Globe,
        description: "We are a fully remote team operating across multiple time zones. Design your workday around your life.",
    },
    {
        title: "Competitive Compensation",
        icon: DollarSign,
        description: "Receive industry-leading salary and regular performance reviews to ensure you are compensated fairly.",
    },
    {
        title: "Flexible Scheduling",
        icon: Clock,
        description: "We prioritize output over hours. Manage your schedule to be productive when you're at your best.",
    },
    {
        title: "Innovative Culture",
        icon: Coffee,
        description: "Join a fast-paced environment that encourages experimentation, learning, and using the latest technologies.",
    },
];

export default function CareersPage() {
    const currentYear = new Date().getFullYear();
    const applicationEmail = "2buildandrun@gmail.com";

    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION (Careers Focus) */}
                <header className="hero-section careers-header">
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
                        Build Your Future with <span className="text-accent-blue">Us.</span> 💡
                    </h1>
                    
                    <p className="hero-subtitle">
                        Ready to contribute your expertise to cutting-edge projects? We are looking for passionate individuals to join the **Build and Run** team.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href={`mailto:${applicationEmail}`} className="cta-button primary-cta">
                            <Mail size={20} /> Apply Now via Email
                        </a>
                        <a href="/team" className="cta-button secondary-cta" rel="noopener noreferrer">
                            <Users size={20} /> Meet the Team
                        </a>
                    </div>
                </header>

                {/* 2. OUR BENEFITS SECTION */}
                <section className="benefits-section">
                    <h2 className="section-title">Why Join Build and Run?</h2>
                    <p className="section-subtitle">A great workplace is built on trust, flexibility, and a commitment to growth.</p>
                    <div className="benefits-grid">
                        {BENEFITS.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-icon-wrapper">
                                        <IconComponent size={32} className="benefit-icon" />
                                    </div>
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                
                {/* 3. APPLICATION INSTRUCTIONS & CTA */}
                <section className="application-cta-section">
                    <h2 className="section-title">How to Apply</h2>
                    <div className="application-box">
                        <p className="application-instruction">
                            To send your job request or application, please email us directly with your resume, portfolio link, and the position you are interested in.
                        </p>
                        <a 
                            href={`mailto:${applicationEmail}?subject=Job Application / Inquiry`} 
                            className="email-cta-button"
                        >
                            <Mail size={24} /> Email Your Request to: **{applicationEmail}**
                        </a>
                        <p className="application-note">
                            We review all applications and will respond to qualified candidates within 5 business days.
                        </p>
                    </div>
                </section>

                {/* 4. INFO & COMMANDS SECTION (Reused for consistency) */}
                <section className="info-commands-section">
                    <h2 className="section-title">More Resources</h2>
                    <div className="info-commands-grid">
                        <a href="/faq" className="utility-link">
                            FAQs & Support
                        </a>
                        <a href="/company" className="utility-link">
                            About Our Company
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