import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Finance App",
    description:
      "A system that organizes my finances, tracks bills, credit cards, investments, assets, and financial indicators.",
    image: "/projects/project1.jpeg",
    tags: ["Nextjs", "Typescript", "TailwindCSS", "PostgreSQL", "Prisma", "Recharts"],
    link: "#",
    github: "https://github.com/renansouz/finance-app",
  },
  {
    title: "RentEase",
    description:
      "Streamlines the process of finding and listing rental properties. Landlords can publish and manage flats; renters can search, favorite, and chat in real time",
    image: "/projects/project2.png",
    tags: ["Angular", "TailwindCSS", "Firebase", "RxJS", "GitHub Actions"],
    link: "https://rentease-greystone.web.app/",
    github: "https://github.com/renansouz/rentEase-ng",
  },
  {
    title: "MeetFlow",
    description:
      "Ccheduling platform for professionals and users. MeetFlow simplifies the appointment booking process, making it more efficient for both service providers and clients.",
    image: "/projects/project3.jpg",
    tags: ["React", "Typescript", "Nodejs", "Fastify", "Jest", "MongoDB", "Redis", "TailwindCSS", "React Router DOM", "Zod", "Shadcn-UI", "Dayjs", "Axios"],
    link: "#",
    github: "https://github.com/renansouz/MeetFlow-OBC",
  },
  {
    title: "Neo Voyage",
    description:
      "Responsive website designed to facilitate exchange experiences in Canada. With a focus on expert guidance and comprehensive support.",
    image: "/projects/project6.jpeg",
    tags: ["Javascript", "Bootstrap", "HTML5"],
    link: "https://neo-voyage.vercel.app/",
    github: "https://github.com/renansouz/Neo-Exchange-Agency",
  },
  {
    title: "Ace Kanban",
    description:
      "powerful and intuitive task management tool designed to help individuals and teams organize their workflow efficiently.",
    image: "/projects/project4.png",
    tags: ["Angular", "Firebase", "TailwindCSS"],
    link: "https://r-blog-eta.vercel.app/",
    github: "https://github.com/renansouz/kanban-ng",
  },
  {
    title: "R-Blog",
    description:
      "A sleek and modern blog interface built with React, TypeScript, and Material UI, focused on clean design and responsive layout.",
    image: "/projects/project5.png",
    tags: ["React", "Typescript", "Material UI"],
    link: "https://r-blog-eta.vercel.app/",
    github: "https://github.com/renansouz/R-blog-react-MUI",
  },
  {
    title: "Housewarming",
    description:
      "A minimalist, high-contrast, bilingual gift registry application, focus on providing a clean, 'above-the-fold' experience for friends and family to contribute to a new home.",
    image: "/projects/project7.png",
    tags: ["Nextjs", "Typescript", "TailwindCSS", "PostgreSQL", "i18n"],
    link: "housewarming-app-orcin.vercel.app",
    github: "https://github.com/renansouz/housewarming-app",
  },
  {
    title: "Agribusiness Data Exploratory Analysis",
    description:
      "Exploratory data analysis in R on a structured agribusiness dataset, focusing on statistical profiling and data visualization.",
    image: "/projects/project8.png",
    tags: ["R", "ggplot2", "Excel", "dplyr"],
    link: "#",
    github: "https://github.com/renansouz/agribusiness-data-analysis-r",
  },
];

export const Projects = () => {
  return (
        <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            <span className="font-serif italic font-normal text-white">
              {" "}
              projects
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link === "#" ? <span></span>  : <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>}
                  
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/renansouz?tab=repositories" target="_blank">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};