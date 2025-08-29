import React from "react";
import Greece from "../assets/partners/greece.svg";
import building from "../assets/partners/building.svg";
import plane from "../assets/partners/book_plane.svg";
import book from "../assets/partners/book.svg";
import arrow from "../assets/partners/arrow.svg";
import book2 from "../assets/partners/book2.svg";
import rome from "../assets/partners/rome_trip.svg";
import like from "../assets/partners/like.svg";

const steps = [
  {
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

export default function BookTripSection() {
  return (
    <section id="bookings" className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - 3-Step Process */}
        <div>
          <p className="uppercase tracking-widest mb-2">Easy and Fast</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-1"
            style={{
              fontFamily: "Volkhov",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "50px",

              textTransform: "capitalize",
              color: "#14183E",
            }}
          >
            Book your next trip in 3 easy steps
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#5E6282", fontFamily: "Poppins" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-grayish">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Side - Card Design with Overlapping Elements */}
        <div className="relative lg:pl-4">
          {/* Light Blue Gradient Background with Decorative Blur Elements */}

          {/* Large Decorative Blur Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-blue-300 rounded-full opacity-40 blur-3xl -translate-y-10 translate-x-10"></div>

          {/* Additional Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 rounded-full opacity-40 blur-xl"></div>

          {/* Main Card Container */}
          <div className="relative z-10 bg-white rounded-3xl p-6 shadow-card max-w-md mx-auto lg:mx-0">
            {/* Greece Trip Card */}
            <div className="relative mb-6">
              {/* Background Image */}
              <img
                src={Greece}
                alt="Trip To Greece"
                className="h-48 sm:h-56 w-full rounded-2xl object-cover mb-4"
                loading="lazy"
              />

              {/* Trip Info Overlay - positioned over the image */}
              {/* <div className="absolute bottom-8 left-4 text-white z-20">
                <h4 className="text-lg font-medium font-poppins">
                  Trip To Greece
                </h4>
                <div className="flex items-center space-x-2 text-sm opacity-90">
                  <span>14-29 June</span>
                  <div className="w-px h-4 bg-white opacity-50"></div>
                  <span>by Robbin joseph</span>
                </div>
              </div> */}
            </div>

            {/* Trip Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy">Trip To Greece</h3>
              <p className="text-grayish text-sm m-1">
                14-29 June | by Robbin joseph
              </p>

              {/* Decorative Icons */}
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mt-2 mb-2">
                  <img
                    src={plane}
                    alt="Plane icon"
                    className="h-9 w-9 opacity-60"
                  />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={book}
                    alt="Book icon"
                    className="h-9 w-9 opacity-60"
                  />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={arrow}
                    alt="Arrow icon"
                    className="h-9 w-9 opacity-60"
                  />
                </div>
              </div>

              {/* People Going and Heart */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-grayish text-sm">
                  <img src={building} alt="Building icon" className="h-5 w-5" />
                  <span>24 people going</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={like} alt="Like icon" className="h-5 w-5" />
                  {/* <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                </div>
              </div>
            </div>

            {/* Rome Trip Card - Positioned higher as in design reference */}
            {/* <div className="absolute md:-top-6 -right-6 hidden sm:block"> */}
            <div className="relative md:absolute md:bottom-20 md:-right-6 md:translate-x-1/3 ">
              <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 w-56 md:w-60">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-red-500 flex-shrink-0">
                      {/* Rome circular image placeholder */}
                      <img
                        src={rome}
                        alt="Rome"
                        className="w-full h-full object-cover"
                      />
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-blue-500 font-medium bg-blue-50 px-2 py-1 rounded whitespace-nowrap">
                        Ongoing
                      </span>
                      <h5 className="text-sm font-semibold text-navy font-poppins truncate">
                        Trip to rome
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Progress section */}
                <div className="space-y-2">
                  <div className=" items-center justify-between text-xs">
                    <span className="text-blue-500">40%</span>
                    <span className="text-grayish">completed</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Rome Trip Card */}
            {/* <div className="mt-6 bg-white rounded-2xl p-4 shadow-card border border-gray-100 sm:hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-navy font-poppins">
                      Trip to rome
                    </h5>
                    <span className="text-sm text-grayish">40% completed</span>
                  </div>
                </div>
                <span className="text-sm text-blue-500 font-medium">
                  Ongoing
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
