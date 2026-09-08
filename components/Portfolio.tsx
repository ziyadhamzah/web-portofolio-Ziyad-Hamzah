"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { projects, certificates, type Project } from "@/lib/data";
import ProjectDetail from "./ProjectDetail";
import LogoLoop from "./LogoLoop";
import { techLogos } from "./techLogos";

type Tab = "projects" | "certificates" | "techstack";

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("projects");
  const [selected, setSelected] = useState<Project | null>(null);

  const headRef = useReveal<HTMLDivElement>();
  const tabsRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="portfolio"
      className="py-28 md:py-32 bg-black bg-grid bg-[length:40px_40px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* HEADER */}
        <div ref={headRef} className="reveal">
          <h2 className="font-display text-[30px] sm:text-[38px] md:text-[48px] font-extrabold tracking-tight mb-3.5">
            Portfolio Showcase
          </h2>

          <p className="text-muted mb-12">
            Explore my journey through projects, certifications, and technical
            expertise.
          </p>
        </div>

        {/* TABS */}
        <div
          ref={tabsRef}
          className="reveal inline-flex bg-card border border-border rounded-full p-1.5 gap-1 mb-14"
        >
          {(
            [
              { id: "projects", label: "Projects" },
              { id: "certificates", label: "Certificates" },
              { id: "techstack", label: "Tech Stack" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-2.5 rounded-full text-sm transition-all duration-250 ${
                tab === t.id
                  ? "bg-white text-black font-semibold"
                  : "text-muted hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ========================= */}
        {/* PROJECTS */}
        {/* ========================= */}

        {tab === "projects" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left animate-fadeInUp">
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => setSelected(project)}
                className="bg-card border border-border rounded-card overflow-hidden text-left transition-all duration-250 hover:-translate-y-1.5 hover:border-[#3a3a3a]"
              >
                <div className="h-[140px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center font-extrabold text-lg text-[#666] border-b border-border px-4 text-center">
                  {project.title}
                </div>

                <div className="p-5">
                  <h3 className="text-[17px] mb-2">{project.title}</h3>

                  <p className="text-[13px] text-muted mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted">
                      {project.link ?? "No Link"}
                    </span>

                    <span className="border border-[#444] px-4 py-2 rounded-full text-xs inline-flex items-center gap-1.5 transition-all hover:bg-white hover:text-black">
                      Details →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ========================= */}
        {/* CERTIFICATES */}
        {/* ========================= */}

        {tab === "certificates" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left animate-fadeInUp">
            {certificates.length > 0 ? (
              certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-card border border-border rounded-card p-6"
                >
                  <div className="h-[100px] rounded-xl bg-[#141414] mb-4" />

                  <h4 className="text-[15px] mb-1">{cert.title}</h4>

                  <p className="text-xs text-muted mb-3">
                    {cert.issuer} • {cert.date}
                  </p>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      className="text-xs underline text-muted hover:text-white"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <span className="text-xs text-muted2">No Link</span>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-card border border-dashed border-border rounded-card p-8 text-center col-span-full">
                <div className="h-[80px] rounded-xl bg-[#141414] mb-4 mx-auto max-w-xs" />

                <h4 className="text-[15px] mb-1">
                  Belum ada sertifikat ditambahkan
                </h4>

                <p className="text-xs text-muted">
                  Certificates will appear here
                </p>
              </div>
            )}
          </div>
        )}

        {/* ========================= */}
        {/* TECH STACK */}
        {/* ========================= */}

        {tab === "techstack" && (
          <div className="animate-fadeInUp w-full">
            <div
              className="
                relative
                w-full
                h-[300px]
                md:h-[360px]
                bg-[#0c0c0c]
                border
                border-[#292929]
                rounded-[24px]
                overflow-hidden
                flex
                items-center
              "
            >
              <LogoLoop
                logos={techLogos}
                speed={24}
                direction="left"
                logoHeight={58}
                gap={82}
                fadeOut={true}
                fadeOutColor="#0c0c0c"
                ariaLabel="Technology stack"
                pauseOnHover={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* PROJECT DETAIL */}
      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
