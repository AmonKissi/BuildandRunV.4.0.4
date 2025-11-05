import Image from "next/image";
import {
    Home,
    Heart,
    FileText,    // Icon for legal documents
    UserCheck,   // Icon for user data/privacy
    // Facebook,
    // Twitter,
    // Instagram,
    // Youtube,
    // Slack,
} from "lucide-react";

// Assuming BRLogoOfficial is imported from local source 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- Placeholder Content for Privacy Policy ---
const POLICY_SECTIONS = [
    {
        title: "1. Information We Collect",
        content: `We collect information in two main ways: "Automatically Collected Information" and "Information You Voluntarily Provide." Automatically collected information may include details about your device, IP address, and how you use our services. Information you voluntarily provide includes data such as names, email addresses, and payment details when you purchase a service or contact us. This information is collected to provide and improve our services, communicate with you, and ensure security.`,
    },
    {
        title: "2. Use of Information",
        content: `We use the collected data for various legitimate business purposes, including to: provide, operate, and maintain our services; improve, personalize, and expand our services; understand and analyze how you use our services; develop new products, services, features, and functionality; communicate with you (either directly or through one of our partners) for customer service, to provide updates and other information relating to the service, and for marketing and promotional purposes.`,
    },
    {
        title: "3. Sharing Your Personal Information",
        content: `We do not share or sell your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. This may include sharing data with trusted third-party vendors (like hosting providers, payment processors, and analytics partners) who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.`,
    },
    {
        title: "4. Your Data Protection Rights",
        content: `Depending on your location, you may have rights under data protection law in relation to your personal data, including: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability. To exercise any of these rights, please contact us at the address provided below.`,
    },
    {
        title: "5. Changes to This Policy",
        content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.`,
    },
];

export default function PrivacyPolicyPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION (Legal Focus) */}
                <header className="hero-section legal-header">
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
                        Your <span className="text-accent-blue">Privacy</span> Matters.
                    </h1>
                    
                    <p className="hero-subtitle">
                        This policy outlines how Build and Run collects, uses, and protects your personal information.
                    </p>
                    <p className="legal-update-date">
                        Last updated: November 4, {currentYear}.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/terms-of-service" className="cta-button secondary-cta">
                            <FileText size={20} /> View Terms of Service
                        </a>
                        <a href="/" className="cta-button primary-cta">
                            <Home size={20} /> Back to Homepage
                        </a>
                    </div>
                </header>

                {/* 2. POLICY CONTENT SECTION */}
                <section className="legal-content-section">
                    <div className="legal-preamble">
                        <p>
                            Your privacy is important to us. It is our policy to respect your privacy and comply with any applicable law and regulation regarding the personal information we collect about you through this website, Build and Run.
                        </p>
                    </div>

                    <div className="policy-sections-container">
                        {POLICY_SECTIONS.map((section, index) => (
                            <div key={index} className="policy-section">
                                <h2 className="policy-title"><UserCheck size={20} className="policy-icon" /> {section.title}</h2>
                                <p className="policy-paragraph">{section.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="legal-contact-info">
                        <h3>Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <p>Email: <a href="mailto:support@buildandrun.net" className="contact-link">support@buildandrun.net</a></p>
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
                    
                    {/* <div className="social-icons-group">
                        <a className="social-icon-link" href="https://www.facebook.com/buildandrun.net/" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                        <a className="social-icon-link" href="https://www.twitter.com/brstore_us" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                        <a className="social-icon-link" href="https://www.instagram.com/bdrstoreus/" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                        <a className="social-icon-link" href="https://discord.gg/HVB2XNFtCQ" target="_blank" rel="noopener noreferrer"><Slack size={24} /></a>
                        <a className="social-icon-link" href="https://www.youtube.com/@buildandrun." target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
                    </div> */}
                </div>
                <p className="copyright">
                    &copy;{currentYear} B&R | All Rights Reserved. Crafted with <Heart size={16} className="heart-icon"/> 
                </p>
            </footer>
        </div>
    );
}