import React, { useState, useEffect } from 'react';

// --- CARD DATA & CONSTANTS ---
const CARD_NUMBER = '4091 7700 0595 0647';
const CARD_DATE = '09/23';
const CARD_CVV = '369';
const CARD_NAME = 'BRSTORE';
const CARD_ADDRESS = 'Main Street, Dallas Texas 75202';

// --- UTILITY TYPES ---
type StatusSetter = React.Dispatch<React.SetStateAction<string | null>>;

// --- CLIPBOARD UTILITY ---
const copyToClipboard = (text: string, setStatusMessage: StatusSetter): void => {
  // Clear any existing selection and copy to clipboard
  try {
    const tempInput = document.createElement('textarea');
    tempInput.value = text.trim().replace(/\s/g, ''); // Remove spaces for copy
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setStatusMessage('Card Number Copied!');
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    setStatusMessage('Error: Could not copy card number.');
  }
};

// --- MAIN COMPONENT ---
const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Auto-clear status message after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleDisplayAddress = () => {
    setStatusMessage(`Address: ${CARD_ADDRESS}`);
  };

  const handleCopyCardNumber = () => {
    copyToClipboard(CARD_NUMBER, setStatusMessage);
  };
  
  const chipPlaceholder = "https://placehold.co/48x36/f5c938/000000?text=Chip";

  const currentYear = new Date().getFullYear();

  return (
    <div className="landing-wrapper min-h-screen bg-gray-50 font-inter" data-theme="light">
      <script src="https://cdn.tailwindcss.com"></script>
      <style jsx global>{`
        /* -------------------------------------------------------------------------- */
        /* BASE STYLES & FONT                                                         */
        /* -------------------------------------------------------------------------- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }

        /* -------------------------------------------------------------------------- */
        /* DEBIT CARD STYLES (Custom for 3D effect and absolute positioning)          */
        /* The card size has been increased to 320px x 200px for better visibility.   */
        /* -------------------------------------------------------------------------- */
        .debit-flip-card {
            background-color: transparent;
            width: 320px; /* Increased size */
            height: 200px; /* Increased size */
            perspective: 1200px;
            touch-action: manipulation;
        }

        .debit-flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
            transform-style: preserve-3d;
        }

        /* Hover only works on desktop, touch event handles mobile */
        .debit-flip-card:hover .debit-flip-card-inner {
            transform: rotateY(180deg);
        }

        .debit-flip-card-front, .debit-flip-card-back {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 1rem;
            color: white;
            padding: 1.5rem; /* Base padding for general layout */
        }

        /* FRONT CARD STYLES */
        .debit-flip-card-front {
            background: linear-gradient(135deg, #111827 0%, #374151 100%); 
            /* Grid/Flex positioning for cleaner layout without fragile em units */
            display: grid;
            grid-template-columns: 1fr auto; /* Two columns for chip/contactless and heading */
            grid-template-rows: auto auto 1fr auto auto; /* Chip, Logo, Number, Valid Thru, Name */
            align-items: center;
            gap: 0.5rem;
        }
        
        /* Specific positioning for traditional card elements (now simplified) */
        .debit-chip-wrapper {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }
        .debit-contactless {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            align-self: center;
            justify-self: end;
        }
        .debit-logo {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            justify-self: end;
            align-self: start;
            margin-top: -0.5rem;
        }
        .debit-number {
            grid-column: 1 / 3;
            grid-row: 3 / 4;
            font-size: 1.5rem;
            letter-spacing: 0.25em;
            font-weight: 600;
            align-self: center;
            justify-self: start;
        }
        .debit-valid-info {
            grid-column: 1 / 3;
            grid-row: 4 / 5;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            font-weight: 500;
            margin-top: -1.5rem;
        }
        .debit-name {
            grid-column: 1 / 3;
            grid-row: 5 / 6;
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: uppercase;
            align-self: end;
            justify-self: start;
        }
        
        /* BACK CARD STYLES */
        .debit-flip-card-back {
            background: linear-gradient(135deg, #374151 0%, #111827 100%);
            transform: rotateY(180deg);
            padding: 0; /* Remove padding from back for full-width strip */
            display: block; /* Use block flow for back */
        }

        .debit-strip {
            background: repeating-linear-gradient(
              45deg,
              #303030,
              #303030 10px,
              #202020 10px,
              #202020 20px
            );
            width: 100%;
            height: 3rem;
            margin-top: 1.5rem;
        }
        
        .debit-signature-panel {
            margin: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .debit-mstrip {
            background-color: #f3f4f6; /* light gray for signature area */
            flex-grow: 1;
            height: 2rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 0.5rem;
            font-style: italic;
            color: #6b7280;
            font-size: 0.75rem;
            
        }
        
        .debit-cvv-strip {
            background-color: white;
            width: 50px; 
            height: 2rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #1f2937;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        
        /* Small screen adjustments */
        @media (max-width: 380px) {
            .debit-flip-card {
                width: 280px;
                height: 175px;
            }
            .debit-number {
                font-size: 1.3rem; 
            }
            .debit-name {
                font-size: 0.9rem;
            }
        }
      `}</style>

      {/* Status Message Overlay */}
      {statusMessage && (
        <div className="fixed top-5 right-5 z-50 p-3 bg-blue-600 text-white rounded-xl shadow-lg font-semibold animate-in fade-in slide-in-from-top-4 duration-300">
          {statusMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex items-center mb-6 border-b pb-4 w-full justify-center max-w-lg">
            {/* Chip Placeholder */}
            <div className="w-12 h-9">
                <img src={chipPlaceholder} alt="chip" className="rounded-lg shadow-md" />
            </div>
            {/* Title */}
            <div className="text-left ml-4">
                <h1 className="text-4xl font-extrabold text-gray-900">BR Debit Utility</h1>
                <p className="text-base text-gray-500 font-semibold mt-1">Virtual Card for Free Trials</p>
            </div>
        </div>

        {/* Subtitle/Description */}
        <p className="text-lg text-gray-600 max-w-lg mb-8 text-center">
            Use this secure virtual card for all your <span className="text-green-600 font-bold">Free Trials</span>. Card details are updated regularly to ensure validity.
        </p>

        {/* Update Icon */}
        <div className="mb-10">
            <a
                href="https://free.timeanddate.com/countdown/i8qut7vg/n70/cf100/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pct/tcfff/fs100/szw192/szh81/iso2023-03-30T00:00:00"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src="https://img.shields.io/badge/UPDATE-every%2030%20days-brightgreen?style=for-the-badge&logo=" 
                    alt="Update Badge"
                />
            </a>
        </div>

        {/* Debit Card Object */}
        <div className="debit-card-object mb-6">
            <div 
                className="debit-flip-card"
                onMouseEnter={() => setIsFlipped(true)} 
                onMouseLeave={() => setIsFlipped(false)}
                onTouchStart={() => setIsFlipped(f => !f)} // Touch toggle for mobile
            >
                <div 
                    className="debit-flip-card-inner"
                    style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                    
                    {/* Card Front */}
                    <div className="debit-flip-card-front">
                        <div className="debit-chip-wrapper">
                             {/* Chip SVG */}
                            <svg
                                viewBox="0 0 50 50"
                                className="w-10 h-10"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                            > 
                                <image
                                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVekOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwHujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFmpAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                                    y="0"
                                    x="0"
                                    height="50"
                                    width="50"
                                ></image>
                            </svg>
                        </div>
                        
                        {/* Contactless Symbol SVG */}
                        <div className="debit-contactless">
                            <svg
                                viewBox="0 0 50 50"
                                className="w-8 h-8"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                            > 
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
                                    nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6feitBK
                                    xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
                                    MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
                                    OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
                                    MDowMIXeN6gAAAAASUVORK5CYII="
                                    y="0"
                                    x="0"
                                    height="50"
                                    width="50"
                                ></image>
                            </svg>
                        </div>

                        {/* Mastercard Logo SVG */}
                        <div className="debit-logo">
                            <svg
                                viewBox="0 0 48 48"
                                height="40"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                                className="debit-logo"
                            >
                                <path d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" fill="#ff9800"></path>
                                <path d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" fill="#d50000"></path>
                                <path d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" fill="#ff3d00"></path>
                            </svg>
                        </div>

                        <p className="debit-number">{CARD_NUMBER}</p>
                        
                        <div className="debit-valid-info">
                            <p className="text-xs text-gray-400 uppercase">VALID THRU</p>
                            <p className="text-base font-bold">{CARD_DATE.replace(/\s/g, '')}</p>
                        </div>
                        
                        <p className="debit-name">{CARD_NAME}</p>
                    </div>
                    
                    {/* Card Back */}
                    <div className="debit-flip-card-back">
                        <div className="debit-strip"></div>
                        
                        <div className="debit-signature-panel">
                            <p className="font-semibold text-sm w-8 text-gray-400">CVV</p>
                            <div className="debit-mstrip">
                                Authorized Signature
                            </div>
                            <div className="debit-cvv-strip">
                                {CARD_CVV}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Hover Text */}
        <div className="text-sm text-gray-500 font-medium mb-8">
            <p>Hover over the card to display CVV (or tap/touch on mobile)</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
            <button
                onClick={handleCopyCardNumber}
                className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105"
            >
                {/* Lucide icon for Copy */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                Copy Card Number
            </button>     
            <button
                onClick={handleDisplayAddress}
                className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-semibold rounded-full shadow-md text-gray-700 bg-white hover:bg-gray-100 transition duration-150 ease-in-out transform hover:scale-105"
            >
                {/* Lucide icon for Home */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M5 12l7-7 7 7"/><path d="M4 12v7a2 2 0 0 0 2 2h3"/><path d="M18 12v7a2 2 0 0 1-2 2h-3"/></svg>
                Display Billing Address
            </button>
        </div>

        {/* Return Link */}
        <div className="mt-12">
            <a href="../projects" className="text-lg text-blue-600 hover:text-blue-800 font-bold transition duration-150">
                <span>⮐ Return to Projects 🪄</span>
            </a>
        </div>
      </div>
      
      {/* FOOTER - Cleaned up */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12 py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm font-medium">
                  <a className="hover:text-gray-900 transition" href="../company">Company</a>
                  <a className="hover:text-gray-900 transition" href="../partners">Partners</a>
                  <a className="hover:text-gray-900 transition" href="../privacy-policy">Privacy</a>
                  <a className="hover:text-gray-900 transition" href="../terms-of-service">Terms</a>
                  <a className="hover:text-gray-900 transition" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank" rel="noopener noreferrer">DMCA.com</a>
              </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center">
              &copy;{currentYear} B&R | All Rights Reserved. Crafted with 
              {/* Inline SVG for Heart icon */}
              <svg
                  fill="#ef4444"
                  stroke="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-1 w-4 h-4"
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
              </svg>
              in Dallas.
          </p>
      </footer>
    </div>
  );
};

export default App;