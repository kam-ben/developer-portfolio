import { projects } from "./data/portfolio.js";

function Projects() {
  const sorted = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6"
    >
      <h2 className="text-2xl font-bold">Projects</h2>

      {sorted.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No projects yet.
        </p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {sorted.map(({ id, title, description, tech, repo, featured }) => (
            <li
              key={id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                {featured && (
                  <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-2 text-slate-600">{description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View code for ${title} on GitHub (opens in a new tab)`}
                  className="rounded-md font-semibold text-cyan-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                >
                  View code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Projects;
