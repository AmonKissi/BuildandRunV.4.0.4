import React from 'react';
import Image from 'next/image';
import Facebook from '/public/img/footer/logo-facebook.svg';
import Twitter from '/public/img/footer/logo-twitter.svg';
import Instagram from '/public/img/footer/logo-instagram.svg';
import Youtube from '/public/img/footer/logo-youtube.svg';

// Images
import accesslogo from '/public/img/favicon/fav512.png';
import plesk from '/public/img/access/plesk.png';
import phoneplesk from '/public/img/access/phone-plesk.png';
import filezilla from '/public/img/access/filezilla.png';
import phpmyadmin from '/public/img/access/phpmyadmin.png';
import filestash from '/public/img/access/filestash.png';

// import  from "../public/img/tweak-apps/cryptocurrencies/.png";


export default function company() {
  return (
    // <Layout title="Hello" description="Hello React Page">
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          fontSize: '20px',
        }}
      >
        <div className="chip" id="chip">
          <Image src={accesslogo} alt="chip" />
        </div>
        <div className="thankyou">
          <h1>Access Link</h1>
          <h6 id="br-thankyou">B&R</h6>
        </div>
      </div>
      <div className="company-text" id="company-text-1">
        <div className="blank-payment-successful">
          <div>
            <span>
              Manage all your domains, web hosting, databases, and more with{' '}
              <a className="free-trials">Access Link.</a>
            </span>
            <div className="debit-update-icon">
              <a
                href="#"
                target="_blank"
              >
                <img src="https://img.shields.io/badge/SLIDE%20-DOWN-brightgreen?style=for-the-badge&logo="></img>
              </a>
            </div>
            <div className="access-main">
              {/* SLIDERS  */}
              <div>{'‎'}</div>
              {/* 1 */}
              <div className="access-card">
                <div >
                  <Image src={plesk} alt="plesk"  />
                </div>
                <div className="access-content">
                  <a href="https://pf4.inulogic.fr:8443/login_up.php" target="_blank">
                    <span className="access-title">Plesk</span>
                  </a>

                  <p className="access-desc">
                    Web hosting and server data center automation software which manages your domain
                  </p>

                  <a href="https://pf4.inulogic.fr:8443/login_up.php" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 1 */}
              <div>{'‎'}</div>
              {/* 2 */}
              <div className="access-card">
                <div >
                  <Image src={phoneplesk} alt="plesk"  />
                </div>
                <div className="access-content">
                  <a href="https://apps.apple.com/us/app/plesk-mobile/id1086540296" target="_blank">
                    <span className="access-title">IOS Plesk</span>
                  </a>

                  <p className="access-desc">
                    Web hosting and server data center automation software which manages your domain using IPhone
                  </p>

                  <a href="https://apps.apple.com/us/app/plesk-mobile/id1086540296" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 2 */}
              <div>{'‎'}</div>
              {/* 3 */}
              <div className="access-card">
                <div >
                  <Image src={phoneplesk} alt="plesk"  />
                </div>
                <div className="access-content">
                  <a href="https://play.google.com/store/apps/details?id=com.odin.plesk.mobile&hl=en_US&gl=US" target="_blank">
                    <span className="access-title">Android Plesk</span>
                  </a>

                  <p className="access-desc">
                    Web hosting and server data center automation software which manages your domain using Android
                  </p>

                  <a href="https://play.google.com/store/apps/details?id=com.odin.plesk.mobile&hl=en_US&gl=US" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 3 */}
              <div>{'‎'}</div>
              {/* 4 */}
              <div className="access-card">
                <div >
                  <Image src={filezilla} alt="Filezilla"  />
                </div>
                <div className="access-content">
                  <a href="https://filezilla-project.org/download.php?type=client" target="_blank">
                    <span className="access-title">FileZilla</span>
                  </a>

                  <p className="access-desc">
                  FTP software tool that allows users to set up FTP servers or connect to other FTP servers in order to exchange files
                  </p>

                  <a href="https://filezilla-project.org/download.php?type=client" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 4 */}
              <div>{'‎'}</div>
              {/* 5 */}
              <div className="access-card">
                <div >
                  <Image src={phpmyadmin} alt="PhpMyAdmin"  />
                </div>
                <div className="access-content">
                  <a href="https://pf4.inulogic.fr:8443/phpMyAdmin/" target="_blank">
                    <span className="access-title">PhpMyAdmin</span>
                  </a>

                  <p className="access-desc">
                  The most popular MySQL database management tools, especially for web hosting services
                  </p>

                  <a href="https://pf4.inulogic.fr:8443/phpMyAdmin/" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 5 */}
              <div>{'‎'}</div>
              {/* 6 */}
              <div className="access-card">
                <div >
                  <Image src={filestash} alt="FileStash"  />
                </div>
                <div className="access-content">
                  <a href="https://www.filestash.app/online-ftp-client.html" target="_blank">
                    <span className="access-title">FileStash</span>
                  </a>

                  <p className="access-desc">
                  Online web FTP client which makes it easy to manage and explore the data on your server
                  </p>

                  <a href="https://www.filestash.app/online-ftp-client.html" target="_blank" className="access-action">
                    Visit
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              {/* 6 */}

              {/* SLIDERS  */}
            </div>
          </div>
          <div className="debit-return">
            <a href="../">
              <span>⮐ Return to Homepage 🏠</span>
            </a>
          </div>
        </div>

        <p id="love">
          Build and Run v2.0.2 crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
        <div className="divider2">
          <footer className="footer">
            <ul className="social-icon">
              <li className="social-icon__item">
                <a
                  className="social-icon__link"
                  href="https://www.facebook.com/buildandrun.net/"
                  target="_blank"
                >
                  <div className="social-bar2">
                    <Image src={Facebook} alt="Facebook" />
                  </div>
                </a>
              </li>
              <li className="social-icon__item">
                <a
                  className="social-icon__link"
                  href="https://www.twitter.com/brstore_us"
                  target="_blank"
                >
                  <div className="social-bar2">
                    <Image src={Twitter} alt="Twitter" />
                  </div>
                </a>
              </li>
              <li className="social-icon__item">
                <a
                  className="social-icon__link"
                  href="https://www.instagram.com/bdrstoreus/"
                  target="_blank"
                >
                  <div className="social-bar2">
                    <Image src={Instagram} alt="Instagram" />
                  </div>
                </a>
              </li>
              <li className="social-icon__item">
                <a
                  className="social-icon__link"
                  href="https://www.youtube.com/@buildandrun."
                  target="_blank"
                >
                  <div className="social-bar2">
                    <Image src={Youtube} alt="Youtube" />
                  </div>
                </a>
              </li>
            </ul>
            <div>
              <ul className="menu">
                <li className="menu__item">
                  <a className="menu__link" href="../" target="_blank">
                    Homepage
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="../partners" target="_blank">
                    Partners
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.dmca.com/compliance/buildandrun.net"
                    target="_blank"
                  >
                    DMCA.com
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://github.com/BuildandRun/BuildandRun-v1.0.1#readme"
                    target="_blank"
                  >
                    V.1.0.1
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="../privacy-policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="../terms-of-service"
                    target="_blank"
                  >
                    Terms Of Service
                  </a>
                </li>
              </ul>
              <p>&copy;2023 B&R | All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
