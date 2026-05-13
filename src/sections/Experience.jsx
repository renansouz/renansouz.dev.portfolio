const job_experiences = [
  {
    period: "may 2025 — jan 2026",
    role: "System Developer Junior",
    company: "Premier Insurance Canada",
    description:
      "Develop and maintain internal applications used by brokers and underwriters to manage insurance policies for multiple business lines (construction, fleet, professional, and services).",
    technologies: ["Javascript", "Java", "PolicyCenter", "SmartCOMM", "Bitbucket"],
    current: false,
  },
  {
    period: "oct 2024 — jan 2026",
    role: "Product Process Specialist",
    company: "Best Buy",
    description:
      "Optimized product and inventory data across internal systems to ensure accuracy, compliance, and minimal variance, reinforcing structured data management skills",
    technologies: [""],
    current: false,
  },
  {
    period: "fev 2024 — set 2024",
    role: "IT Analyst",
    company: "Teleperformance",
    description:
      "Managed user provisioning, access controls, and deprovisioning processes across systems including Active Directory, Azure, CMS, and ADManager, ensuring data accuracy and security compliance.",
    technologies: ["Azure", "Active Directory", "CMS", "ADManager"],
    current: false,
  },
 
];

const academic_experiences = [
  { 
    period: "2026",
    role: "Associate Degree in Artificial Intelligence",
    company: "FIAP",
    description:
      "Focused on artificial intelligence fundamentals, data analysis, and machine learning concepts through practical projects and software development activities.",
    technologies: ["Python", "R", "Machine Learning", "C", "Oracle"],
    current: false,
  },
  {
    period: "2024",
    role: "Diploma in Frontend Development",
    company: "Greystone College Canada",
    description:
      "Specialized in modern frontend development, building responsive and interactive web applications using contemporary JavaScript frameworks and cloud-based services.",
    technologies: ["Angularjs", "Typescript", "Firebase", "TailwindCSS"],
    current: false,
  },
  {
    period: "2023",
    role: "Full Stack Javascript Development",
    company: "OneBitCode",
    description:
      "Completed hands-on training in full stack JavaScript development, covering frontend interfaces, backend APIs, databases, and scalable web application architecture.",
    technologies: ["Javascript", "Typescript", "React", "Nodejs", "Expressjs"],
    current: false,
  },
   {
    period: "2021",
    role: "Technical Course in System Development",
    company: "ETEC",
    description: "Built a strong foundation in software development, object-oriented programming, and application design for web, mobile, and desktop environments.",
    technologies: ["Mobile Application", "Web Application", "System Application"],
    current: false,
  },
]

export const Experience = () => {
  return (
    <>
      <section id="experience" className="py-32 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
            >
              Career Journey
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground"
            >
              <span className="font-serif italic font-normal text-white">
                experience
              </span>
            </h2>

            <p
              className="text-muted-foreground
            animate-fade-in animation-delay-200"
            >
              A timeline of my professional growth.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

            {/* Experience Items */}
            <div className="space-y-12">
              {job_experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="education" className="py-32 relative overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Academic Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-white">
              <span className="font-serif italic font-normal text-white">
                education
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A focused overview of my academic background and technical foundation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {academic_experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-primary via-cyan-400 to-blue-500" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    {idx + 1}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};