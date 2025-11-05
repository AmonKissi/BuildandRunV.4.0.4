import React, { useState } from 'react';
import { AlertTriangle, ExternalLink, X, Wrench } from 'lucide-react';

// This component acts as a dismissible, full-screen notification
// for system maintenance or upgrades.
export default function MaintenanceUpgradeNotification() {

  const [isDismissed, setIsDismissed] = useState(false);

  // Function to dismiss the notification, setting state to hide the component
  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) {
    // If dismissed, return null to hide the component from the DOM
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900/90 backdrop-blur-sm fixed inset-0 z-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          /* Custom styles for the notification panel */
          .maintenance-panel {
              animation: fadeIn 0.5s ease-out;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
              border: 1px solid #374151; /* Dark border */
          }
          @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* --- Upgrade/Maintenance Notification Panel --- */}
      <div 
        className="maintenance-panel w-full max-w-xl p-6 md:p-8 bg-gray-800 rounded-xl text-white font-inter"
        role="alert"
        aria-live="assertive"
      >
        <div className="flex items-start space-x-4">
          
          {/* Icon Section */}
          <div className="flex-shrink-0 pt-1">
            <Wrench className="w-8 h-8 text-yellow-400" aria-hidden="true" />
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <p className="text-xl font-bold tracking-tight text-red-400 mb-1">
              Under Maintenance
            </p>
            <h1 className="text-2xl font-extrabold text-white mb-3">
              Admin Panel Upgrade in Progress
            </h1>
            <div className="text-gray-300 space-y-4">
              <p>
                We are performing a **critical upgrade** to the Build and Run Admin Panel to enhance security, performance, and introduce new features. 
              </p>
              <p className="font-semibold text-yellow-300">
                Temporary Downtime Notice: Access to certain administrative functions may be unavailable during this period.
              </p>
            </div>
            
            {/* Action Buttons Container */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              
              {/* View Status Button (Primary Action) */}
              <a 
                href="https://build-and-run.instatus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition duration-150 transform hover:scale-[1.02]"
              >
                View Live Status <ExternalLink className="ml-2 h-4 w-4" />
              </a>

              {/* Dismiss Button (Secondary Action) */}
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-600 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 transition duration-150"
                onClick={handleDismiss}
              >
                Dismiss Notice
              </button>
            </div>
          </div>
          
          {/* Close Button (Optional/Redundant, kept for user experience) */}
          <button
            type="button"
            className="p-1.5 text-gray-400 rounded-full hover:text-white hover:bg-gray-700 transition duration-150"
            onClick={handleDismiss}
            aria-label="Close notification"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}