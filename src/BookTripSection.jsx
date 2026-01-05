import React from "react";
import Greece from "../assets/partners/greece.svg";
import building from "../assets/partners/building.svg";
import plane from "../assets/partners/book_plane.svg";
import book from "../assets/partners/book.svg";
import arrow from "../assets/partners/arrow.svg";
import book2 from "../assets/partners/book2.svg";

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
    <section id="book" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - 3-Step Process (Your existing code) */}
        <div>
          <p className="uppercase tracking-widest text-grayish">
            Easy and Fast
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2">
            Book your next trip in 3 easy steps
          </h2>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="text-grayish">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Side - Card Design with Overlapping Elements (Updated design) */}
        <div className="relative">
          {/* Light Blue Gradient Background with Decorative Blur Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl opacity-60"></div>
          
          {/* Large Decorative Blur Circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-300 rounded-full opacity-40 blur-3xl -translate-y-10 translate-x-10"></div>
          
          {/* Additional Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 bg-purple-200 rounded-full opacity-40 blur-xl"></div>
          
          {/* Main Card Container */}
          <div className="relative z-10 bg-white rounded-3xl p-6 shadow-card max-w-md md:max-w-lg">
            {/* Greece Trip Card */}
            <div className="relative mb-6">
              {/* Background Image */}
              <img
                src={Greece}
                alt="Trip To Greece"
                className="h-56 w-full rounded-2xl object-cover mb-4"
                loading="lazy"
              />
              
              {/* Trip Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-medium font-poppins">Trip To Greece</h4>
                <div className="flex items-center space-x-2 text-sm opacity-90">
                  <span>14-29 June</span>
                  <div className="w-px h-4 bg-white opacity-50"></div>
                  <span>by Robbin joseph</span>
                </div>
              </div>
            </div>
            
            {/* Trip Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy">Trip To Greece</h3>
              <p className="text-grayish">14-29 June | by Robbin joseph</p>
              
              {/* Decorative Icons */}
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={plane} alt="Plane icon" className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={book} alt="Book icon" className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={arrow} alt="Arrow icon" className="h-5 w-5" />
                </div>
              </div>
              
              {/* People Going */}
              <div className="mt-4 flex items-center gap-2 text-grayish">
                <img src={building} alt="Building icon" className="h-5 w-5" />
                24 people going
              </div>
            </div>

            {/* Rome Trip Card (overlapping bottom-right, clamped inside viewport) */}
            <div className="relative md:absolute md:-bottom-10 md:-right-6 md:translate-x-1/4 md:translate-y-1/3">
              <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 w-60 md:w-64">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-lg font-medium text-navy font-poppins">Trip to rome</h5>
                  <span className="text-sm text-gray font-poppins">40% completed</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                  <div className="bg-purple h-1.5 rounded-full" style={{width: '40%'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray font-poppins">Ongoing</span>
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
