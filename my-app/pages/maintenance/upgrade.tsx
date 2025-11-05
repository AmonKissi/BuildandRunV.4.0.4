import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


import maintenance from '/public/img/maintenance/maintenance.png';

// import Upgrade from '../maintenance/upgrade';

export default function upgrade() {

        const [isDismissed, setIsDismissed] = useState(false);
      
        const handleDismiss = () => {
          setIsDismissed(true);
        };
      
        if (isDismissed) {
          return null; // Return null to hide the component
        }

  return (
    <div className="upgrade-main">
      <div className="upgrade-notifications-container">
        <div className="upgrade-success">
          <div className="upgrade-flex">
            <div className="upgrade-flex-shrink-0">
              <div>
              <Image src={maintenance} alt="maintenance" width={30} height={30} />
              </div>
            </div>
            <div className="upgrade-success-prompt-wrap">
              <p className="upgrade-success-prompt-heading">Under maintenance</p>
              <div className="upgrade-success-prompt-prompt">
                <p>
                Temporary Downtime Notice for Build and Run Admin Panel Upgrade
                </p>
              </div>
              <div className="upgrade-success-button-container">
                <Link href="https://build-and-run.instatus.com/">
                  <button type="button" className="upgrade-success-button-main">
                    View status
                  </button>
                </Link>
                <button
                  type="button"
                  className="upgrade-success-button-secondary"
                  onClick={handleDismiss}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
