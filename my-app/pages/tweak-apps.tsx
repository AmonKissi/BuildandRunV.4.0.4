import Image from "next/image";
import BRlogo from "../public/img/logo/BRlogo.png";
import mBRlogo from "../public/img/logo/mBRlogo.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";

// ----- TWEAK IMAGE ----- //
// ----- MOVIES ----- //
import kickass from "../public/img/tweak-apps/movies/kickass.png";
import fmovies from "../public/img/tweak-apps/movies/fmovies.png";
import popcorn from "../public/img/tweak-apps/movies/popcorn.png";
import putlocker from "../public/img/tweak-apps/movies/putlocker.png";
import showbox from "../public/img/tweak-apps/movies/showbox.png";
import putlockermovies from "../public/img/tweak-apps/movies/putlocker-movies-space.png";
// ----- AI & BOTS ----- //
import chatgpt from "../public/img/tweak-apps/ai-bots/chatgpt.png";
import writesonic from "../public/img/tweak-apps/ai-bots/writesonic.png";
import midjourney from "../public/img/tweak-apps/ai-bots/midjourney.png";
import removebg from "../public/img/tweak-apps/ai-bots/removebg.png";
import quillbot from "../public/img/tweak-apps/ai-bots/quillbot.png";
import imagecolorpicker from "../public/img/tweak-apps/ai-bots/imagecolorpicker.png";
import sitesucker from "../public/img/tweak-apps/ai-bots/sitesucker.png";
import splitter from "../public/img/tweak-apps/ai-bots/splitter.png";
import somiibo from "../public/img/tweak-apps/ai-bots/somiibo.png";
import donotpay from "../public/img/tweak-apps/ai-bots/donotpay-second.png";
import loom from "../public/img/tweak-apps/ai-bots/loom.png";
import soundbolt from "../public/img/tweak-apps/ai-bots/soundbolt.png";
import naturalreader from "../public/img/tweak-apps/ai-bots/naturalreader.png";
import cleverbot from "../public/img/tweak-apps/ai-bots/cleverbot.png";
import animaker from "../public/img/tweak-apps/ai-bots/animaker.png";
// ----- EDITORS ----- //
import inshot from "../public/img/tweak-apps/editors/inshot.png";
import lightricks from "../public/img/tweak-apps/editors/lightricks.png";
import noelshack from "../public/img/tweak-apps/editors/noelshack.png";
import photoshopfix from "../public/img/tweak-apps/editors/photoshopfix.png";
import removebged from "../public/img/tweak-apps/editors/removebged.png";
import iloveimg from "../public/img/tweak-apps/editors/iloveimg.png";
// ----- CRYPTOCURRENCIES ----- //
import algorand from "../public/img/tweak-apps/cryptocurrencies/algorand.png";
import binance from "../public/img/tweak-apps/cryptocurrencies/binance.png";
import bitcoin from "../public/img/tweak-apps/cryptocurrencies/bitcoin.png";
import cardano from "../public/img/tweak-apps/cryptocurrencies/cardano.png";
import ethereum from "../public/img/tweak-apps/cryptocurrencies/ethereum.png";
import internetcomputer from "../public/img/tweak-apps/cryptocurrencies/internet-computer.png";
import polkadot from "../public/img/tweak-apps/cryptocurrencies/polkadot.png";
import polygon from "../public/img/tweak-apps/cryptocurrencies/polygon.png";
import rally from "../public/img/tweak-apps/cryptocurrencies/rally.png";
import shibainu from "../public/img/tweak-apps/cryptocurrencies/shiba-inu.png";
import solana from "../public/img/tweak-apps/cryptocurrencies/solana.png";
import tether from "../public/img/tweak-apps/cryptocurrencies/tether.png";
import uniswap from "../public/img/tweak-apps/cryptocurrencies/uniswap.png";



// import  from "../public/img/tweak-apps/cryptocurrencies/.png";


export function Index() {

  /*
   * Build and Run v.2.0.2 Index.
   *
   * Note: The corresponding styles are in the ./tweak-apps.css file.
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
          <span>The Tweak Apps section is your one-stop-shop for finding applications and software that can simplify your online life.</span>
          <div></div>
          <span></span>
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

        {/* TWEAK APPS  */}

        <div className="tweak-apps">

          {/* SECTION  */}

          <div className="movies">
            <div className="tweak-title">
              <h1>Movies 🎬</h1>
            </div>
            <p>Most popular movie apps that allow you to watch all movies for free.</p>
            <div className="slider" id="slider-spacer">
              <div className="slides">
                <div id="movies-1">
                  {/* MODULE */}
                  <div><a href="https://kickass.sx/home/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={kickass} alt="kickass" />
                        </div>
                        <h3 className="cardi__title">Kickass Torrents
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Download µTorrent or BitTorrent) </p>
                      </div>
                      <div className="cardi__date">
                        ⭐⭐⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="movies-2">
                  {/* MODULE */}
                  <div><a href="https://ww4.fmovies.co/24/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={fmovies} alt="fmovies" />
                        </div>
                        <h3 className="cardi__title">FMovies
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Online Users Only) </p>
                      </div>
                      <div className="cardi__date">
                        ⭐⭐⭐⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="movies-3">
                  {/* MODULE */}
                  <div><a href="https://github.com/popcorn-official/popcorn-desktop/releases" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={popcorn} alt="popcorn" />
                        </div>
                        <h3 className="cardi__title">Popcorn Time
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Runs on all devices)</p>
                      </div>
                      <div className="cardi__date">
                        ⭐⭐⭐⭐⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="movies-4">
                  {/* MODULE */}
                  <div><a href="https://www2.putlockers.ws/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={putlocker} alt="putlocker" />
                        </div>
                        <h3 className="cardi__title">Putlocker
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Online Users Only)</p>
                      </div>
                      <div className="cardi__date">
                        ⭐⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="movies-5">
                     {/* MODULE */}
                    <div><a href="https://putlocker-movies.space/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-movie-five">
                          <Image src={putlockermovies} alt="putlockermovies" />
                        </div>
                        <h3 className="cardi__title">Putlocker Movies Space
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Online Users Only)</p>
                      </div>
                      <div className="cardi__date">
                        ⭐⭐⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="movies-6">
                   {/* MODULE */}
                   <div><a href="https://bestforandroid.com/apk/showbox/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={showbox} alt="showbox" />
                        </div>
                        <h3 className="cardi__title">Showbox
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">All recent and new movies (Android Users Only)</p>
                      </div>
                      <div className="cardi__date">
                        ⭐
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>

              </div>
              <div className="number-selector">
                <a href="#movies-1">1️⃣</a>ㅤ|
                ㅤ<a href="#movies-2">2️⃣</a>ㅤ|
                ㅤ<a href="#movies-3">3️⃣</a>ㅤ|
                ㅤ<a href="#movies-4">4️⃣</a>ㅤ|
                ㅤ<a href="#movies-5">5️⃣</a>ㅤ|
                ㅤ<a href="#movies-6">6️⃣</a>
              </div>
            </div>
          </div>
          {/* SECTION  */}
          <div className="divider2"></div>
          {/* SECTION  */}

          <div className="ai-bots">
            <div className="tweak-title">
              <h1>AI & Bots 🤖</h1>
            </div>
            <p>Most advance artificial intelligence tools that will make your life much more easier.</p>
            <div className="slider" id="slider-spacer">
              <div className="slides">
                <div id="ai-bots-1">
                  {/* MODULE */}
                  <div><a href="https://openai.com/blog/chatgpt/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={chatgpt} alt="chatgpt" />
                        </div>
                        <h3 className="cardi__title">Chat GPT
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Top of OpenAI's which can do anything you ask. </p>
                      </div>
                      <div className="cardi__date">
                        🎴
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-2">
                  {/* MODULE */}
                  <div><a href="https://writesonic.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={writesonic} alt="writesonic" />
                        </div>
                        <h3 className="cardi__title">Writesonic
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Alternative to Chat GPT with better user-interface. </p>
                      </div>
                      <div className="cardi__date">
                        🀄️
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-3">
                  {/* MODULE */}
                  <div><a href="https://midjourney.com/home/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={midjourney} alt="midjourney" />
                        </div>
                        <h3 className="cardi__title">Midjourney
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">OpenAI that creates images based on textual descriptions. </p>
                      </div>
                      <div className="cardi__date">
                        🌄
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-4">
                  {/* MODULE */}
                  <div><a href="https://www.remove.bg/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={removebg} alt="removebg" />
                        </div>
                        <h3 className="cardi__title">Remove Bg
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">AI removes any image background. </p>
                      </div>
                      <div className="cardi__date">
                        🔳
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-5">
                  {/* MODULE */}
                  <div><a href="https://quillbot.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={quillbot} alt="quillbot" />
                        </div>
                        <h3 className="cardi__title">Quillbot
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Paraphrasing tool that helps you re-write all your essays.</p>
                      </div>
                      <div className="cardi__date">
                        🖊️
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-6">
                  {/* MODULE */}
                  <div><a href="https://imagecolorpicker.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={imagecolorpicker} alt="ImageColorPicker" />
                        </div>
                        <h3 className="cardi__title">ImageColorPicker
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Gives your picture, image color code when uploaded.</p>
                      </div>
                      <div className="cardi__date">
                        🍭
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-7">
                  {/* MODULE */}
                  <div><a href="https://ricks-apps.com/osx/sitesucker/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={sitesucker} alt="Sitesucker" />
                        </div>
                        <h3 className="cardi__title">Sitesucker
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Ultimate tool that copies any website.</p>
                      </div>
                      <div className="cardi__date">
                        🖲
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-8">
                  {/* MODULE */}
                  <div><a href="https://splitter.ai/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={splitter} alt="Splitter" />
                        </div>
                        <h3 className="cardi__title">Splitter
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Removes any vocals or audio from music.</p>
                      </div>
                      <div className="cardi__date">
                        🎹
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-9">
                  {/* MODULE */}
                  <div><a href="https://somiibo.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={somiibo} alt="Somiibo" />
                        </div>
                        <h3 className="cardi__title">Somiibo
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Social media automation platform for marketing.</p>
                      </div>
                      <div className="cardi__date">
                        📣
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-10">
                  {/* MODULE */}
                  <div><a href="https://donotpay.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={donotpay} alt="DoNotPay" />
                        </div>
                        <h3 className="cardi__title">DoNotPay
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">First robot lawyer which also can cancel your free trials.</p>
                      </div>
                      <div className="cardi__date">
                        ⚖️
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-11">
                  {/* MODULE */}
                  <div><a href="https://www.loom.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={loom} alt="Loom" />
                        </div>
                        <h3 className="cardi__title">Loom
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Record your laptop screen, yourself and more.</p>
                      </div>
                      <div className="cardi__date">
                        💻
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-12">
                  {/* MODULE */}
                  <div><a href="https://soundbolt.me/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={soundbolt} alt="Soundbolt" />
                        </div>
                        <h3 className="cardi__title">Soundbolt
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Powerful Soundcloud and Audiomack plays tool.</p>
                      </div>
                      <div className="cardi__date">
                        🔊
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-13">
                  {/* MODULE */}
                  <div><a href="https://www.naturalreaders.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={naturalreader} alt="NaturalReader" />
                        </div>
                        <h3 className="cardi__title">Natural Reader
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Text-to-Speech reader which reads anything for you.</p>
                      </div>
                      <div className="cardi__date">
                        📒
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-14">
                  {/* MODULE */}
                  <div><a href="https://www.cleverbot.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={cleverbot} alt="cleverbot" />
                        </div>
                        <h3 className="cardi__title">Cleverbot
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Before Siri or Alexa, Cleverbot was your friend.</p>
                      </div>
                      <div className="cardi__date">
                        🦿
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="ai-bots-15">
                  {/* MODULE */}
                  <div><a href="https://www.animaker.com/voice" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image-title" id="ai-bots-image">
                          <Image src={animaker} alt="animaker" />
                        </div>
                        <h3 className="cardi__title">Animaker Voice
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Human voice over with more than 50 languages.</p>
                      </div>
                      <div className="cardi__date">
                        🎼
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
              </div>
              <div className="number-selector">
                <a href="#ai-bots-1">1️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-2">2️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-3">3️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-4">4️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-5">5️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-6">6️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-7">7️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-8">8️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-9">9️⃣</a>ㅤ|
                ㅤ<a href="#ai-bots-10">🔟</a>


              </div>
            </div>
          </div>
          {/* SECTION  */}
          <div className="divider2"></div>
          {/* SECTION  */}

          <div className="editors">
            <div className="tweak-title">
              <h1>Editors 🎨</h1>
            </div>
            <p>Find the right tools to create and edit any art or image.</p>
            <div className="slider" id="slider-spacer">
              <div className="slides">
                <div id="editors-1">
                  {/* MODULE */}
                  <div><a href="https://inshot.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={inshot} alt="inshot" />
                        </div>
                        <h3 className="cardi__title">Inshot
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Be Creative with filters, effects and stickers.</p>
                      </div>
                      <div className="cardi__date">
                        IPhone, Android
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="editors-2">
                  {/* MODULE */}
                  <div><a href="https://www.lightricks.com/products" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={lightricks} alt="Lightricks" />
                        </div>
                        <h3 className="cardi__title">Lightricks
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Make any of your art live!</p>
                      </div>
                      <div className="cardi__date">
                        IPhone, Android
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="editors-3">
                  {/* MODULE */}
                  <div><a href="https://www.noelshack.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image">
                          <Image src={noelshack} alt="NoelShack" />
                        </div>
                        <h3 className="cardi__title">NoelShack
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Store image online for up to 3 months.</p>
                      </div>
                      <div className="cardi__date">
                        IPhone, Mac, Android, Windows
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="editors-4">
                  {/* MODULE */}
                  <div><a href="https://play.google.com/store/apps/details?id=com.adobe.adobephotoshopfix&hl=en_US&gl=US" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={photoshopfix} alt="photoshopfix" />
                        </div>
                        <h3 className="cardi__title">Photoshop Fix
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Excellent to heal any image.</p>
                      </div>
                      <div className="cardi__date">
                        Android
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="editors-5">
                  {/* MODULE */}
                  <div><a href="https://www.iloveimg.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={iloveimg} alt="iloveimg" />
                        </div>
                        <h3 className="cardi__title">ILoveIMG
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">Resize any image of your choice.</p>
                      </div>
                      <div className="cardi__date">
                        Mac, Windows
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="editors-6">
                  {/* MODULE */}
                  <div><a href="https://www.remove.bg/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="ai-bots-image">
                          <Image src={removebged} alt="removebged" />
                        </div>
                        <h3 className="cardi__title">Remove Bg
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">AI removes image background.</p>
                      </div>
                      <div className="cardi__date">
                        Mac, Windows
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
              </div>
              <div className="number-selector">
                <a href="#editors-1">1️⃣</a>ㅤ|
                ㅤ<a href="#editors-2">2️⃣</a>ㅤ|
                ㅤ<a href="#editors-3">3️⃣</a>ㅤ|
                ㅤ<a href="#editors-4">4️⃣</a>ㅤ|
                ㅤ<a href="#editors-5">5️⃣</a>ㅤ|
                ㅤ<a href="#editors-6">6️⃣</a>
              </div>
            </div>
          </div>
          {/* SECTION  */}
          <div className="divider2"></div>
          {/* SECTION  */}

          <div className="cryptocurrencies">
            <div className="tweak-title">
              <h1>Cryptocurrencies 🪙</h1>
            </div>
            <p>Top cryptocurrencies you will love to invest your money in.</p>
            <div className="slider" id="slider-spacer">
              <div className="slides">
                <div id="cryptocurrencies-1">
                  {/* MODULE */}
                  <div><a href="https://bitcoin.org/en/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={bitcoin} alt="bitcoin" />
                        </div>
                        <h3 className="cardi__title">Bitcoin
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                       Satoshi Nakamoto
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-2">
                    {/* MODULE */}
                    <div><a href="https://ethereum.org/en/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={ethereum} alt="ethereum" />
                        </div>
                        <h3 className="cardi__title">Ethereum
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Vitalik Buterin
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-3">
                    {/* MODULE */}
                    <div><a href="https://www.binance.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={binance} alt="Binance" />
                        </div>
                        <h3 className="cardi__title">Binance
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Changpeng Zhao
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-4">
                    {/* MODULE */}
                    <div><a href="https://cardano.org/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={cardano} alt="Cardano" />
                        </div>
                        <h3 className="cardi__title">Cardano
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Charles Hoskinson
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-5">
                    {/* MODULE */}
                    <div><a href="https://solana.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={solana} alt="Solana" />
                        </div>
                        <h3 className="cardi__title">Solana
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Anatoly Yakovenko
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-6">
                    {/* MODULE */}
                    <div><a href="https://www.algorand.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={algorand} alt="Algorand" />
                        </div>
                        <h3 className="cardi__title">Algorand
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Silvio Micali
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-7">
                    {/* MODULE */}
                    <div><a href="https://dfinity.org/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={internetcomputer} alt="internetcomputer" />
                        </div>
                        <h3 className="cardi__title">Internet Computer
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Dominic Williams
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-8">
                    {/* MODULE */}
                    <div><a href="https://polkadot.network/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={polkadot} alt="polkadot" />
                        </div>
                        <h3 className="cardi__title">Polkadot
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Gavin Wood
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-9">
                    {/* MODULE */}
                    <div><a href="https://polygon.technology/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={polygon} alt="polygon" />
                        </div>
                        <h3 className="cardi__title">Polygon
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Sandeep Nailwal
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-10">
                   {/* MODULE */}
                  <div><a href="https://rally.io/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={rally} alt="rally" />
                        </div>
                        <h3 className="cardi__title">Rally
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                       Kevin Chou
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-11">
                    {/* MODULE */}
                    <div><a href="https://shibatoken.com/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={shibainu} alt="shibainu" />
                        </div>
                        <h3 className="cardi__title">Shiba Inu
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Ryoshi
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-12">
                    {/* MODULE */}
                    <div><a href="https://uniswap.org/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={uniswap} alt="Uniswap" />
                        </div>
                        <h3 className="cardi__title">Uniswap
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ</p>
                      </div>
                      <div className="cardi__date">
                      Hayden Adams
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
                <div id="cryptocurrencies-13">
                        {/* MODULE */}
                        <div><a href="https://tether.to/" target="_blank">
                    <div className="cardi">
                      <div className="app-row">
                        <div className="tweak-image" id="cryptocurrencies-image">
                          <Image src={tether} alt="Tether" />
                        </div>
                        <h3 className="cardi__title">Tether
                        </h3>
                      </div>
                      <div className="app-row">
                        <p className="cardi__content">ᴀᴜᴛʜᴏʀ(s)</p>
                      </div>
                      <div className="cardi__date">
                      Brock Pierce, Craig Sellars, and Reeve Collins
                      </div>
                      <div className="cardi__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                          <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg>
                      </div>
                    </div></a>
                  </div>
                  {/* MODULE */}
                </div>
              </div>
              <div className="number-selector">
                <a href="#cryptocurrencies-1">1️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-2">2️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-3">3️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-4">4️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-5">5️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-6">6️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-7">7️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-8">8️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-9">9️⃣</a>ㅤ|
                ㅤ<a href="#cryptocurrencies-10">🔟</a>
              </div>
            </div>
          </div>
          {/* SECTION  */}
        </div>
        {/* TWEAK APPS  */}

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
