import React from "react";

import rome from "../assets/partners/rome.svg";
import london from "../assets/partners/london.svg";
import europe from "../assets/partners/europe.svg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Full Europe",
      duration: "28 Days Trip",
      price: "$15k",
      image: europe,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Rome, Italy",
      duration: "10 Days Trip",
      price: "$5.42k",
      image: rome,
    },
    {
      id: 3,
      name: "London, UK",
      duration: "12 Days Trip",
      price: "$4.2k",
      image: london,
    },
  ];

  return (
    <section
      id="destinations"
      className="py-16 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-[#5E6282] mb-4 font-poppins">
            Top Selling
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#14183E] max-w-4xl mx-auto leading-tight font-volkhov">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="relative group cursor-pointer transition-all duration-300"
            >
              {/* Destination Card */}
              <div className="relative bg-white rounded-l-3xl shadow-lg overflow-hidden h-[400px] w-full max-w-[315px] mx-auto group-hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-[640px] w-full overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white  p-5 h-[130px]">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-normal text-[#5E6282] font-poppins">
                      {destination.name}
                    </h3>
                    <span className="text-lg font-normal text-[#5E6282] font-poppins">
                      {destination.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Navigation Icon */}
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0382 17.989 10.9158 18.0533C10.7935 18.1177 10.6534 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0136 17.6896 10.0021 17.5519L9.42086 10.579L2.44792 9.99771C2.31021 9.98627 2.18016 9.92951 2.07813 9.8363C1.9761 9.7431 1.90784 9.61871 1.88402 9.48258C1.8602 9.34646 1.88217 9.20628 1.94648 9.08397C2.0108 8.96166 2.11384 8.86411 2.23949 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1376 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                          fill="#080809"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-normal text-[#5E6282] font-poppins">
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative SVG Element */}
        <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 opacity-20">
          <svg
            width="98"
            height="254"
            viewBox="0 0 98 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.95817 14.2344C15.985 5.71795 33.7527 -7.37603 48.6094 8.37933C63.4661 24.1347 43.423 53.6228 31.5443 66.3974C25.6886 69.9459 13.4754 75.9784 11.4677 71.7202C8.95816 66.3974 7.45241 55.2196 28.0309 45.6387C41.248 39.961 69.7902 33.9286 78.2224 55.2196C82.0704 64.4457 82.7396 85.8787 54.6324 97.8017L19.4984 113.238M19.4984 113.238C6.11398 113.774 -13.1261 107.392 16.9888 77.5752C26.5252 72.9621 49.6133 63.6296 65.6746 63.2038C74.8763 65.1554 92.5772 74.8074 89.7665 97.8017C90.1011 102.415 83.8439 113.876 56.1382 122.819C49.7806 124.238 35.5597 127.183 29.5367 127.609L7.95439 130.803L19.4984 113.238ZM19.4984 113.238C28.2808 110.754 49.0085 106.531 61.6592 109.512C77.4727 113.238 83.7435 110.044 96.2913 130.803C98.4663 141.448 96.8936 163.272 73.2033 165.401C49.5129 167.53 34.2212 163.449 29.5367 161.143V141.448M29.5367 141.448C46.7691 143.045 83.7435 141.874 93.7818 124.415C98.6336 111.996 99.0017 86.6239 61.6592 84.4948C52.6248 84.8496 33.3513 85.9852 28.5329 87.6884L29.5367 125.48C47.1037 127.077 84.0446 134.635 91.2722 152.094C95.1202 162.207 96.3917 183.498 70.6937 187.756C61.1573 188.111 39.575 186.798 29.5367 178.708M29.5367 141.448V178.708M29.5367 141.448C40.4115 144.11 64.3696 151.455 73.2033 159.546C83.9108 168.417 99.604 190.418 76.7167 207.451C69.5225 210.112 50.4163 212.241 31.5443 199.466M29.5367 178.708L31.5443 199.466M29.5367 178.708C41.5827 187.224 66.1765 207.876 68.1841 222.354C69.0207 231.225 66.7788 249.713 51.119 252.694C47.1037 253.404 37.1658 253.333 29.5367 247.371L31.5443 199.466"
              stroke="#84829A"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
