import React, { useState } from 'react';
import {
  PartyPopper, // Replacement for confetti image
  ArrowRight,
  Globe, // Domain Search Link
  Check, // Checkmark for confirmation
} from 'lucide-react';

// --- CONFIGURATION ---
const currentYear = new Date().getFullYear();

// Note: Social icons and links have been removed per request.

export default function FuturisticConfirmationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter flex flex-col items-center p-4 sm:p-8">
      
      {/* Tailwind CSS Setup (Assumed to be loaded, using classes directly) */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
        .futuristic-wrapper {
            background: #111827; /* Darker blue-gray */
        }
        .futuristic-container {
            width: 100%;
            max-width: 1024px;
            margin: 0 auto;
            padding-bottom: 5rem;
        }
        .success-banner {
            padding: 4rem 2rem;
            text-align: center;
            background: linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8));
            border-radius: 1.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
            margin-bottom: 3rem;
            border: 1px solid rgba(55, 65, 81, 0.5);
        }
        .banner-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 800;
            letter-spacing: 0.1em;
            color: #10B981; /* Emerald Green */
            text-shadow: 0 0 15px rgba(16, 185, 129, 0.6);
            margin-top: 1rem;
        }
        .banner-subtitle {
            font-size: clamp(1rem, 2vw, 1.25rem);
            color: #E5E7EB;
            margin-bottom: 2rem;
        }
        .next-step-indicator {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background-color: #4F46E5; /* Indigo */
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }
        .domain-form-module {
            background-color: #1F2937; /* Dark Gray */
            padding: 2.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            border: 1px solid #374151;
        }
        .module-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #6366F1; /* Indigo Accent */
            margin-bottom: 1.5rem;
        }
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #D1D5DB;
        }
        .form-input {
            width: 100%;
            padding: 0.75rem 1rem;
            background-color: #374151;
            border: 1px solid #4B5563;
            border-radius: 0.5rem;
            color: #F9FAFB;
            transition: border-color 0.3s;
        }
        .form-input:focus {
            border-color: #6366F1;
            outline: none;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
        }
        .submit-activation-button {
            width: 100%;
            padding: 1rem;
            background-color: #10B981; /* Emerald Green */
            color: #1F2937;
            font-weight: 700;
            border-radius: 0.75rem;
            margin-top: 2rem;
            transition: background-color 0.3s, transform 0.1s;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }
        .submit-activation-button:hover {
            background-color: #059669;
            transform: translateY(-1px);
        }
        .domain-link {
            color: #38BDF8; /* Sky Blue */
            text-decoration: underline;
            transition: color 0.3s;
        }
        .domain-link:hover {
            color: #0EA5E9;
        }
        .futuristic-footer {
            background-color: #1F2937;
            border-top: 1px solid #374151;
            padding: 2rem 1rem;
            width: 100%;
            text-align: center;
            margin-top: 5rem;
        }
        .footer-status {
            color: #10B981; /* Emerald Green for status */
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        .footer-menu-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem 1.5rem;
            margin-bottom: 1.5rem;
            list-style: none;
            padding: 0;
        }
        .menu-link {
            color: #9CA3AF;
            transition: color 0.3s;
        }
        .menu-link:hover {
            color: #E5E7EB;
        }
        .copyright-text {
            color: #6B7280;
            font-size: 0.875rem;
        }
        `}
      </style>

      <div className="futuristic-container">

        {/* --- 1. SUCCESS BANNER (The Celebration) --- */}
        <header className="success-banner">
          <div className="confetti-image mb-4">
            {/* Replaced confetti image with a large, animated Lucide icon */}
            <PartyPopper className="text-emerald-400 w-24 h-24 mx-auto animate-pulse" />
          </div>
          <h1 className="banner-title">TRANSACTION COMPLETE.</h1>
          <p className="banner-subtitle">
            Your payment for your website plan was successful. **Access Granted.**
          </p>
          <div className="next-step-indicator">
            <ArrowRight size={20} />
            <span className="indicator-text">NEXT: FINALIZE DOMAIN REGISTRATION</span>
          </div>
        </header>

        {/* --- 2. DOMAIN REGISTRATION FORM (The Core Action) --- */}
        <div className="domain-form-module">
          <h2 className="module-title">Finalize Domain Activation (Required)</h2>
          
          <p className="activation-note text-gray-300 mb-6">
            Submit your domain to initiate the build process. **Your site will be live within 24 hours.**
          </p>

          <form className="domain-activation-form" action="https://api.web3forms.com/submit" method="POST">
            {/* Hidden Fields for Web3Forms */}
            <input type="hidden" name="from_name" value="B&R | Confirmation ✅" />
            <input type="hidden" name="replyto" value="support@buildandrun.net" />
            <input type="hidden" name="subject" value="Congrats, Allow up to 24 hours for your website to be running. 🎉" />
            <input type="hidden" name="access_key" value="d9e56840-a70c-492f-ba4c-db537e07d1de" />
            <input type="hidden" name="redirect" value="https://app.buildandrun.net/pricing/skB55L5WOPPK/success/index.html" />

            {/* Verification Steps */}
            <div className="activation-steps-list mb-8 text-gray-400 space-y-3">
              <p className='flex items-start gap-2'>
                <Check size={20} className='text-emerald-400 mt-1 flex-shrink-0' />
                **1. Verify Availability:** Check your domain status at  
                <a href="https://www.name.com/domain/search/buildandrun.net" target="_blank" rel="noopener noreferrer" className="domain-link flex items-center gap-1 ml-1"> 
                    Name.com <Globe size={16} />
                </a>
              </p>
              <p className='flex items-start gap-2'>
                <Check size={20} className='text-emerald-400 mt-1 flex-shrink-0' />
                **2. Select TLD:** Choose your preferred Domain Extension (.COM, .NET, etc.)
              </p>
              <p className='flex items-start gap-2'>
                <Check size={20} className='text-emerald-400 mt-1 flex-shrink-0' />
                **3. Submit:** Enter your details and submit to lock in your domain.
              </p>
            </div>
            
            {/* Form Fields */}
            <div className="form-fields-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="form-group">
                <label htmlFor="domain-name" className="form-label">Domain Name (without extension):</label>
                <input type="text" id="domain-name" className="form-input" placeholder="e.g., myawesomebusiness" name="domain name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="extension" className="form-label">TLD / Extension:</label>
                <select name="extension" id="extension" className="form-input" required>
                  <option value=".COM">.COM (Default)</option>
                  <option value=".NET">.NET</option>
                  <option value=".ORG">.ORG</option>
                  <option value=".US">.US</option>
                  <option value=".FR">.FR</option>
                  <option value=".INFO">.INFO</option>
                  <option value=".EU">.EU</option>
                  <option value=".BE">.BE</option>
                  <option value=".DE">.DE</option>
                  <option value=".ME">.ME</option>
                  <option value=".BIZ">.BIZ</option>
                  <option value=".PRO">.PRO</option>
                  <option value=".NAME">.NAME</option>
                  <option value=".IT">.IT</option>
                  <option value=".PW">.PW</option>
                  <option value=".XYZ">.XYZ</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name:</label>
                <input type="text" id="name" className="form-input" placeholder="e.g., Liam" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Contact Email:</label>
                <input type="email" id="email" className="form-input" placeholder="email@example.com" name="email" required />
              </div>

            </div>
            
            <div className="form-checkbox-group flex items-center mt-6">
              <input type="checkbox" id="agreement-checkbox" name="agreement" value="checkbox" className='w-4 h-4 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500' required />
              <label htmlFor="agreement-checkbox" className='ml-2 text-gray-300'>
                I **confirm** the domain name above is final.
              </label>
            </div>
            
            <button className="submit-activation-button" type="submit" disabled={isSubmitted}>
              {isSubmitted ? 'Activating...' : 'Activate My Website'}
            </button>
            
          </form>
        </div>

      </div>
      
      {/* --- 3. FOOTER --- */}
      <footer className="futuristic-footer">
          <p className="footer-status">Build and Run v2.0.2 Status: **Operational**</p>
          
          {/* Social icons removed */}

          <ul className="footer-menu-list">
              <li className="menu-item"><a className="menu-link" href="../" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li className="menu-item"><a className="menu-link" href="../partners" target="_blank" rel="noopener noreferrer">Partners</a></li>
              <li className="menu-item"><a className="menu-link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank" rel="noopener noreferrer">DMCA</a></li>
              <li className="menu-item"><a className="menu-link" href="../privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a></li>
              <li className="menu-item"><a className="menu-link" href="../terms-of-service" target="_blank" rel="noopener noreferrer">Terms</a></li>
          </ul>
          
          <p className="copyright-text">&copy;{currentYear} B&R | All Rights Reserved. </p>
      </footer>
    </div>
  );
}