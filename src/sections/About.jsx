import { Code2, ShieldCheck, Brain, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description:
      "Frontend, APIs, and databases working as one system.",
  },
  {
    icon: Brain,
    title: "AI & Data",
    description:
      "Building data-driven applications through predictive analysis, modeling, and machine learning workflows.",
  },
  {
    icon: Globe,
    title: "Global View",
    description: "Experience across Brazil and Canada shaped a practical approach to different users and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Real World",
    description:
      "Internal systems and support work reinforced the value of clarity, reliability, and consistency.",
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
              A quick <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                introduction
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Started in tech support, where fixing hardware and tracing issues
                 taught how systems break and how to read them properly. That 
                 same mindset still drives the work: understand the flow first, 
                 then write the code. 
              </p>
              <p>
                Most of the work sits between frontend, backend, and data. 
                Clean structure, predictable behavior, and readable code matter 
                more than noise or decoration.
              </p>
              <p>
                Beyond development, I spend a lot of time exploring how systems 
                behave through data, performance, and real-world usage. From 
                predictive analysis projects to studying software architecture, 
                curiosity has always been part of the way I learn and build.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "The deeper the understanding becomes, the clearer it is that there will always be more left to discover."
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