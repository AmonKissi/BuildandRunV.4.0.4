import React from 'react';
import Image from "next/image";

// Import Assets
import confetti from "/public/website/submission/confetti.png";
import Facebook from "/public/img/footer/logo-facebook.svg";
import Twitter from "/public/img/footer/logo-twitter.svg";
import Instagram from "/public/img/footer/logo-instagram.svg";
import Linkedin from "/public/img/footer/logo-linkedin.svg";
import Youtube from "/public/img/footer/logo-youtube.svg";

export default function FuturisticConfirmationPage() {
  return (
    <div className="futuristic-wrapper">
      <div className="futuristic-container">

        {/* --- 1. SUCCESS BANNER (The Celebration) --- */}
        <header className="success-banner">
          <div className="confetti-image">
            <Image src={confetti} alt="Confetti celebration" layout="responsive" width={100} height={100} />
          </div>
          <h1 className="banner-title">TRANSACTION COMPLETE.</h1>
          <p className="banner-subtitle">
            Your payment for your website plan was successful. **Access Granted.**
          </p>
          <div className="next-step-indicator">
            <span className="indicator-text">NEXT: FINALIZE DOMAIN REGISTRATION</span>
          </div>
        </header>

        {/* --- 2. DOMAIN REGISTRATION FORM (The Core Action) --- */}
        <div className="domain-form-module">
          <h2 className="module-title">Finalize Domain Activation (Required)</h2>
          
          <p className="activation-note">
            Submit your domain to initiate the build process. **Your site will be live within 24 hours.**
          </p>

          <form className="domain-activation-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="from_name" value="B&R | Confirmation ✅" />
            <input type="hidden" name="replyto" value="support@buildandrun.net" />
            <input type="hidden" name="subject" value="Congrats, Allow up to 24 hours for your website to be running. 🎉" />
            <input type="hidden" name="access_key" value="d9e56840-a70c-492f-ba4c-db537e07d1de" />
            <input type="hidden" name="redirect" value="https://app.buildandrun.net/pricing/skB55L5WOPPK/success/index.html" />

            {/* Verification Steps */}
            <div className="activation-steps-list">
              <p>
                **1. Verify Availability:** Check your domain status at  
                <a href="https://www.name.com/domain/search/buildandrun.net" target="_blank" rel="noopener noreferrer" className="domain-link"> Name.com</a>
              </p>
              <p>**2. Select TLD:** Choose your preferred Domain Extension (.COM, .NET, etc.)</p>
              <p>**3. Submit:** Enter your details and submit to lock in your domain.</p>
            </div>
            
            {/* Form Fields */}
            <div className="form-fields-grid">
              
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
            
            <div className="form-checkbox-group">
              <input type="checkbox" id="agreement-checkbox" name="agreement" value="checkbox" required />
              <label htmlFor="agreement-checkbox">
                I **confirm** the domain name above is final.
              </label>
            </div>
            
            <button className="submit-activation-button" type="submit">Activate My Website</button>
            
          </form>
        </div>

      </div>
      
      {/* --- 3. FOOTER --- */}
      <footer className="futuristic-footer">
          <p className="footer-status">Build and Run v2.0.2 Status: **Operational**</p>

          <ul className="social-icon-list">
              {[
                  { href: "https://www.facebook.com/buildandrun.net/", icon: Facebook, alt: "Facebook" },
                  { href: "https://www.twitter.com/brstore_us", icon: Twitter, alt: "Twitter" },
                  { href: "https://www.instagram.com/bdrstoreus/", icon: Instagram, alt: "Instagram" },
                  { href: "https://www.linkedin.com/company/bandr/", icon: Linkedin, alt: "LinkedIn" },
                  { href: "https://www.youtube.com/@buildandrun.", icon: Youtube, alt: "Youtube" },
              ].map((item, index) => (
                  <li key={index} className="social-icon-item">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.alt}>
                          <div className="social-icon-wrapper">
                              <Image src={item.icon} alt={item.alt} layout="fixed" width={24} height={24} />
                          </div>
                      </a>
                  </li>
              ))}
          </ul>
          
          <ul className="footer-menu-list">
              <li className="menu-item"><a className="menu-link" href="../" target="_blank">Home</a></li>
              <li className="menu-item"><a className="menu-link" href="../partners" target="_blank">Partners</a></li>
              <li className="menu-item"><a className="menu-link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank">DMCA</a></li>
              <li className="menu-item"><a className="menu-link" href="../privacy-policy" target="_blank">Privacy</a></li>
              <li className="menu-item"><a className="menu-link" href="../terms-of-service" target="_blank">Terms</a></li>
          </ul>
          
          <p className="copyright-text">&copy;2023 B&R | All Rights Reserved. </p>
      </footer>
    </div>
  );
}