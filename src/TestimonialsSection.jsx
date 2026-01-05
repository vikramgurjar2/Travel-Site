import React from "react";

const testimonials = [
  {
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike Taylor",
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
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&h=200&fit=crop&crop=faces",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Heading */}
        <div>
          <p className="uppercase tracking-widest text-grayish">Testimonials</p>
          <h2 className="mt-3 font-volkhov text-4xl sm:text-5xl leading-tight text-navy">
            What people say
            <br /> about Us.
          </h2>
          <p className="mt-6 text-grayish max-w-md">
            Our clients send us bunch of smilies with our services and we love
            them.
          </p>

          {/* Pagination dots to mimic Figma */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-3 w-3 rounded-full bg-purple"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Right: Card Stack */}
        <div className="relative">
          {/* Background blur bubble */}
          <div className="absolute -top-6 -right-10 h-32 w-32 rounded-full bg-purple/10 blur-2xl" />

          {/* Back card */}
          <div className="relative ml-12 rounded-3xl bg-white p-8 shadow-card w-full max-w-md opacity-80">
            <div className="flex items-start gap-4">
              <img
                src={testimonials[1].avatar}
                alt={testimonials[1].author}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-grayish">{testimonials[1].quote}</p>
                <div className="mt-4">
                  <p className="font-semibold text-navy">{testimonials[1].author}</p>
                  <p className="text-sm text-grayish">{testimonials[1].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Front card (overlapping) */}
          <div className="absolute -top-10 left-0 rounded-3xl bg-white p-8 shadow-card w-full max-w-lg">
            <div className="flex items-start gap-4">
              <img
                src={testimonials[0].avatar}
                alt={testimonials[0].author}
                className="h-16 w-16 rounded-full object-cover shadow-md -mt-6"
                loading="lazy"
              />
              <div>
                <p className="text-grayish">{testimonials[0].quote}</p>
                <div className="mt-4">
                  <p className="font-semibold text-navy">{testimonials[0].author}</p>
                  <p className="text-sm text-grayish">{testimonials[0].role}</p>
                </div>
              </div>
            </div>

            {/* Accent floating element to match Figma */}
            <div className="absolute -right-6 -bottom-6 h-16 w-16 rounded-xl bg-accent/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
