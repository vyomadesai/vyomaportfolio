import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Play,
  Archive,
  Wrench,
} from "lucide-react";
import { projects } from "../data/mock";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Live", "In Development", "Completed", "Archived"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "from-green-400 to-teal-400";
      case "In Development":
        return "from-blue-400 to-purple-400";
      case "Completed":
        return "from-teal-400 to-blue-400";
      case "Archived":
        return "from-gray-400 to-gray-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Live":
        return Play;
      case "In Development":
        return Wrench;
      case "Completed":
        return Calendar;
      case "Archived":
        return Archive;
      default:
        return Calendar;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Tenor Sans, serif" }}
            >
              Featured <span className="text-teal-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? "bg-teal-400 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const StatusIcon = getStatusIcon(project.status);
              return (
                <div
                  key={project.id}
                  className="group bg-gray-700/30 rounded-2xl border border-gray-600 overflow-hidden hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-600 to-gray-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-gray-500/50">📱</div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`flex items-center space-x-1 bg-gradient-to-r ${getStatusColor(
                          project.status
                        )} text-white px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>

                    <p
                      className="text-gray-300 mb-4 leading-relaxed"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium bg-gray-600 text-gray-300 px-2 py-1 rounded hover:bg-teal-400/20 hover:text-teal-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}

                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Summary */}
          <div className="mt-16 bg-gradient-to-r from-teal-400/10 to-blue-400/10 p-8 rounded-2xl border border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Portfolio Overview
              </h3>
              <p
                className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                From healthcare platforms to e-commerce solutions, each project
                represents a commitment to quality, user experience, and
                technical excellence.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    2
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    Live Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm font-medium">
                    In Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">2</div>
                  <div className="text-gray-300 text-sm font-medium">
                    Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-400 mb-2">1</div>
                  <div className="text-gray-300 text-sm font-medium">
                    Archived
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
