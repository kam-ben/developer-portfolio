import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App (){
    return(
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            </main>
            
            <Footer />
        </div>
    );
}

export default App