const projects = [
  "Croustillant App",
  "Site météo",
  "ScaleTheme App",
  "ThreeJsJourney",
  "Odyssey42",
];

export default function Projects() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project}
          className="group relative rounded-xl bg-white/5 border border-white/10 p-4 hover:border-emerald-400/40 transition"
        >
          <h4 className="text-white font-medium">{project}</h4>
          <p className="text-white/50 text-sm mt-1">Voir le projet →</p>

          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-emerald-400/10 transition" />
        </div>
      ))}
    </div>
  );
}
