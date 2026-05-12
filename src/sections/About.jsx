import { Code2, ShieldCheck, Brain, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description:
      "I can build the whole thing, from the hidden logic and databases to the interface people actually touch.",
  },
  {
    icon: Brain,
    title: "AI & Data",
    description:
      "Moving beyond just 'building apps' to understanding how they think and process the world around them.",
  },
  {
    icon: Globe,
    title: "Global View",
    description: "From Brazil to Vancouver, I've built tech for real people in different languages and cultures.",
  },
  {
    icon: ShieldCheck,
    title: "Real World",
    description:
      "Experience in insurance systems and tech support means I build things that actually work.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase z-0"> 
                The Story So Far
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Understanding the logic, <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                before writing the code.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I started out taking apart laptops and helping people fix their 
                tech, which eventually led me across the ocean to Vancouver. 
                I've spent the last few years jumping between the heavy-duty 
                logic of insurance systems and the fast-paced world of web apps.
              </p>
              <p>
                I don't just want to build things that work. I want to understand 
                why they work. That's what took me from standard development to 
                studying Artificial Intelligence. I'm currently obsessing over 
                how data can tell stories and make our applications actually smart.
              </p>
              <p>
                When I'm not in a code editor, I'm usually geeking out over the 
                latest hardware drops, reading up on tech news, or hanging out 
                in developer communities to see how the software world is evolving. 
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Knowledge is a horizon that keeps moving. The discipline to keep 
                walking is what separates those who use tools from those who truly 
                understand them."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};