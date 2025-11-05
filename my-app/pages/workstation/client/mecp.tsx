import React from 'react';
import Image from 'next/image';
import Facebook from '/public/img/footer/logo-facebook.svg';
import Twitter from '/public/img/footer/logo-twitter.svg';
import Instagram from '/public/img/footer/logo-instagram.svg';
import Youtube from '/public/img/footer/logo-youtube.svg';

import mecp from './images/logo3.png';
import Link from 'next/link';


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
        <div className="mecp-logo" id="chip">
          <Image src={mecp}  alt="mecp" />
        </div>
        <div className="thankyou">
          <h1>Mid East Canadian</h1>
          <h6 id="br-thankyou">Pharmaceutical</h6>
        </div>
      </div>
      <div className="company-text" id="company-text-1">
        <div className="blank-payment-successful">
          <div>
            <span>
              Email Marketing Designs for{' '}
              <a className="colorblue">MECP</a>
            </span>
            <div className="debit-update-icon">
              <a
                href="https://docs.google.com/document/d/1glBSL_lh3epGbhgugo7NmAP8-WJmNy9rP7Inkt-Q11Q/edit"
                target="_blank"
              >
                <img src="https://img.shields.io/badge/UPDATE-WEEKLY-blue?style=for-the-badge&logo="></img>
              </a>
            </div>
          </div>

          <div className="mecp">

          <div className="mecp-card">
    <Link href="./email-mecp.html"><p><span>EMAIL HTML</span></p></Link>
    <Link href="./mecp.png" ><p><span>SOCIAL PNG</span></p></Link>
    <Link href="./mecp.txt"><p><span>SMS PROMO</span></p></Link>
</div>

          </div>



          <div className="debit-return">
            <a href="../../projects">
              <span>⮐ Return to Project 🪄</span>
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
                  <a className="menu__link" href="../../" target="_blank">
                    Homepage
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="../../partners" target="_blank">
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
                    href="../../privacy-policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="../../terms-of-service"
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
