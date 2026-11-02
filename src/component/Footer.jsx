import { profile } from "./data/portfolio.js";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React and
        Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
