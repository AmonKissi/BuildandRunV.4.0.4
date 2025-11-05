import Image from "next/image";
import {
    Home,
    Heart,
    Briefcase,
    Mail,
    Users,
    FileText,
    // Facebook,
    // Twitter,
    // Instagram,
    // Youtube,
    Slack, // Using Slack as a stand-in for Discord, or you can import a specific Discord icon if available
    Github,
    Link, // Generic link for Crunchbase, AngelList, etc.
    Send, // Using Send for Donate button link
    CheckCircle,
} from "lucide-react";

// Assuming BRLogoOfficial is imported from local source 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// The small logo/favicon used in the old header
import HDBRlogo from '../public/img/favicon/fav128.png'; 

export default function CompanyPage() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION */}
                <header className="hero-section company-header">
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
                        About <span className="text-accent-blue">Build and Run</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        Our mission is to empower clients to build and run their online presence with ease and expertise.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/careers" className="cta-button primary-cta">
                            <Briefcase size={20} /> Join Our Team
                        </a>
                        <a href="/" className="cta-button secondary-cta">
                            <Home size={20} /> Back to Homepage
                        </a>
                    </div>
                </header>

                {/* 2. MAIN COMPANY TEXT */}
                <section className="company-text-section">
                    <div className="company-text-content">
                        {/* The company description paragraphs are preserved here */}
                        <p>
                            <strong>Build and Run</strong> is a technology company that provides a
                            diverse range of services to help clients build and run their online
                            presence with ease. Our company specializes in website and application
                            development, hosting, design and art, social media marketing, news,
                            and other technical support. With such a wide range of services on
                            offer, <strong>Build and Run</strong> is a one-stop shop for all your
                            technology needs.
                        </p>
                        <p>
                            Whether you are looking to create a new website from scratch or
                            improve your existing online presence, <strong>Build and Run</strong>{' '}
                            has the expertise and resources to help you succeed. Our company's
                            team of experienced professionals takes a comprehensive approach to
                            each project, working with clients to understand their unique needs
                            and creating customized solutions that meet those needs effectively.
                        </p>
                        <p>
                            <strong>Build and Run</strong> understands that every client is
                            different and requires tailored solutions to succeed online. That's
                            why Our company places great emphasis on customer satisfaction, taking
                            the time to understand each client's needs and goals, and working
                            tirelessly to exceed their expectations. Whether you're a small
                            business owner or a large corporation, <strong>Build and Run</strong>{' '}
                            has the resources and expertise to help you achieve your online goals.
                        </p>
                        <p>
                            Our company website and application development services are among its
                            most popular offerings. The <strong>Build and Run</strong> team uses
                            the latest tools and technologies to create fast, responsive, and
                            visually appealing websites and applications. Our company's design and
                            art services are also popular, as clients appreciate the team's
                            ability to create eye-catching and effective designs that resonate
                            with their target audience.
                        </p>
                        <p>
                            In addition to its web development and design services,{' '}
                            <strong>Build and Run</strong> also offers social media marketing,
                            news, and other technical support. Our company's social media
                            marketing services help clients to expand their online presence,
                            connect with their target audience, and increase their reach. Our
                            company's news services keep clients informed about the latest
                            industry trends and developments, ensuring that they are always
                            up-to-date and ready to take advantage of new opportunities.
                        </p>
                        <p>
                            In summary, <strong>Build and Run</strong> is a technology company
                            that offers a comprehensive range of services to help clients build
                            and run their online presence with ease. With its commitment to
                            customer satisfaction, attention to detail, and expertise in web
                            development, design, social media marketing, and more,{' '}
                            <strong>Build and Run</strong> is the perfect partner for anyone
                            looking to succeed online.
                        </p>
                    </div>

                    <div className="company-utility-links">
                        <a href="https://donate.stripe.com/eVadTF89Uacpa8ofZn" target="_blank" rel="noopener noreferrer" className="utility-button donate-button">
                            <Send size={24} /> Donate to B&R
                        </a>

                        <div className="social-icons-extra-group">
                            <a href="https://www.crunchbase.com/organization/brstoreus" target="_blank" rel="noopener noreferrer" className="social-icon-extra">
                                <Link size={24} /> Crunchbase
                            </a>
                            <a href="https://stackshare.io/build-and-run/build-and-run" target="_blank" rel="noopener noreferrer" className="social-icon-extra">
                                <Link size={24} /> Stackshare
                            </a>
                            <a href="https://angel.co/company/bandr" target="_blank" rel="noopener noreferrer" className="social-icon-extra">
                                <Link size={24} /> AngelList
                            </a>
                            <a href="https://github.com/BuildandRun" target="_blank" rel="noopener noreferrer" className="social-icon-extra">
                                <Github size={24} /> GitHub
                            </a>
                        </div>
                        
                        <a 
                            href="https://www.producthunt.com/posts/build-and-run?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-build&#0045;and&#0045;run"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="product-hunt-badge"
                        >
                             {/* Product Hunt badge is kept as a simple image due to required external asset source */}
                            <img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385584&theme=dark"
                                alt="Build and Run | Product Hunt"
                                width="150"
                                height="54"
                            />
                        </a>
                        
                        {/* Instatus Status Badge */}
                         <iframe
                            src="https://build-and-run.instatus.com/embed-status/0c3fb4fd/light-sm"
                            width="230"
                            height="61"
                            frameBorder="0"
                            scrolling="no"
                            title="Build and Run System Status"
                            className="instatus-badge"
                        ></iframe>
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
                         <a className="footer-link" href="https://buildandrun.awsapps.com/mail " target="_blank" rel="noopener noreferrer">WorkMail</a>
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