import React from 'react';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Full Europe",
      duration: "28 Days Trip",
      price: "$15k",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: 2,
      name: "Rome, Italy",
      duration: "10 Days Trip",
      price: "$5.42k",
      image: "https://images.unsplash.com/photo-1552832230-cb7e7c6f2c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "London, UK",
      duration: "12 Days Trip",
      price: "$4.2k",
      image: "https://images.unsplash.com/photo-1513632862744-2b6b0c0c0c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
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
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden h-[400px] w-full max-w-[315px] mx-auto group-hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-[270px] w-full overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 h-[130px]">
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
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L15 8L8 15L1 8L8 1Z" fill="#080809"/>
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
          <svg width="96" height="252" viewBox="0 0 96 252" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative pattern - simplified version */}
            <path
              d="M48 0C21.49 0 0 21.49 0 48C0 74.51 21.49 96 48 96C74.51 96 96 74.51 96 48C96 21.49 74.51 0 48 0ZM48 80C30.33 80 16 65.67 16 48C16 30.33 30.33 16 48 16C65.67 16 80 30.33 80 48C80 65.67 65.67 80 48 80Z"
              stroke="#84829A"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="48" cy="48" r="8" stroke="#84829A" strokeWidth="1" fill="none"/>
            <circle cx="48" cy="120" r="8" stroke="#84829A" strokeWidth="1" fill="none"/>
            <circle cx="48" cy="192" r="8" stroke="#84829A" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
