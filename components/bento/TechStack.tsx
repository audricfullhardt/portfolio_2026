const stack = [
    'React',
    'Next.js',
    'Nuxt',
    'Vue',
    'React Native',
    'Laravel',
    "C#",
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Symfony',
    'Node.js',
    'Docker',
  ];
  
  export default function TechStack() {
    return (
      <div className="mt-4 flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="
              px-4 py-2 rounded-full
              bg-white/10
              border border-white/20
              text-sm text-white/80
              hover:bg-emerald-400/20
              hover:border-emerald-400/40
              transition
            "
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }
  