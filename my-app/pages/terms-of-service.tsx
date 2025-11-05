import Image from "next/image";
import {
    Home,
    Heart,
    FileText,      // Icon for legal documents
    Handshake,     // Icon for agreement/terms
    // Facebook,
    // Twitter,
    // Instagram,
    // Youtube,
    // Slack,
} from "lucide-react";

// Assuming BRLogoOfficial is imported from local source 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- Placeholder Content for Terms of Service ---
const TERMS_SECTIONS = [
    {
        title: "1. Agreement to Terms",
        content: `By accessing or using the Build and Run website and services ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service. These terms constitute a legally binding agreement between you and Build and Run ("Company," "we," or "us").`,
    },
    {
        title: "2. User Conduct and Responsibilities",
        content: `You agree to use the Service only for lawful purposes. You are responsible for any content you post and for complying with all laws and regulations applicable to your use of the Service. Prohibited actions include: posting illegal content, unauthorized access to systems, distributing malware, or engaging in activities that disrupt the Service or violate other users' rights.`,
    },
    {
        title: "3. Intellectual Property Rights",
        content: `The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Build and Run and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Build and Run.`,
    },
    {
        title: "4. Termination",
        content: `We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.`,
    },
    {
        title: "5. Disclaimer of Warranties",
        content: `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.`,
    },
    {
        title: "6. Governing Law and Jurisdiction",
        content: `These Terms shall be governed and construed in accordance with the laws of [Insert Governing Jurisdiction, e.g., your business location], without regard to its conflict of law provisions. Any legal action or proceeding related to the Service shall be brought exclusively in the courts located in [Insert Jurisdiction City/State].`,
    },
];

export default function TermsOfServicePage() {
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
                        Terms of <span className="text-accent-blue">Service</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        These terms govern your use of the Build and Run platform and services. Please read them carefully.
                    </p>
                    <p className="legal-update-date">
                        Last updated: November 4, {currentYear}.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/privacy-policy" className="cta-button secondary-cta">
                            <FileText size={20} /> View Privacy Policy
                        </a>
                        <a href="/" className="cta-button primary-cta">
                            <Home size={20} /> Back to Homepage
                        </a>
                    </div>
                </header>

                {/* 2. POLICY CONTENT SECTION (Reuses styles from Privacy Policy) */}
                <section className="legal-content-section">
                    <div className="legal-preamble">
                        <p>
                            Welcome to Build and Run. The following terms and conditions regulate your access to and usage of the Service. By using the Service, you confirm your acceptance of these terms.
                        </p>
                    </div>

                    <div className="policy-sections-container">
                        {TERMS_SECTIONS.map((section, index) => (
                            <div key={index} className="policy-section">
                                <h2 className="policy-title"><Handshake size={20} className="policy-icon" /> {section.title}</h2>
                                <p className="policy-paragraph">{section.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="legal-contact-info">
                        <h3>Questions Regarding These Terms</h3>
                        <p>If you have any questions about these Terms of Service, please contact us:</p>
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
