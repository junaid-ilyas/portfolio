import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Cpu, ExternalLink, FlaskConical, ScanLine } from 'lucide-react';
import { PROJECT_STUDIES } from '../data/scholarData';

const StudyImage = ({ image }) => (
  <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <img
      src={image.src}
      alt={image.alt}
      className="max-h-[680px] w-full object-contain"
      loading="lazy"
      decoding="async"
    />
    <figcaption className="border-t border-slate-100 px-4 py-3 text-xs font-medium text-slate-500">
      {image.caption}
    </figcaption>
  </figure>
);

export const ProjectStudyPage = ({ studyKey, onOpenContact }) => {
  const navigate = useNavigate();
  const study = PROJECT_STUDIES[studyKey];
  const ProjectIcon =
    studyKey === 'smartphone-document-scanner'
      ? ScanLine
      : studyKey === 'sesame-companion'
        ? Cpu
        : FlaskConical;

  if (!study) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center text-slate-900">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button onClick={() => navigate('/')} className="font-semibold underline underline-offset-4">
          Back to Portfolio
        </button>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
          {study.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-700"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-16 px-6 py-12 md:py-16">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <ProjectIcon className="h-3.5 w-3.5" />
              {study.category}
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{study.title}</h1>
            <p className="text-lg font-medium text-slate-500">{study.subtitle}</p>
            <p className="text-lg leading-relaxed text-slate-600">{study.intro}</p>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              {study.status}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.facts.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</div>
                <div className="text-sm font-semibold leading-relaxed text-slate-800">{value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {study.images?.length > 0 && (
          <section
            aria-label={`${study.title} screenshots`}
            className={studyKey === 'sesame-companion' ? 'grid gap-5 lg:grid-cols-2' : 'grid gap-5'}
          >
            {studyKey === 'sesame-companion' ? (
              <>
                <StudyImage image={study.images[0]} />
                <div className="flex flex-col gap-5">
                  {study.images.slice(1).map((image) => (
                    <StudyImage key={image.src} image={image} />
                  ))}
                </div>
              </>
            ) : (
              study.images.map((image) => <StudyImage key={image.src} image={image} />)
            )}
          </section>
        )}

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)] md:p-10">
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Project story</div>
            <p className="leading-relaxed text-slate-600">{study.story}</p>
          </div>
          <div className="flex min-h-44 flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-center text-white">
            <ProjectIcon className="h-14 w-14 text-cyan-300" strokeWidth={1.25} />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">{study.status}</span>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">What it explores</div>
            <h2 className="text-3xl font-bold tracking-tight">Project highlights</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {study.features.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl bg-slate-900 p-7 text-white md:p-10">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Tools and technologies</div>
            <h2 className="text-2xl font-bold">Built with</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((technology) => (
              <span key={technology} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Want to know more?</h2>
            <p className="mt-1 text-sm text-slate-500">Get in touch to discuss this project.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-50"
              >
                {link.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
