import {profile} from "./data/portfolio";
import { primaryButton, secondaryButton } from "./utils/classes";

function Hero(){
    const initials = profile.name
    .split("")
    .map((part) => part[0])
    .join("");

    return(
        <section id="top" className="bg-white">
           <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 md:flex-row mid:text-left">
             <div 
             aria-hidden="true"
             className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-5xl font-bold text-white">
                {initials}
            </div>
            <div>
                <p className="font-medium text-cyan-700">Hello, i am</p>
                <h1 className="mt-4 max-w-xl text-slate-600">{profile.name}

                </h1>
                <p className="mt-2 text-xl text-slate-600">{profile.role}

                </p>
                <p className="mt-4 max-w-xl text-slate-600">{profile.tag}

                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                    <a href="#projects" className={primaryButton}>
                        View my projects
                    </a>
                    <a href={`malito:${profile.email}`} className={secondaryButton}>
                        Email me
                    </a>
                </div>
            </div>
           </div>
        </section>
    )
}

export default Hero