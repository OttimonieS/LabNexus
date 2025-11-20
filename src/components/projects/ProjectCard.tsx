import { Play, ArrowRight } from "lucide-react";
import { Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  stats: { live?: boolean; repo?: boolean; caseStudy?: boolean };
  impact?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <button className="flex items-center space-x-2 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Play size={16} />
            <span>Play Demo</span>
          </button>
        </div>
        <div className="absolute inset-0 border-2 border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[rgba(255,255,255,0.06)] rounded-md text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-space-grotesk font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-[#9AA7BD] mb-4">{project.summary}</p>

        <div className="space-y-3">
          {project.impact && (
            <div className="text-sm text-[#A4FF6F] font-medium">
              {project.impact}
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-3 border-t border-[rgba(255,255,255,0.06)] mt-3">
            {project.stats.live && (
              <div className="flex items-center text-[#22C55E] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] mr-2"></span>
                Live
              </div>
            )}
            {project.stats.repo && (
              <div className="flex items-center text-sm">
                <Github size={14} className="mr-1.5" />
                Repo
              </div>
            )}
            {project.stats.caseStudy && (
              <div className="flex items-center text-sm bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] bg-clip-text text-transparent font-medium">
                Case Study <ArrowRight size={14} className="ml-1" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
