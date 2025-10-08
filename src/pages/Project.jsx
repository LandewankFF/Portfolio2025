import React, { useState, useMemo } from "react";
import { Search, Github, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Lanafa Temani - Tourism Platform",
      role: "Full Stack Developer & Business Analyst",
      description:
        "Platform digital untuk jasa periklanan & konten kreatif pariwisata. Meningkatkan visibilitas industri pariwisata melalui social media dan konten berkualitas tinggi.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      techStack: ["React.js", "Node.js", "Jenkins", "Figma", "Docker"],
      githubUrl: "https://github.com/landewank",
      demoUrl: "https://lanafatemani.com",
      date: "2024-07",
    },
    {
      id: 2,
      title: "RS Medika Nusantara - Healthcare Booking",
      role: "Full Stack Developer",
      description:
        "Platform informasi kesehatan dan booking dokter online. Menyediakan akses digital ke informasi healthcare dan sistem appointment yang user-friendly.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      techStack: ["React.js", "JavaScript", "Jenkins", "Figma"],
      githubUrl: "https://github.com/landewank",
      demoUrl: "https://rsmedikanusantara.com",
      date: "2025-06",
    },
    {
      id: 3,
      title: "Jenkins vs GitHub Actions Performance Analysis",
      role: "DevOps Engineer & Researcher",
      description:
        "Research project untuk menganalisis dan membandingkan performa Jenkins dan GitHub Actions dalam proses CI/CD. Mengukur efektivitas automation dalam mempercepat deployment.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      techStack: ["Jenkins", "GitHub Actions", "Docker", "React.js", "Node.js"],
      githubUrl: "https://github.com/landewank",
      demoUrl: null,
      date: "2024-01",
    },
    {
      id: 4,
      title: "CI/CD Pipeline Automation",
      role: "DevOps Engineer",
      description:
        "Implementasi dan optimasi CI/CD pipeline untuk deployment otomatis. Mengurangi deployment time hingga 60% dan meminimalkan human error dalam production release.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      techStack: ["GitLab CI/CD", "Docker", "Kubernetes", "Nginx"],
      githubUrl: null,
      demoUrl: null,
      date: "2023-12",
    },
  ];

  // Filter and sort projects based on search (newest to oldest)
  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // Sort by date (newest first)
    return result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Descending order (newest first)
    });
  }, [searchQuery, projects]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">My Projects</h1>
          <p className="text-gray-600 text-lg">
            A collection of my work in DevOps, Web Development, and IT
            Infrastructure
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by project title or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
          />
        </div>

        {searchQuery && (
          <p className="mt-3 text-sm text-gray-600">
            Found {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProjects.length > 0 ? (
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isEven }) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } flex flex-col md:flex`}
    >
      {/* Image Section */}
      <div
        className="relative md:w-5/12 h-64 md:h-auto overflow-hidden cursor-pointer"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            imageHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-red-600 transition-opacity duration-300 ${
            imageHovered ? "opacity-20" : "opacity-0"
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-red-600 mb-4">
            {project.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-red-50 text-red-700 text-sm font-medium rounded-full border border-red-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-400 font-medium rounded-lg cursor-not-allowed relative"
            >
              <Github className="w-4 h-4" />
              GitHub
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                Soon
              </span>
            </button>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-400 font-medium rounded-lg cursor-not-allowed relative"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                Soon
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
