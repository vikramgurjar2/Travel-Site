import React from "react";
import playButton from "../assets/partners/play_button.svg";
import travellerImg from "../assets/partners/traveller_img.svg";
import aeroplaneImg from "../assets/partners/aeroplane.svg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-transparent pt-1">
      {/* Decorative background elements
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <img
          src={aeroplaneImg}
          alt=""
          className="w-full h-full object-contain"
        />
      </div> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-32 grid md:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Content */}
        <div className="relative z-10 text-center md:text-left">
          <p className="hero-tagline">Best Destinations around the world</p>

          <h1 className="mt-6 hero-heading">
            Travel, enjoy and live a new and full life
          </h1>

          <p className="mt-8 hero-description max-w-xl mx-auto md:mx-0">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <button className="hero-cta-button group">
              <span>Find out more</span>
              <div className="button-shadow"></div>
            </button>

            <button className="hero-play-button group">
              <div className="play-icon-wrapper">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  className="play-button-bg"
                >
                  <circle cx="26" cy="26" r="26" fill="#DF6951" />
                </svg>
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  className="play-icon"
                >
                  <path d="M0 1.5L12 7L0 12.5V1.5Z" fill="white" />
                </svg>
              </div>
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative z-10 mt-10 md:mt-0">
          <div className="relative">
            {/* Floating plane decoration */}
            {/* <div className="absolute -top-8 -left-8 w-20 h-20 z-20 hidden md:block animate-float">
              <img
                src={aeroplaneImg}
                alt=""
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div> */}

            {/* Main traveler image */}
            <div className="relative hero-image-container">
              <img
                src={travellerImg}
                alt="Happy traveler with luggage"
                className="relative z-10 w-full max-w-md md:max-w-2xl h-auto mx-auto hero-main-image"
                loading="lazy"
              />
              {/* Decorative shadow/glow effect */}
              <div className="hero-image-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
