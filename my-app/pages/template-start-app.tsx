import Image from "next/image";
import BRlogo from "../public/img/logo/BRlogo.png";
import mBRlogo from "../public/img/logo/mBRlogo.png";
import WebDevTab from "../public/img/navigate/web/82c.png";
import AdminTab from "../public/img/navigate/admin/a3.png";
import SocialTab from "../public/img/navigate/social/s2.png";
import AppProjects from "../public/img/navigate/projects/p2.png";
import AppBlog from "../public/img/navigate/blog/b2.png";
import AppTweak from "../public/img/navigate/tweak/t2.png";
import AppAbout from "../public/img/navigate/about/a1.png";
import AppTeam from "../public/img/navigate/team/t8.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Linkedin from "../public/img/footer/logo-linkedin.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";

export function Index() {

  /*
   * Build and Run v.2.0.2 Index.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
<div className="wrapper">
      <div className="container">
        <div id="mBRlogo" className="show-on-desktop hide-on-mobile">
          <Image src={mBRlogo} alt="mBRlogo" />
        </div>

        <div id="welcome">
          <h1>
            <span> Introducing The Future</span>
            Tweak Apps 👾
          </h1>
        </div>
        <div id="description">
          <span>You can access our online platform with your mobile device and desktop.</span>
          <div></div>
          <span>We are currently building our IOS and Android App. Stay tuned!</span>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>
            <div className="blinker">
              <a href="./"> Homepage</a>
            </div>
          </div>
          <div className="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <Image src={BRlogo} alt="BRlogo" />
          </div>
        </div>

 

        <div id="commands" className="rounded shadow">
          <h2>Build and Run</h2>
          <p>Learn How To Get Started</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              FAQs
            </summary>
            <pre>
              <span>⎆ What is Build and Run?</span>
              Build and Run (B&R) is a technology company that provides multiple services from all categories for a fair price.
              <span>⎆ What service do we provide?</span>
              We provides all kinds of services, such as Website, Application Development, Design, Arts, Social Media Marketing, News, Tweaks, and More.
              <span>⎆ What makes our Administrator Panel so special?</span>
              First and foremost, it is incredibly user-friendly. Whether you are a tech-savvy individual or someone who is new to using software, the administrator panel is easy to navigate and understand. This makes it accessible to everyone, regardless of their level of expertise.
              <span>⎆ How can you reach us?</span>
              Email us at suppport@buildandrun.net or via text at +1 (469) 215-1582.
              <span>⎆ How can you partner with us?</span>
              Send us an email at support@buildandrun.net if you are a person or business and would want to collaborate with us.
              <span>⎆ How can you join our team?</span>
              Apply for a position at B&R to help us build and Run a world with tech that has no limits. Send us your CV at jobs@buildandrun.net.
            </pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Privacy Policy
            </summary>
            <pre><a href="./privacy-policy">Click ➤ Privacy Policy 🔒</a></pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Terms Of Service
            </summary>
            <pre>
            <a href="./terms-of-service">Click ➤ Terms Of Service 📜</a>
            </pre>
          </details>
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
      </div>
      <div>
        <footer className="footer">
          <div className="waves">
          </div>
          <ul className="social-icon">
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/buildandrun.net/" target="_blank">
            <div className="social-bar">
            <Image src={Facebook} alt="Facebook" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.twitter.com/brstore_us" target="_blank">
            <div className="social-bar">
            <Image src={Twitter} alt="Twitter" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/bdrstoreus/" target="_blank">
            <div className="social-bar">
            <Image src={Instagram} alt="Instagram" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/bandr/" target="_blank">
            <div className="social-bar">
            <Image src={Linkedin} alt="Linkedin" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.youtube.com/@buildandrun." target="_blank">
            <div className="social-bar">
            <Image src={Youtube} alt="Youtube" />
            </div>
            </a></li>
          </ul>
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="./company" target="_blank">Company</a></li>
            <li className="menu__item"><a className="menu__link" href="./partners" target="_blank">Partners</a></li>
            <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank">DMCA.com</a></li>

          </ul>
          <p>&copy;2023 B&R | All Rights Reserved</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

export default Index;
