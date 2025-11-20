import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects as allProjects } from "../../data/projects";

const PROJECTS_PER_PAGE = 12;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const paginatedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setShowAll(false);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            Featured Projects
          </h2>
          <p className="text-[#9AA7BD] max-w-xl mt-2">
            Deep dives into systems I've engineered with measurable impact
          </p>
        </div>

        <ProjectFilter active={activeFilter} onChange={handleFilterChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-end gap-4 pt-8 border-t border-[rgba(255,255,255,0.06)]">
        {/* Items display */}
        <div className="text-sm text-[#9AA7BD] font-medium">
          {showAll
            ? `All ${filteredProjects.length}`
            : `${startIndex + 1}–${Math.min(
                endIndex,
                filteredProjects.length
              )} of ${filteredProjects.length}`}
        </div>

        {/* All button */}
        <button
          onClick={handleShowAll}
          className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
            showAll
              ? "bg-[rgba(0,229,255,0.1)] text-[#00E5FF] border border-[rgba(0,229,255,0.3)]"
              : "bg-[rgba(255,255,255,0.04)] text-[#9AA7BD] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.06)]"
          }`}
        >
          Show All
        </button>

        {/* Previous button */}
        {!showAll && (
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-all ${
              currentPage === 1
                ? "bg-[rgba(255,255,255,0.02)] text-[#5B6B7F] cursor-not-allowed"
                : "bg-[rgba(255,255,255,0.04)] text-[#9AA7BD] hover:bg-[rgba(255,255,255,0.08)]"
            }`}
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Page indicator */}
        {!showAll && (
          <div className="text-sm text-[#9AA7BD] font-medium">
            Page {currentPage} of {totalPages || 1}
          </div>
        )}

        {/* Next button */}
        {!showAll && (
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-all ${
              currentPage === totalPages
                ? "bg-[rgba(255,255,255,0.02)] text-[#5B6B7F] cursor-not-allowed"
                : "bg-[rgba(255,255,255,0.04)] text-[#9AA7BD] hover:bg-[rgba(255,255,255,0.08)]"
            }`}
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
