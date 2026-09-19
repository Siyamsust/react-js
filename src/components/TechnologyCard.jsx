export default function TechnologyCard({ tech, onAdd, isAdded }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:scale-105 hover:shadow-md">
     <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[tech.category] || "bg-slate-100 text-slate-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{tech.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {tech.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5 text-sm">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          {tech.category}
        </span>
        <span className="text-slate-600">{tech.difficulty}</span>
        <span className="font-medium text-slate-800">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 font-semibold text-white ${
          isAdded
            ? "cursor-not-allowed bg-slate-400"
            : "bg-slate-900 hover:bg-slate-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
     </div>
  );
}    
