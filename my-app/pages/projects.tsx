import Image from "next/image";
import {
    Home,
    Code,
    Zap, // Todos
    Lock, // Password Generator
    GitBranch, 
    Activity, // Admin Panel
    Image as ImageIcon, // Images Project
    ShoppingBag, // Shop Project
    CreditCard, // Debit Card Project
    FileText, // Blog Project
    Wrench, // Tweak Apps / Socials Placeholder
    BookOpen, // Old Version Project
    MessageSquare,
    Shield,
    Globe, // Logo/Favicon, Placeholder for social icons
    AlertTriangle, // Media Panel (Incomplete/Warning)
    // Twitter, // Social Icons
    // Instagram,
    // Youtube,
    // Facebook,
    Heart,
} from "lucide-react";

// Assuming this is your main logo file
import BRLogo from "../public/img/logo/BRlogo.png"; 
import BRLogoOfficial from "../public/img/logo/logo-official.png"; 

// --- PROJECT DATA MAPPED TO ICONS AND STATUS (ALL 11 PROJECTS INCLUDED) ---
// Statuses: 🟢 Done, 🟠 Incomplete, 🟡 InProgress, 🔴 Critical
const PROJECTS = [
    // Project #11
    { title: "Todos", date: "May 2023", status: "🟢", desc: "Create a list of your to-dos", link: "https://todos.buildandrun.net", icon: Zap },
    // Project #10
    { title: "Images", date: "April 2023", status: "🟢", desc: "All images from the year 2011 to 2023", link: "https://images.buildandrun.net", icon: ImageIcon },
    // Project #9
    { title: "Shop", date: "March 2023", status: "🟢", desc: "All your personal items for cheap", link: "https://shop.buildandrun.net", icon: ShoppingBag },
    // Project #8
    { title: "Debit Card", date: "March 2023", status: "🟢", desc: "Use this tool for all your free trials", link: "./projects/debit-card", icon: CreditCard },
    // Project #7
    { title: "Blog", date: "December 2022", status: "🟢", desc: "New blog experience for you and your friends", link: "https://blog.buildandrun.net", icon: FileText },
    // Project #6
    { title: "Admin Panel", date: "November 2022", status: "🟢", desc: "Manage password, email, site, and subscription", link: "https://admin.buildandrun.net/login", icon: Activity },
    // Project #5
    { title: "Logo and Favicon", date: "October 2021", status: "🟢", desc: "Simple logo and favicon generator", link: "http://brstore.ddns.net/tech/projects/simple-logo/", icon: Globe },
    // Project #4
    { title: "Password Generator", date: "April 2021", status: "🟢", desc: "Generate password with up to 32 characters", link: "http://brstore.ddns.net/tech/projects/password-generator/", icon: Lock },
    // Project #3
    { title: "Media Panel", date: "December 2020", status: "🟠", desc: "Your marketing tool for all your socials", link: "https://media.buildandrun.net", icon: AlertTriangle },
    // Project #2
    { title: "Tweak Apps", date: "November 2020", status: "🟢", desc: "Applications that can simplify your online life", link: "./tweak-apps", icon: Wrench },
    // Project #1
    { title: "Build and Run v1.0.1", date: "November 2020", status: "🟢", desc: "The initial release of Build and Run's Web App", link: "https://github.com/BuildandRun/BuildandRun-v1.0.1#readme", icon: BookOpen },
];

// --- Status to Color Mapping for Legend (remains the same) ---
const STATUS_COLORS: { [key: string]: string } = {
    "🟢": "green",
    "🟠": "orange",
    "🔴": "red",
    "🟡": "yellow",
};

export default function ProjectsPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="landing-wrapper" data-theme="light">
            <div className="landing-container">
                
                {/* 1. HERO & INTRO SECTION */}
                <header className="hero-section projects-header">
                    <div className="header-logo-container">
                         {/* Using the official logo for prominence on this page */}
                        <Image src={BRLogoOfficial} alt="Build & Run Logo" width={300} height={120} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} /> 
                    </div>
                    
                    <h1 className="hero-title">
                        Introducing The Future: <span className="text-accent-blue">Projects</span> 🚀
                    </h1>
                    
                    <p className="hero-subtitle">
                        Discover and explore the innovative projects created by the **Build and Run** team. We are constantly building technology with no limits.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="/" className="cta-button primary-cta">
                            <Home size={20} />  Back to Homepage
                        </a>
                        <a href="https://github.com/Buildandrun" className="cta-button secondary-cta" target="_blank" rel="noopener noreferrer">
                            <GitBranch size={20} /> View on GitHub
                        </a>
                    </div>
                </header>

                {/* 2. LEGEND TERMINAL (Cleaned Up) */}
                <section className="terminal-section">
                    <h2 className="section-title">Project Status Key</h2>
                    <div className="terminal-container">
                        <div className="terminal-toolbar">
                            <div className="terminal-buttons">
                                <button className="terminal-btn terminal-btn-red"></button>
                                <button className="terminal-btn terminal-btn-yellow"></button>
                                <button className="terminal-btn terminal-btn-green"></button>
                            </div>
                            <p className="terminal-title">Build and Run ~ Status Terminal</p>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-prompt">
                                <span className="terminal-user">support@buildandrun.net:</span>
                                <span className="terminal-location">~</span>
                                <span className="terminal-bling">$ git status -br legend: </span>
                                <span className="terminal-key-item"><span className="status-dot green"></span> Done 🟢</span>
                                <span className="terminal-key-item"><span className="status-dot yellow"></span> In Progress 🟡</span>
                                <span className="terminal-key-item"><span className="status-dot orange"></span> Incomplete 🟠</span>
                                <span className="terminal-key-item"><span className="status-dot red"></span> Critical 🔴</span>
                                <span className="terminal-cursor"></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PROJECTS GRID */}
                <section className="projects-grid-section">
                    <h2 className="section-title">Our Innovation Portfolio ({PROJECTS.length})</h2>
                    <div className="projects-grid">
                        {PROJECTS.map((project, index) => {
                            const IconComponent = project.icon;
                            const statusColor = STATUS_COLORS[project.status];
                            return (
                                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                                    <div className={`project-icon-box project-icon-box-${statusColor}`}>
                                        <IconComponent size={32} />
                                    </div>
                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.desc}</p>
                                    </div>
                                    <div className="project-status">
                                        <span className={`project-status-text status-${statusColor}`}>{project.date} {project.status}</span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </section>
                
                {/* 4. INFO & FAQ COMMANDS (Using modern utility links) */}
                <section className="info-commands-section">
                    <h2 className="section-title">Essential Info & Commands</h2>
                    <div className="info-commands-grid">
                        {/* FAQ Link Button */}
                        <a href="/faq" className="utility-link">
                            <MessageSquare size={24} /> FAQs & Support
                        </a>
                        
                        {/* Privacy Policy Link Button */}
                        <a href="/privacy-policy" className="utility-link">
                            <Shield size={24} /> Privacy Policy 🔒
                        </a>

                        {/* Terms of Service Link Button */}
                        <a href="/terms-of-service" className="utility-link">
                            <FileText size={24} /> Terms Of Service 📜
                        </a>
                    </div>
                </section>
                
            </div>
            
            {/* FOOTER - Reusing the modern footer for consistency */}
            <footer className="footer-new">
                 <div className="footer-content">
                    <div className="footer-links-group">
                        <a className="footer-link" href="./company">Company</a>
                        <a className="footer-link" href="./partners">Partners</a>
                        <a className="footer-link" href="./privacy-policy">Privacy</a>
                        <a className="footer-link" href="./terms-of-service">Terms</a>
                        <a className="footer-link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank" rel="noopener noreferrer">DMCA.com</a>
                    </div>
                    
                    {/* Social icons updated to use the standard Lucide icons */}
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