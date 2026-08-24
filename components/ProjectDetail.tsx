"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/data";

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isHydroponik = project.slug === "hydroponik-iot";

  return (
    <div className="fixed inset-0 bg-black z-[500] overflow-y-auto pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-muted text-sm mb-8 transition-colors hover:text-white"
        >
          ← Back
        </button>

        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-extrabold mb-3">
          {project.title}
        </h2>
        <div className="w-10 h-[3px] bg-white mb-6" />
        <p className="text-muted max-w-xl mb-8 text-sm">
          {project.longDescription ?? project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex gap-3.5 flex-wrap mb-6">
              <div className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4.5 py-3.5">
                <span className="font-mono">&lt;/&gt;</span>
                <div>
                  <b className="block text-base">{project.technologies.length}+</b>
                  <span className="text-muted text-xs">Technologies Used</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4.5 py-3.5">
                <span>🗂</span>
                <div>
                  <b className="block text-base">{project.keyFeatures?.length ?? 0}+</b>
                  <span className="text-muted text-xs">Key Features</span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2.5">
              <span className="border border-[#444] rounded-full px-5 py-2.5 text-[13px] inline-flex items-center gap-1.5">
                🔗 {project.link ?? "No Link"}
              </span>
            </div>

            <div className="font-mono text-xs tracking-[1.5px] text-muted2 mt-8 mb-3 flex items-center gap-2">
              &lt;/&gt; Technologies Used
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[13px] border border-border bg-card px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-[#141414] px-3.5 py-2.5 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-br from-[#0d0d0d] to-[#050505] min-h-[220px]">
                {isHydroponik ? (
                  <div>
                    <h4 className="text-xl font-extrabold mb-4">Hydroponik IoT</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs text-muted">
                      <div className="bg-[#141414] rounded-lg p-3">pH Monitoring</div>
                      <div className="bg-[#141414] rounded-lg p-3">TDS / PPM</div>
                      <div className="bg-[#141414] rounded-lg p-3">Water Temperature</div>
                      <div className="bg-[#141414] rounded-lg p-3">Air Temperature</div>
                      <div className="bg-[#141414] rounded-lg p-3">Water Level</div>
                      <div className="bg-[#141414] rounded-lg p-3">Control System</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-xl font-extrabold">{project.title}</h4>
                    <p className="text-muted text-xs mt-2">Preview not available</p>
                  </div>
                )}
              </div>
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5.5 mt-5">
                <h5 className="flex items-center gap-2 text-sm mb-3.5">⚙ Key Features</h5>
                <ul className="list-none">
                  {project.keyFeatures.map((feat) => (
                    <li key={feat} className="text-[13px] text-muted py-1.5 flex gap-2">
                      • {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
