import {profile} from "./data/portfolio";

const links =[
    {label: "About", href:"#about"},
    {label: "Skills", href:"#skills"},
    {label: "Projects", href:"#projects"},
    {label: "Contact", href:"#contact"},
];

function Navbar (){
    return(
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav
            arai-label="Main"
            className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3 sm:justify-between sm:px-6 ">
                <a href="#top"
                className="hidden rounded-md font-bold focus-visible:ouline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 sm:block"
                >
                    {profile.name}
                </a>
                <ul className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-cyan-700"
                >
                    {links.map(({label, href}) =>(
                        <li key = {href}>
                            <a href="href">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar