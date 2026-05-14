import { useState } from "react";
import { Button } from "../components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Angular",
  "Next.js",
  "TypeScript",
  "Python",
  "R", 
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions"
]

export const Hero = () => {
  const [particles] = useState(() =>
    [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
  );
  return (
    <section className="relative min-h-screen flex item-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="Hero image" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background "/>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: particle.left,
              top: particle.top,
              animation: `slow-drift ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">  
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Full-Stack · React · TypeScript
                </span>
            </div>

            <div className="space-y-4 ">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em]">
                 Renan Souza
                 <br />
                <span className="text-primary glow-text">Software Developer</span>
              
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Started in tech support, where tracing problems to the root became the habit.
                That same habit now goes into interfaces, APIs, and data work.
                The goal is software that reads clearly, behaves predictably, and solves the right problem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Renan-Silva-CV.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {
                [
                  { icon: FaGithub, href: "https://github.com/renansouz" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/renansilvadev/" },
                  { icon: FaTwitter, href: "https://x.com/renansilvadev" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                    {<social.icon className= "w-5 h-5"/>}
                  </a>
                  ))
              }
            </div>
          </div>
          {/* right */}
          <div className="relative animate-fade-in animation delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 m-2 glow-border" >
                <img src="/profile-photo.jpg" alt="Renan Silva" className="w-full aspect-4/5 object-cover rounded-2xl" />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className="text-sm font-medium">Available for work</span>
                  </div> 
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div className="shrink-0 px-8 py-4" key={i}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
  