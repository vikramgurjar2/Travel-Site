import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike taylor",
    role: "Lahore, Pakistan",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Comparison dissimilar unpleasant six compliment two unpleasing any add. Yet late add name was rent long fat room.",
    author: "Chris Thomas",
    role: "CEO of Red Button",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Amazing service and wonderful experience. Would definitely recommend to others looking for quality travel solutions.",
    author: "Sarah Johnson",
    role: "Travel Blogger",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const scrollUp = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollDown = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading */}
        <div>
          <p className="uppercase tracking-widest text-grayish">Testimonials</p>
          <h2 className="mt-3 font-volkhov text-4xl sm:text-5xl leading-tight text-navy">
            What People Say
            <br /> About Us.
          </h2>
          <p className="mt-6 text-grayish max-w-md">
            Our clients send us bunch of smilies with our services and we love
            them.
          </p>

          {/* Interactive Pagination dots */}
          <div className="mt-10 flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? "h-3 w-3 bg-purple"
                    : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Card Stack */}
        <div className="relative">
          {/* Background blur bubble */}
          <div className="absolute -top-6 -right-10 h-32 w-32 rounded-full bg-purple/10 blur-2xl" />

          {/* Background card (next testimonial preview) */}
          {testimonials.length >= 0 && (
            <div className="relative ml-12 rounded-3xl bg-white p-8 shadow-card w-full max-w-md opacity-60">
              <div className="flex items-start gap-4">
                <img
                  src={
                    testimonials[(currentIndex + 1) % testimonials.length]
                      .avatar
                  }
                  alt={
                    testimonials[(currentIndex + 1) % testimonials.length]
                      .author
                  }
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-grayish text-sm line-clamp-3">
                    {
                      testimonials[(currentIndex + 1) % testimonials.length]
                        .quote
                    }
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-navy text-sm">
                      {
                        testimonials[(currentIndex + 1) % testimonials.length]
                          .author
                      }
                    </p>
                    <p className="text-xs text-grayish">
                      {
                        testimonials[(currentIndex + 1) % testimonials.length]
                          .role
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Front card (current testimonial) */}
          <div className="absolute -top-10 left-0 rounded-3xl bg-white p-8 shadow-card w-full max-w-lg transition-all duration-500">
            <div className="flex items-start gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="h-16 w-16 rounded-full object-cover shadow-md -mt-6"
                loading="lazy"
              />
              <div>
                <p className="text-grayish mb-4">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-navy">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-grayish">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Accent floating element */}
            {/* <div className="absolute -right-6 -bottom-6 h-16 w-16 rounded-xl bg-accent/10" /> */}
          </div>

          {/* Up/Down Navigation arrows positioned at rightmost */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col gap-2 z-20">
            <button
              onClick={scrollUp}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <button
              onClick={scrollDown}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
