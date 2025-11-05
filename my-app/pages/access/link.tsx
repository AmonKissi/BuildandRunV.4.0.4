import React from 'react';
import { Server, Monitor, Smartphone, FolderOpen, Database, Cloud, ExternalLink, Heart, ArrowLeft } from 'lucide-react';

// --- CONFIGURATION: Define Access Tools Data ---
const accessTools = [
  {
    icon: Server,
    title: "Plesk Control Panel",
    desc: "Web hosting and server data center automation software which manages your domain.",
    link: "https://pf4.inulogic.fr:8443/login_up.php",
  },
  {
    icon: Smartphone,
    title: "IOS Plesk Mobile",
    desc: "Manage your domain using Plesk's dedicated mobile application on your iPhone.",
    link: "https://apps.apple.com/us/app/plesk-mobile/id1086540296",
  },
  {
    icon: Smartphone,
    title: "Android Plesk Mobile",
    desc: "Manage your domain using Plesk's dedicated mobile application on your Android device.",
    link: "https://play.google.com/store/apps/details?id=com.odin.plesk.mobile&hl=en_US&gl=US",
  },
  {
    icon: FolderOpen,
    title: "FileZilla Client (FTP)",
    desc: "FTP software tool that allows users to set up FTP servers or connect to exchange files.",
    link: "https://filezilla-project.org/download.php?type=client",
  },
  {
    icon: Database,
    title: "PhpMyAdmin",
    desc: "The most popular MySQL database management tool, especially for web hosting services.",
    link: "https://pf4.inulogic.fr:8443/phpMyAdmin/",
  },
  {
    icon: Cloud,
    title: "FileStash Web FTP Client",
    desc: "Online web FTP client which makes it easy to manage and explore the data on your server.",
    link: "https://www.filestash.app/online-ftp-client.html",
  },
];

export default function AccessLinkPage() {
  const currentYear = new Date().getFullYear();

  // Helper component for the individual access cards
  type AccessCardProps = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
    link: string;
  };

  const AccessCard: React.FC<AccessCardProps> = ({ icon: Icon, title, desc, link }) => (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="w-8 h-8 text-indigo-400 flex-shrink-0" />
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-indigo-400 transition">
          {title}
        </a>
      </div>
      <p className="text-gray-400 mb-4">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition group"
      >
        Visit
        <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180 group-hover:translate-x-1 transition duration-200" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Tailwind and Custom Styles */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          /* Custom style for the fixed header height */
          .header-section {
            height: 30vh;
          }

          .heart-icon {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin: 0 0.25rem;
            color: #EF4444; /* Red 500 */
            fill: #EF4444;
            animation: pulse-heart 1.5s infinite;
          }

          @keyframes pulse-heart {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>

      {/* --- 1. Header Section (30vh height) --- */}
      <header className="header-section flex flex-col justify-center items-center p-6 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-4 mb-4">
          <Server className="w-10 h-10 text-indigo-500 p-1 rounded-full bg-gray-900 shadow-xl" />
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">Access Link</h1>
            <h6 className="text-lg font-medium text-gray-400">B&R</h6>
          </div>
        </div>
      </header>

      {/* --- 2. Main Content and Card Grid --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="text-2xl font-light text-gray-300 mb-6">
            Manage all your domains, web hosting, databases, and more with our **integrated access tools.**
          </p>
          
          <a
            href="#access-grid"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-full shadow-lg text-gray-900 bg-emerald-400 hover:bg-emerald-500 transition duration-150 transform hover:scale-[1.05]"
          >
            SLIDE DOWN TO TOOLS
          </a>
        </div>

        {/* Access Tools Grid */}
        <div id="access-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessTools.map((tool, index) => (
            <AccessCard key={index} {...tool} />
          ))}
        </div>

        {/* Return Button */}
        <div className="mt-12 text-center">
          <a href="../" className="inline-flex items-center text-lg font-medium text-indigo-400 hover:text-indigo-300 transition group">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage 🏠
          </a>
        </div>
      </main>

      {/* --- 3. Footer --- */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Love Message */}
          <p id="love" className="text-gray-400 text-sm mb-4 flex justify-center items-center">
            Build and Run v2.0.2 crafted with
            <Heart className="heart-icon" />
          </p>

          {/* Menu Links */}
          <ul className="flex justify-center flex-wrap gap-4 text-sm font-medium mb-4 list-none p-0">
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="../" target="_blank">Homepage</a></li>
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="../partners" target="_blank">Partners</a></li>
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank">DMCA.com</a></li>
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="https://github.com/BuildandRun/BuildandRun-v1.0.1#readme" target="_blank">V.1.0.1</a></li>
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="../privacy-policy" target="_blank">Privacy Policy</a></li>
            <li className="menu__item"><a className="text-gray-300 hover:text-indigo-400 transition" href="../terms-of-service" target="_blank">Terms Of Service</a></li>
          </ul>
          
          {/* Copyright */}
          <p className="text-gray-500 text-xs mt-4">&copy;{currentYear} B&R | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}