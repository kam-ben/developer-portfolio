import {profile} from "./data/portfolio";
import { primaryButton, secondaryButton } from "./utils/classes.js";

function Contact(){
     return (
    <section id="contact" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-4 max-w-xl text-slate-600">
          I am open to junior roles, internships and freelance projects. The
          fastest way to reach me is by email.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={primaryButton}>
            Email me
          </a>
          {profile.links.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={secondaryButton}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;