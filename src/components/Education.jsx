import SectionHeading from "./SectionHeading.jsx";

const education = [
  { title: "BS Computer Science", detail: "University of Education, Township Lahore", status: "5th semester · In progress · 2026" },
  { title: "F.Sc Pre-Medical", detail: "Strong foundation in science", status: "1025 / 1100" },
  { title: "Matric — Science", detail: "Secondary education", status: "1003 / 1100" },
];

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Education" title="A science foundation, a future in technology." description="Studying computer science while building practical web development and digital communication experience." />
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {education.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-200 bg-white/75 p-6 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.08]">
            <p className="text-sm font-bold text-cyan">{item.status}</p>
            <h3 className="mt-3 font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
