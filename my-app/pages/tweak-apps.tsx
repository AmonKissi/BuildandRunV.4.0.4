import React from 'react';
import {
    Zap,          // Speed (Used in Hero CTA)
    Heart,        // Footer icon
    Code,         // Projects/Source
    ExternalLink, // Card Link Icon
} from 'lucide-react';
import Image from 'next/image';
import BRLogoMain from '../public/img/logo/logo-official.png'; 
// ----- TWEAK APP IMAGES ----- //

// ----- MOVIES ----- //
import kickass from "../public/img/tweak-apps/movies/kickass.png";
import fmovies from "../public/img/tweak-apps/movies/fmovies.png";
import popcorn from "../public/img/tweak-apps/movies/popcorn.png";
import putlocker from "../public/img/tweak-apps/movies/putlocker.png";
import showbox from "../public/img/tweak-apps/movies/showbox.png";
import putlockermovies from "../public/img/tweak-apps/movies/putlocker-movies-space.png";

// ----- AI & BOTS ----- //
import chatgpt from "../public/img/tweak-apps/ai-bots/chatgpt.png";
import writesonic from "../public/img/tweak-apps/ai-bots/writesonic.png";
import midjourney from "../public/img/tweak-apps/ai-bots/midjourney.png";
import removebg from "../public/img/tweak-apps/ai-bots/removebg.png";
import quillbot from "../public/img/tweak-apps/ai-bots/quillbot.png";
import imagecolorpicker from "../public/img/tweak-apps/ai-bots/imagecolorpicker.png";
import sitesucker from "../public/img/tweak-apps/ai-bots/sitesucker.png";
import splitter from "../public/img/tweak-apps/ai-bots/splitter.png";
import somiibo from "../public/img/tweak-apps/ai-bots/somiibo.png";
import donotpay from "../public/img/tweak-apps/ai-bots/donotpay-second.png";
import loom from "../public/img/tweak-apps/ai-bots/loom.png";
import soundbolt from "../public/img/tweak-apps/ai-bots/soundbolt.png";
import naturalreader from "../public/img/tweak-apps/ai-bots/naturalreader.png";
import cleverbot from "../public/img/tweak-apps/ai-bots/cleverbot.png";
import animaker from "../public/img/tweak-apps/ai-bots/animaker.png";

// ----- EDITORS ----- //
import inshot from "../public/img/tweak-apps/editors/inshot.png";
import lightricks from "../public/img/tweak-apps/editors/lightricks.png";
import noelshack from "../public/img/tweak-apps/editors/noelshack.png";
import photoshopfix from "../public/img/tweak-apps/editors/photoshopfix.png";
import removebged from "../public/img/tweak-apps/editors/removebged.png";
import iloveimg from "../public/img/tweak-apps/editors/iloveimg.png";

// ----- CRYPTOCURRENCIES ----- //
import algorand from "../public/img/tweak-apps/cryptocurrencies/algorand.png";
import binance from "../public/img/tweak-apps/cryptocurrencies/binance.png";
import bitcoin from "../public/img/tweak-apps/cryptocurrencies/bitcoin.png";
import cardano from "../public/img/tweak-apps/cryptocurrencies/cardano.png";
import ethereum from "../public/img/tweak-apps/cryptocurrencies/ethereum.png";
import internetcomputer from "../public/img/tweak-apps/cryptocurrencies/internet-computer.png";
import polkadot from "../public/img/tweak-apps/cryptocurrencies/polkadot.png";
import polygon from "../public/img/tweak-apps/cryptocurrencies/polygon.png";
import rally from "../public/img/tweak-apps/cryptocurrencies/rally.png";
import shibainu from "../public/img/tweak-apps/cryptocurrencies/shiba-inu.png";
import solana from "../public/img/tweak-apps/cryptocurrencies/solana.png";
import tether from "../public/img/tweak-apps/cryptocurrencies/tether.png";
import uniswap from "../public/img/tweak-apps/cryptocurrencies/uniswap.png";


// --- LOGO NOTE ---
// The following import is commented out because it requires access to your local file system
// and the Next.js environment to resolve the path. You should UNCOMMENT this when running LOCALLY.
// import BRLogoMain from '../public/img/logo/logo-official.png';

// --- DATA STRUCTURE: Tweak App Data ---
const getPlaceholderImage = (text: string) => 
    `https://placehold.co/40x40/0070f3/ffffff?text=${text.slice(0, 1)}`;

const TWEAK_DATA_BY_SECTION = [
    {
        title: "Movies 🎬",
        description: "Explore the most popular movie applications and software that grant you access to watch all the latest films and series at no cost.",
        apps: [
            { name: "Kickass Torrents", url: "https://kickass.sx/home/", rating: 3, image: kickass, content: "Download recent and new movies using torrent clients." },
            { name: "FMovies", url: "https://ww4.fmovies.co/24/", rating: 4, image: fmovies, content: "Watch movies online for free (No account needed)." },
            { name: "Popcorn Time", url: "https://github.com/popcorn-official/popcorn-desktop/releases", rating: 5, image: popcorn, content: "Stream movies in HD via P2P. Works on all devices." },
            { name: "Putlocker", url: "https://www2.putlockers.ws/", rating: 2, image: putlocker, content: "Online streaming of movies (varies in availability)." },
            { name: "Putlocker Movies Space", url: "https://putlocker-movies.space/", rating: 3, image: putlockermovies, content: "Alternative Putlocker movie streaming site." },
            { name: "Showbox", url: "https://bestforandroid.com/apk/showbox/", rating: 1, image: showbox, content: "Android-only movie streaming app." },
        ],
    },
    {
        title: "AI & Bots 🤖",
        description: "Discover cutting-edge AI tools for creativity, automation, productivity, and intelligent content generation.",
        apps: [
            { name: "ChatGPT", url: "https://openai.com/chatgpt", rating: 5, image: chatgpt, content: "Leading AI assistant for conversation, ideas, and writing." },
            { name: "Writesonic", url: "https://writesonic.com/", rating: 4, image: writesonic, content: "AI writer for blogs, ads, and marketing content." },
            { name: "Midjourney", url: "https://www.midjourney.com/", rating: 5, image: midjourney, content: "Create stunning AI-generated images." },
            { name: "Remove.bg", url: "https://www.remove.bg/", rating: 4, image: removebg, content: "Instant image background removal tool." },
            { name: "QuillBot", url: "https://quillbot.com/", rating: 4, image: quillbot, content: "Smart paraphrasing and rewriting assistant." },

            // ---- Missing apps now added ---- //
            { name: "Image Color Picker", url: "https://imagecolorpicker.com/", rating: 3, image: imagecolorpicker, content: "Extract color codes from any image." },
            { name: "SiteSucker", url: "https://ricks-apps.com/osx/sitesucker/", rating: 3, image: sitesucker, content: "Download entire websites for offline use." },
            { name: "Splitter", url: "https://splitter.ai/", rating: 4, image: splitter, content: "Separate vocals and beat from any song." },
            { name: "Somiibo", url: "https://somiibo.com/", rating: 3, image: somiibo, content: "Growth bot for social media and music platforms." },
            { name: "Donotpay", url: "https://donotpay.com/", rating: 3, image: donotpay, content: "The world's first AI legal assistant." },
            { name: "Loom", url: "https://www.loom.com/", rating: 4, image: loom, content: "Instant screen recording and video messaging tool." },
            { name: "Soundbolt", url: "https://soundbolt.ai/", rating: 3, image: soundbolt, content: "AI powered text to speech and audio tools." },
            { name: "NaturalReader", url: "https://www.naturalreaders.com/", rating: 4, image: naturalreader, content: "Converts text to lifelike speech." },
            { name: "Cleverbot", url: "https://www.cleverbot.com/", rating: 2, image: cleverbot, content: "Classic conversational AI chatbot." },
            { name: "Animaker", url: "https://www.animaker.com/", rating: 4, image: animaker, content: "Create animated videos quickly and easily." },
        ],
    },
    {
        title: "Editors 🎨",
        description: "Professional-grade tools for editing videos, photos, documents, and promotional content.",
        apps: [
            { name: "InShot", url: "https://inshot.com/", rating: 4, image: inshot, content: "Mobile video + image editing suite." },
            { name: "Lightricks", url: "https://www.lightricks.com/", rating: 5, image: lightricks, content: "Premium editing and design apps." },
            { name: "Noelshack", url: "https://noelshack.com/", rating: 3, image: noelshack, content: "Quick image storing and sharing tool." },
            { name: "Photoshop Fix", url: "https://adobe-photoshop-fix.en.softonic.com/", rating: 4, image: photoshopfix, content: "Mobile Photoshop retouching features." },
            { name: "Remove.bg Editor", url: "https://www.remove.bg/", rating: 4, image: removebged, content: "Advanced background removal + editing." },
            { name: "iLoveIMG", url: "https://www.iloveimg.com/", rating: 4, image: iloveimg, content: "Resize, compress, crop, convert images online." },
        ],
    },
    {
        title: "Cryptocurrencies 🪙",
        description: "Essential exchanges, tokens, and decentralized blockchain platforms.",
        apps: [
            { name: "Binance", url: "https://www.binance.com/", rating: 5, image: binance, content: "Largest crypto exchange globally." },
            { name: "Bitcoin", url: "https://bitcoin.org/", rating: 5, image: bitcoin, content: "First decentralized cryptocurrency." },
            { name: "Ethereum", url: "https://ethereum.org/en/", rating: 5, image: ethereum, content: "Smart contracts and decentralized apps." },
            { name: "Solana", url: "https://solana.com/", rating: 5, image: solana, content: "High-speed blockchain platform." },
            { name: "Polygon", url: "https://polygon.technology/", rating: 4, image: polygon, content: "Ethereum scaling solution." },
            { name: "Algorand", url: "https://www.algorand.com/", rating: 4, image: algorand, content: "Secure and scalable blockchain network." },
            
            // ---- Missing cryptos now added ---- //
            { name: "Cardano", url: "https://cardano.org/", rating: 4, image: cardano, content: "Research-driven blockchain platform." },
            { name: "Polkadot", url: "https://polkadot.network/", rating: 4, image: polkadot, content: "Cross-chain interoperability blockchain." },
            { name: "Internet Computer", url: "https://internetcomputer.org/", rating: 3, image: internetcomputer, content: "Decentralized cloud computing network." },
            { name: "Rally", url: "https://rally.io/", rating: 3, image: rally, content: "Creator-focused cryptocurrency ecosystem." },
            { name: "Shiba Inu", url: "https://shibatoken.com/", rating: 3, image: shibainu, content: "Community-driven meme token." },
            { name: "Tether (USDT)", url: "https://tether.to/", rating: 5, image: tether, content: "Most used stablecoin pegged to USD." },
            { name: "Uniswap", url: "https://uniswap.org/", rating: 4, image: uniswap, content: "Decentralized exchange protocol." },
        ],
    },
];


// --- CARD COMPONENT (Replicating the 'cardi' structure) ---
const TweakAppCard = ({ app }: { app: (typeof TWEAK_DATA_BY_SECTION[0]['apps'][0]) }) => {
    // Determine the color based on rating for a visual hint
    const ratingColor = app.rating >= 4 ? 'text-yellow-500' : app.rating >= 2 ? 'text-yellow-400' : 'text-gray-400';
    const stars = '⭐'.repeat(app.rating);

    return (
        <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            // Applying existing CSS classes: cardi, shadow, rounded-xl, etc.
            className="cardi p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:border-blue-500 transition duration-200 flex flex-col space-y-3 cursor-pointer"
        >
            <div className="app-row flex items-center space-x-3">
                <div className="tweak-image flex-shrink-0">
                    <Image 
  src={app.image}
  alt={app.name}
  width={40}
  height={40}
  className="rounded-lg object-cover border border-gray-100"
/>

                </div>
                <h3 className="cardi__title text-lg font-semibold text-gray-800 leading-tight flex-grow">
                    {app.name}
                </h3>
            </div>
            <div className="app-row">
                <p className="cardi__content text-sm text-gray-500">
                    {app.content}
                </p>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div className={`cardi__date font-medium ${ratingColor}`}>
                    {stars}
                </div>
                <div className="cardi__arrow text-blue-500">
                    <ExternalLink size={16} />
                </div>
            </div>
        </a>
    );
};


// --- MAIN COMPONENT ---
const TweakApps = () => {
    const currentYear = new Date().getFullYear();

    return (
        // Applying the light mode and base styling classes from styles.css
        <div className="landing-wrapper bg-white text-gray-800 font-sans min-h-screen" data-theme="light"> 
            <div className="landing-container">
                
                {/* 1. HERO SECTION (Matching index.tsx structure) */}
                <header className="hero-section text-center">
                    <div className="header-logo-container">
                        <div className="flex justify-center" style={{ width: 200, height: 100 }}>

                            <div className="flex items-center justify-center w-full h-full bg-blue-50 border border-blue-200 text-lg font-black text-blue-800 rounded-lg">
                                <Image src={BRLogoMain} alt="Build & Run Logo" width={200} height={100} layout="fixed" />
                            </div>
                            {/* --- END: YOUR NEXT.JS LOGO CODE --- */}
                        </div>
                    </div>

                    <h1 className="hero-title">
                        <span className="text-accent-blue">Introducing The Future</span>
                        <br/>
                        Tweak Apps 👾
                    </h1>
                    
                    <p className="hero-subtitle">
                        The Tweak Apps section is your one-stop-shop for finding applications and software that can simplify your online life, all curated by Build & Run.
                    </p>
                    
                    <div className="hero-cta-group">
                        <a href="./plan" className="cta-button primary-cta">
                            View All Plans 🚀
                        </a>
                        <a href="#tweak-list" className="cta-button secondary-cta">
                            Explore Tweaks Now <Zap size={20} className="ml-2" />
                        </a>
                    </div>
                </header>

                {/* --- TWEAK APPS MAIN CONTENT --- */}
                <section id="tweak-list" className="tweak-apps features-section">
                    
                    <h2 className="section-title">
                        Curated App Categories
                    </h2>

                    {TWEAK_DATA_BY_SECTION.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-20">
                            
                            {/* SECTION TITLE BLOCK: Centered */}
                            <div className="movies mb-6 text-center">
                                <div className="tweak-title mb-2">
                                    <h1 className="text-3xl font-bold">{section.title}</h1>
                                </div>
                                {/* Description with better font/spacing */}
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                    {section.description}
                                </p>
                            </div>

                            {/* TWEAK CARD SLIDER/GRID: Increased gap/spacing to space-x-6 */}
                            <div className="slider overflow-x-auto whitespace-nowrap py-4" id={`slider-spacer-${sectionIndex}`}>
                                <div className="slides flex space-x-6 pb-2">
                                    {section.apps.map((app, appIndex) => (
                                        <div 
                                            key={appIndex} 
                                            id={`${app.name.toLowerCase().replace(/\s/g, '-')}-${appIndex + 1}`}
                                            className="inline-block w-[320px] flex-shrink-0"
                                        >
                                            <TweakAppCard app={app} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                          {/* NUMBER SELECTOR: Updated to be bigger and bolder */}
                            <div className="number-selector flex justify-center items-center mt-6 text-gray-700">
                                {section.apps.map((app, appIndex) => (
                                    <React.Fragment key={appIndex}>
                                        <a href={`#${app.name.toLowerCase().replace(/\s/g, '-')}-${appIndex + 1}`} 
                                           className="text-2xl font-extrabold hover:text-blue-600 transition duration-150 inline-block px-3 py-1"
                                        >
                                            {/* Displaying actual index + 1 */}
                                            {appIndex + 1}
                                        </a>
                                        {appIndex < section.apps.length - 1 && <span className="text-xl font-light text-gray-400 mx-2">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                

            </div>
            
            {/* FOOTER - Social links removed */}
            <footer className="footer-new">
                <div className="footer-content">
                    {/* Left side: Links group */}
                    <div className="footer-links-group">
                        <a className="footer-link" href="./company">Company</a>
                        <a className="footer-link" href="./partners">Partners</a>
                        <a className="footer-link" href="./privacy-policy">Privacy</a>
                        <a className="footer-link" href="./terms-of-service">Terms</a>
                        <a className="footer-link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank" rel="noopener noreferrer">DMCA.com</a>
                        <a className="footer-link" href="./projects">Projects <Code size={16} className="inline ml-0.5" /></a>
                    </div>
                </div>
                <p className="copyright">
                    &copy;{currentYear} B&R | All Rights Reserved. Crafted with <Heart size={16} className="text-red-500 heart-icon inline ml-0.5"/> 
                </p>
            </footer>
        </div>
    );
}

export default TweakApps;