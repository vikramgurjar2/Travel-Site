import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Plane icon - simplified version */}
          <path d="M32 8L48 32L32 56L16 32L32 8Z" fill="#029BC5"/>
          <path d="M32 16L44 32L32 48L20 32L32 16Z" fill="#E1E6E9"/>
          <circle cx="32" cy="32" r="4" fill="#3A556A"/>
        </svg>
      ),
      isActive: true,
      accentColor: "#DF6951"
    },
    {
      id: 2,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Satellite dish icon - simplified version */}
          <ellipse cx="32" cy="40" rx="20" ry="8" fill="#407093"/>
          <path d="M32 20L40 32L32 44L24 32L32 20Z" fill="#365E7D"/>
          <circle cx="32" cy="32" r="4" fill="#FFD086"/>
        </svg>
      ),
      isActive: false,
      accentColor: "#FFF1DA"
    },
    {
      id: 3,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: (
        <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
          {/* Placeholder for image */}
          <span className="text-gray-500 text-xs text-center">Image</span>
        </div>
      ),
      isActive: false,
      accentColor: "#FFF1DA"
    },
    {
      id: 4,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Power supply icon - simplified version */}
          <rect x="16" y="16" width="32" height="32" rx="4" fill="#B6C4CF"/>
          <rect x="24" y="24" width="16" height="16" fill="#9FACBA"/>
          <circle cx="32" cy="32" r="6" fill="#F8F7F7"/>
        </svg>
      ),
      isActive: false,
      accentColor: "#FFF1DA"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-[#5E6282] mb-4 font-poppins">
            CATEGORY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#14183E] max-w-4xl mx-auto leading-tight font-volkhov">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                service.isActive ? 'transform -translate-y-4' : 'hover:-translate-y-2'
              }`}
            >
              {/* Service Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg h-full ${
                service.isActive ? 'shadow-2xl' : 'shadow-md hover:shadow-xl'
              }`}>
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-xl font-semibold mb-4 ${
                    service.isActive ? 'text-[#1E1D4C]' : 'text-[#1E1D4C]'
                  } font-open-sans`}>
                    {service.title}
                  </h3>
                  <p className="text-[#5E6282] text-sm leading-relaxed font-poppins">
                    {service.description}
                  </p>
                </div>

                {/* Active State Accent */}
                {service.isActive && (
                  <div 
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl"
                    style={{ backgroundColor: service.accentColor }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Grid Pattern */}
        <div className="hidden lg:block absolute top-0 right-0 w-40 h-40 opacity-20">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-6 text-center text-2xl font-roboto ${
                  index === 0 ? 'text-[#FF7152]' : 
                  index === 10 ? 'text-[#6246E5]' : 'text-[#E5E5E5]'
                }`}
              >
                +
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
