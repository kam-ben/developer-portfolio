import { skills } from "./data/portfolio.js";
const categories = [...new Set(skills.map((skill) => skill.category))];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Skills</h2>

        {skills.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
            No skills listed yet.
          </p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <h3 className="font-semibold">{category}</h3>
                <ul className="mt-4 space-y-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map(({ name, level }) => (
                      <li
                        key={name}
                        className="flex items-center justify-between gap-3"
                      >
                        <span>{name}</span>
                        <span
                          role="img"
                          aria-label={`${level} out of 5`}
                          className="flex gap-1"
                        >
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`h-2.5 w-2.5 rounded-full ${
                                dot <= level ? "bg-cyan-700" : "bg-slate-200"
                              }`}
                            />
                          ))}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;