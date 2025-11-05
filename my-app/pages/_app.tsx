import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './tweak-apps.css';
import './partners.css';
import './plan.css';
import './team.css';
import './faq.css';
import './projects.css';
import './company.css';
import './payment/confirmation.css';
import './projects/debit-card.css';
import './access/link.css';
import './maintenance/upgrade.css';
import './workstation/client/mecp.css';
import './privacy-policy.css';
import './terms-of-service.css';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* FAVICON  */}
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
         {/* TITLE  */}
        <title>Build and Run 🎈</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}


export default CustomApp;
