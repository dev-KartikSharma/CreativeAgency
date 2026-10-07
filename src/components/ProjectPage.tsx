import React, { useState } from 'react';
import { ProjectDetail, PROJECTS_DATA } from '../data/projectsData';

interface ProjectPageProps {
  project: ProjectDetail;
  onBack: () => void;
  onOpenContact: () => void;
  onSelectProject?: (slug: string) => void;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
  project,
  onBack,
  onOpenContact,
  onSelectProject,
}) => {
  // Toggle between horizontal video (16:9) and vertical video (9:16)
  const [videoMode, setVideoMode] = useState<'horizontal' | 'vertical'>('horizontal');

  // List of all project keys to allow navigating to next project
  const allSlugs = Object.keys(PROJECTS_DATA);
  const currentIndex = allSlugs.indexOf(project.slug);
  const nextSlug = allSlugs[(currentIndex + 1) % allSlugs.length];
  const nextProject = PROJECTS_DATA[nextSlug];

  return (
    <article className="min-h-screen bg-[#111012] text-[#F9F8F6] selection:bg-[#E63B19] selection:text-[#111012]">
      {/* Top Breadcrumb & Nav Bar */}
      <nav
        aria-label="Project Navigation"
        className="sticky top-0 z-40 bg-[#111012]/90 backdrop-blur-md border-b border-[#2B2A28] px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between"
      >
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8D8B91] hover:text-[#E63B19] transition-colors cursor-pointer"
        >
          <span className="text-sm transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to All Works</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] sm:text-xs text-[#E63B19] uppercase tracking-widest">
            {project.num} / {project.category}
          </span>
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex px-3.5 py-1.5 border border-[#E63B19] text-[#E63B19] hover:bg-[#E63B19] hover:text-[#111012] font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Start a project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-4 sm:px-8 md:px-16 pt-10 sm:pt-16 pb-12 border-b border-[#2B2A28]">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-[#E63B19]">
            <span>{project.isAgencyShowcase ? "01 / Capabilities & Motion Reel" : `${project.num} / Selected Work`}</span>
            <span>✳</span>
            <span>{project.year}</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[108px] uppercase tracking-tight leading-[0.88] text-white mb-6">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#8D8B91] max-w-4xl font-normal leading-relaxed mb-10">
            {project.tagline}
          </p>

          {/* Metadata Grid */}
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#2B2A28] font-mono text-xs">
            <div>
              <dt className="text-[#8D8B91] uppercase tracking-wider text-[10px] mb-1.5">Client</dt>
              <dd className="text-white font-medium">{project.client}</dd>
            </div>
            <div>
              <dt className="text-[#8D8B91] uppercase tracking-wider text-[10px] mb-1.5">Role / Focus</dt>
              <dd className="text-white font-medium">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[#8D8B91] uppercase tracking-wider text-[10px] mb-1.5">Year</dt>
              <dd className="text-white font-medium">{project.year}</dd>
            </div>
            <div>
              <dt className="text-[#8D8B91] uppercase tracking-wider text-[10px] mb-1.5">Deliverables</dt>
              <dd className="text-[#E63B19] font-medium">{project.deliverables.length} Key Outputs</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Main Media Showcase (Video Player or Hero Visual) */}
      <section className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 bg-[#161518] border-b border-[#2B2A28]">
        <div className="max-w-6xl mx-auto">
          {project.videoHorizontal ? (
            <div>
              {/* Aspect Ratio Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E63B19] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                    {project.isAgencyShowcase ? "Official 30s Capabilities Showcase" : "Project Video Showcase"}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-[#111012] p-1 border border-[#2B2A28]">
                  <button
                    type="button"
                    onClick={() => setVideoMode('horizontal')}
                    className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                      videoMode === 'horizontal'
                        ? 'bg-[#E63B19] text-[#111012] font-bold'
                        : 'text-[#8D8B91] hover:text-white'
                    }`}
                  >
                    Horizontal (16:9 Widescreen)
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoMode('vertical')}
                    className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                      videoMode === 'vertical'
                        ? 'bg-[#E63B19] text-[#111012] font-bold'
                        : 'text-[#8D8B91] hover:text-white'
                    }`}
                  >
                    Vertical (9:16 Social Cut)
                  </button>
                </div>
              </div>

              {/* Video Player Container */}
              <div
                className={`relative mx-auto overflow-hidden bg-black border-2 border-[#2B2A28] shadow-2xl transition-all duration-500 ${
                  videoMode === 'horizontal' ? 'w-full aspect-video' : 'max-w-sm aspect-[9/16]'
                }`}
              >
                <video
                  key={videoMode}
                  controls
                  autoPlay
                  playsInline
                  muted
                  poster={project.videoPoster}
                  className="w-full h-full object-cover"
                >
                  <source
                    src={videoMode === 'horizontal' ? project.videoHorizontal : project.videoVertical}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="mt-4 text-center font-mono text-xs text-[#8D8B91]">
                {videoMode === 'horizontal'
                  ? 'Showing 16:9 Master Cinema Widescreen (1920×1080 @ 30 FPS)'
                  : 'Showing 9:16 Mobile & Social Feed Cut (1080×1920 @ 30 FPS)'}
              </p>
            </div>
          ) : project.heroImage ? (
            <div className="relative w-full overflow-hidden border border-[#2B2A28] bg-black">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto max-h-[750px] object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="border-b border-[#2B2A28] bg-[#111012]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2B2A28]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-8 sm:p-10 flex flex-col justify-end">
                <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white mb-2 leading-none">
                  {metric.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8D8B91]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Overview & Strategic Narrative */}
      <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-24 border-b border-[#2B2A28]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63B19] block mb-3">
              The Strategic Challenge
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              Overview & Philosophy
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans text-lg sm:text-xl text-[#F9F8F6] leading-relaxed">
              {project.overview}
            </p>

            <div className="p-6 sm:p-8 bg-[#18171A] border-l-4 border-[#E63B19] border-y border-r border-[#2B2A28]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8D8B91] block mb-3">
                Deliverables & Tooling
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 font-mono text-xs text-[#F9F8F6]">
                    <span className="text-[#E63B19]">✳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars / Breakdown */}
      {project.breakdown && project.breakdown.length > 0 && (
        <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-24 border-b border-[#2B2A28] bg-[#141316]">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
            <header className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E63B19]">
                Execution In Detail
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white">
                How We Make It Stick
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.breakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between p-8 bg-[#111012] border border-[#2B2A28] hover:border-[#E63B19]/50 transition-colors"
                >
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-4">
                      {item.heading}
                    </h3>
                    <p className="font-sans text-sm text-[#8D8B91] leading-relaxed mb-6">
                      {item.body}
                    </p>
                  </div>
                  {item.quote && (
                    <blockquote className="pt-4 border-t border-[#2B2A28] font-mono text-xs text-[#E63B19] italic">
                      "{item.quote}"
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-24 border-b border-[#2B2A28]">
          <div className="max-w-6xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63B19] block mb-6">
              Visual Archives
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, idx) => (
                <figure
                  key={idx}
                  className="group relative overflow-hidden bg-black border border-[#2B2A28]"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-80 sm:h-96 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <figcaption className="p-4 bg-[#111012] border-t border-[#2B2A28] font-mono text-xs text-[#8D8B91] flex items-center justify-between">
                    <span>{item.caption}</span>
                    <span className="text-[#E63B19]">0{idx + 1}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Teaser Bar */}
      {nextProject && onSelectProject && (
        <section className="px-4 sm:px-8 md:px-16 py-12 bg-[#141316] border-b border-[#2B2A28]">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#8D8B91] uppercase tracking-widest block mb-1">
                Next Project / {nextProject.num}
              </span>
              <span className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                {nextProject.title}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.slug)}
              className="px-5 py-2.5 bg-[#18171A] hover:bg-[#E63B19] hover:text-[#111012] border border-[#2B2A28] font-mono text-xs uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>View Case Study</span>
              <span>→</span>
            </button>
          </div>
        </section>
      )}

      {/* Bottom Conversion CTA */}
      <footer className="px-4 sm:px-8 md:px-16 py-20 bg-[#F9F8F6] text-[#111012]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E63B19] block mb-3 font-bold">
              Like what you see?
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88]">
              Let&apos;s build<br />
              <span className="text-[#E63B19]">together</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-8 py-5 bg-[#111012] text-[#F9F8F6] hover:bg-[#E63B19] hover:text-[#111012] font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-4 cursor-pointer"
            >
              <span>Start a project</span>
              <span>↗</span>
            </button>
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-5 border-2 border-[#111012] text-[#111012] hover:bg-[#111012] hover:text-[#F9F8F6] font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center cursor-pointer"
            >
              Back to all works
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};
