import React, { useState, useEffect } from 'react';
import {
    Home,
    DollarSign,
    AppWindow,
    Link as LinkIcon,
    CreditCard,
    Wrench,
    Info,
    Users,
    Briefcase,
    Code,
    MessageSquare,
    Shield,
    FileText,
    CheckCircle,
    Heart,
    Handshake,
    Unlock,
    Key,
    AlertTriangle
} from 'lucide-react';
import BRLogoMain from '../public/img/logo/logo-official.png'; 
import Image from 'next/image';


// NOTE: File system imports (like import BRLogoMain from '...') 
// and the Next.js <Image> component are not supported in this single file environment.
// We are using a standard <img> tag with a visual placeholder that meets the 200x100 requirement.


// --- Data for all pages ---
const PAGE_GROUPS = [
    {
        title: "Core Pages",
        links: [
            { name: "Homepage", href: "./", icon: Home, desc: "The main landing page for hosting." },
            { name: "Hosting Plans", href: "./plan", icon: DollarSign, desc: "The main page for all pricing plans." },
            { name: "Discounted Plan", href: "./ChooseDiscountPlan", icon: DollarSign, desc: "A special, single-offer discount page." },
            { name: "Tweak Apps", href: "./tweak-apps", icon: AppWindow, desc: "The full library of app recommendations." },
        ]
    },
    {
        title: "Utility & Project Pages",
        links: [
            { name: "Access Link Hub", href: "./access/link", icon: LinkIcon, desc: "Plesk, FTP, and database admin links." },
            { name: "Virtual Debit Card", href: "./projects/debit-card", icon: CreditCard, desc: "The virtual card tool for free trials." },
            { name: "Maintenance Page", href: "./maintenance/upgrade", icon: Wrench, desc: "A dismissible downtime notification." },
            { name: "Projects", href: "./projects", icon: Code, desc: "A gallery of company projects." },
        ]
    },
    {
        title: "Informational & Legal",
        links: [
            { name: "Company", href: "./company", icon: Info, desc: "The 'About B&R' page." },
            { name: "Partners", href: "./partners", icon: Handshake, desc: "List of B&R partners." },
            { name: "Team", href: "./team", icon: Users, desc: "The company team page." },
            { name: "Careers", href: "./careers", icon: Briefcase, desc: "Job openings and career info." },
            { name: "FAQ", href: "./faq", icon: MessageSquare, desc: "Frequently Asked Questions." },
            { name: "Privacy Policy", href: "./privacy-policy", icon: Shield, desc: "Legal privacy policy." },
            { name: "Terms of Service", href: "./terms-of-service", icon: FileText, desc: "Legal terms of service." },
        ]
    },
    {
        title: "Post-Purchase Flow",
        links: [
            { name: "Confirmation Page", href: "./payment/confirmation", icon: CheckCircle, desc: "The 'Transaction Complete' page after payment." },
        ]
    }
];

// --- Authentication Components ---

interface LoginFormProps {
    onLoginSuccess: (success: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    
    // The target password is 'lala'
    const SECRET_KEY = "lala"; 

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        if (password === SECRET_KEY) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('br_admin_auth', 'true');
            }
            onLoginSuccess(true);
        } else {
            setError(true);
            setPassword('');
        }
    };

    return (
        // Tailwind CSS classes used here for the authentication screen
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100">
                <div className="text-center">
                    <Key className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Admin Access Required
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please enter the creator password to view the glossary.
                    </p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter Password"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                            <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                            Incorrect password. Try the hint: **X9 CREATOR**
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                    >
                        <Unlock className="w-4 h-4 mr-2" />
                        Access Glossary
                    </button>
                </form>
            </div>
        </div>
    );
};


// --- Glossary Page Component (Rendered only on success) ---

const GlossaryContent = () => {
    const currentYear = new Date().getFullYear();

    return (
        // These classes now rely entirely on your external styles.css
        <div className="landing-wrapper" data-theme="light">
            
            <div className="landing-container">
                
                {/* 1. HERO SECTION */}
                <header className="hero-section">
                    <div className="header-logo-container">
                        {/* Updated Logo Implementation: Using a standard <img> tag 
                            since file imports and the Next.js <Image> component are not supported here.
                        */}
                        <Image src={BRLogoMain} alt="Build & Run Logo" width={200} height={100} layout="fixed" />
                   
                    </div>
                    
                    <h1 className="hero-title">
                        Admin Page <span className="text-accent-blue">Glossary</span>
                    </h1>
                    
                    <p className="hero-subtitle">
                        A quick-access repertoire of all pages built within the B&R project for easy navigation and review.
                    </p>
                </header>

                {/* 2. PAGE LINKS SECTIONS */}
                {PAGE_GROUPS.map((group) => (
                    <section key={group.title} className="utility-links-section">
                        {/* Uses .section-title from external CSS */}
                        <h2 className="section-title">{group.title}</h2>
                        
                        <div className="utility-links-grid">
                            {group.links.map((link) => {
                                const Icon = link.icon; 
                                return (
                                    <a key={link.name} href={link.href} className="utility-link">
                                        <Icon size={24} /> 
                                        <div>
                                            <strong>{link.name}</strong>
                                            {/* Directly using the CSS variable defined in your styles.css */}
                                            <span style={{ color: 'var(--color-text-subtle)', marginLeft: '8px' }}>
                                                - {link.desc}
                                            </span>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                ))}

            </div>
            
            {/* FOOTER */}
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
                        {/* Social icons are commented out as per your index.tsx structure */}
                    </div>
                </div>
                <p className="copyright">
                    &copy;{currentYear} B&R | All Rights Reserved. Crafted with <Heart size={16} className="heart-icon"/> 
                </p>
            </footer>
        </div>
    );
};


// --- MAIN EXPORT COMPONENT WITH AUTHENTICATION LOGIC ---

export default function GlossaryPage() {
    // State to track authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // State to track if the client-side localStorage check has completed
    const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

    useEffect(() => {
        // This effect only runs on the client after mounting
        if (typeof window !== 'undefined') {
            const authStatus = localStorage.getItem('br_admin_auth') === 'true';
            setIsAuthenticated(authStatus);
        }
        // Mark the check as complete
        setHasCheckedAuth(true);
    }, []); // Empty dependency array ensures it only runs once on mount

    // 1. If we haven't checked localStorage yet, render a consistent loading state
    if (!hasCheckedAuth) {
        // Using Tailwind classes for a basic centered loading message
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <p className="text-lg font-medium text-gray-700">Initializing...</p>
            </div>
        );
    }

    // 2. If checked and not authenticated, show the login form
    if (!isAuthenticated) {
        return <LoginForm onLoginSuccess={setIsAuthenticated} />;
    }

    // 3. If checked and authenticated, show the glossary content
    return <GlossaryContent />;
}