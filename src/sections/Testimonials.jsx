import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Renan consistently demonstrated strong attention to detail, professionalism, and clear communication. He collaborated effectively across teams, ensured operational accuracy, and was always dependable and supportive. I would confidently recommend him to any organization seeking a reliable and detail-oriented professional.",
    author: "Amir Mokhtari ",
    role: "Senior Computer solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFoyNc5xUiRbw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1675293907859?e=1780531200&v=beta&t=41Nx3B9yPyF8Jc5qfrplz30m2MIL15ctwfFmmBT1MTc",
  },
  {
    quote:
      "Renan stood out for his organized, well-structured work and clear communication. He consistently delivered high-quality results, making collaboration smooth and efficient. He always ensured the team had the information they needed and approached every task thoughtfully and professionally.”",
    author: "Simar Vashisht",
    role: "Guidewire Developer",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQEDkqGdXMqSOw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1641605096364?e=1780531200&v=beta&t=SHD7FPHzVmM67_Xl0gD6LmCngBHqHm-CnPvNqUZUwv0",
  },
  {
    quote:
      "Renan is an excellent teammate and a great professional to work with. He is always willing to learn, share knowledge, and support others. His dedication and growth mindset make him a valuable addition to any team.",
    author: "Giovana C. Ribeiro da Paixão",
    role: "Information Security Analyst",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFOR0vQcZoyDw/profile-displayphoto-scale_100_100/B4DZ3oNuyiHoAc-/0/1777717407975?e=1780531200&v=beta&t=bkF9tdhn-Zina0-_WxPMp7G8GPah-h-iereJ-wCHpSo",
  },
  {
    quote:
      "Renan is a versatile and dedicated professional who adapts well to any situation. During our project collaboration, he demonstrated strong technical and project management skills, always striving for excellence and supporting the team whenever needed. His commitment to learning and helping others makes him an outstanding teammate.",
    author: "Gabriel Sancinetti",
    role: "Frontend Developer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQF0Mrx2ZTJQXQ/profile-displayphoto-shrink_100_100/B4DZSpbqf3HYAU-/0/1738009389424?e=1780531200&v=beta&t=18utzALWrENJ34Tw5czD-RKnsmmDQGoZlqoKIWGZhbE",
  },
];


export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Testimonials
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Feedback from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              teammates.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};