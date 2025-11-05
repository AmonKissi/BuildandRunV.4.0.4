import React from 'react';
import Image from 'next/image';
import Facebook from '/public/img/footer/logo-facebook.svg';
import Twitter from '/public/img/footer/logo-twitter.svg';
import Instagram from '/public/img/footer/logo-instagram.svg';
import Youtube from '/public/img/footer/logo-youtube.svg';

import chip from '/public/img/projects/debit-card/chip.png';
import { useEffect } from 'react';


// import  from "../public/img/tweak-apps/cryptocurrencies/.png";

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log(`Copied "${text}" to clipboard`);
      alert('Card Number Copied');
    })
    .catch((error) => {
      console.error(`Error copying "${text}" to clipboard:`, error);
    });
}

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
          <Image src={chip} alt="chip" />
        </div>
        <div className="thankyou">
          <h1>Debit Card</h1>
          <h6 id="br-thankyou">B&R</h6>
        </div>
      </div>
      <div className="company-text" id="company-text-1">
        <div className="blank-payment-successful">
          <div>
            <span>
              Use this tool for all your{' '}
              <a className="free-trials">Free Trials</a>
            </span>
            <div className="debit-update-icon">
              <a
                href="https://free.timeanddate.com/countdown/i8qut7vg/n70/cf100/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pct/tcfff/fs100/szw192/szh81/iso2023-03-30T00:00:00"
                target="_blank"
              >
                <img src="https://img.shields.io/badge/UPDATE-every%2030%20days-brightgreen?style=for-the-badge&logo="></img>
              </a>
            </div>
            <div className="debit-card-object">
              <div className="debit-flip-card">
                <div className="debit-flip-card-inner">
                  <div className="debit-flip-card-front">
                    <p className="debit-heading">MASTERCARD</p>
                    <svg
                      viewBox="0 0 48 48"
                      height="36"
                      width="36"
                      y="0px"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="debit-logo"
                    >
                      <path
                        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        fill="#ff9800"
                      ></path>
                      <path
                        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        fill="#d50000"
                      ></path>
                      <path
                        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        fill="#ff3d00"
                      ></path>
                    </svg>
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 50 50"
                      height="30px"
                      width="30px"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      className="debit-chip"
                      version="1.1"
                    >
                      {' '}
                      <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                        y="0"
                        x="0"
                        height="50"
                        width="50"
                        id="image0"
                      ></image>
                    </svg>
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 50 50"
                      height="20px"
                      width="20px"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      className="debit-contactless"
                      version="1.1"
                    >
                      {' '}
                      <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
              cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
              lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
              fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
              GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
              VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
              HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
              bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
              DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
              qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
              sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
              Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
              XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
              cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
              nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
              xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
              MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
              OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
              MDowMIXeN6gAAAAASUVORK5CYII="
                        y="0"
                        x="0"
                        height="50"
                        width="50"
                        id="image0"
                      ></image>
                    </svg>
                    <p className="debit-number">4091 7700 0595 0647</p>
                    <p className="debit-valid_thru">VALID THRU</p>
                    <p className="debit-date">0 9 / 2 3</p>
                    <p className="debit-name">BRSTORE</p>
                  </div>
                  <div className="debit-flip-card-back">
                    <div className="debit-strip"></div>
                    <div className="debit-mstrip"></div>
                    <div className="debit-sstrip">
                      <p className="debit-code">369</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="debit-hover-over">
            <p>Hover over the card to display CVV</p>
          </div>
          <div className="debit-display-address">
            <div> 
            <input
              type="button"
              onClick={() => {
                const cardnumber = '4091 7700 0595 0647';
                copyToClipboard(` ${cardnumber}`);
              }}
              value="Copy Card Number"
            ></input>     
            </div>
          </div>
          <div className="debit-display-address">
            <input
              type="button"
              onClick={() => {
                const address = 'Main Street, Dallas Texas 75202';
                alert(`Address: ${address}`);
              }}
              value="Display Address"
            ></input>
          </div>
          <div className="debit-return">
            <a href="./">
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
