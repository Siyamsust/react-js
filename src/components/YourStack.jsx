export default function  YourStack({ stack, onRemove, onRemoveAll } )   
{ 
 return (
  <aside className="h-fit self-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h2 className="text-xl font-bold">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-6 rounded-lg bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          No technology selected yet. Pick one from the list to start building
          your stack.
        </p>
      ) : (
        <>
          <ul className="mt-5 grid grid-cols-1 gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{tech.name}</p>
                  <p className="truncate text-xs text-slate-500">
                    {tech.category}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  aria-label={`Remove ${tech.name}`}
                  className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-2.5 font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
 )

}