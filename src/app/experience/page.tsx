import { experiences } from '@/lib/data';

export const metadata = {
  title: 'Experience | Rajon Dey',
  description: 'Professional roles and impact overview.',
};

export default function ExperiencePage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <ul className="space-y-10">
        {experiences.map(exp => (
          <li key={exp.title+exp.company} className="border-l-2 border-primary pl-4">
            <h2 className="text-xl font-semibold">{exp.title} <span className="text-primary">@ {exp.company}</span></h2>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">{exp.date}</p>
            <ul className="list-disc ml-5 space-y-2 text-sm text-textLight">
              {exp.description.map(d => <li key={d}>{d}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
