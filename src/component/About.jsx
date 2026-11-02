import { profile,skills, projects } from "./data/portfolio";

function About (){
    const averageLevel =
    skills .length === 0
    ? 0
    :skills.reduce((sum,{level}) => sum + level, 0)/skills .length;
    const areaCount = new Set(skills.map((skill) => skill.category)).size;


    const stats = [
        {label: "projects built", value: projects.length},
        {label: "skills", value: skills.length},
        {label: "skill Area", value: areaCount},
        {label: "Average level", value: `${averageLevel.toFixed(1)}/5`},
    ]

    return(
        <section  id="about"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-bold">About me</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div className="space-y-4 text-slate-600">
                    {profile.about.map((paragraph) =>(
                        <p key={paragraph}>{paragraph}</p>
                    ))}

                    <p className="text-sm text-slate-500">Based in {profile.location}</p>
                </div>
                <dl className="grid grid-cols-2 gap-4">
                    {stats.map(({label, value}) => (
                        <div
                         key={label}
              className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                            <dt className="text-sm text-slate-500">{label}</dt>
                            <dd className="mt-1 text-2xl font-bold tabular-nums">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export default About