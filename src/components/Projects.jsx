function Projects() {
  const projects = [
    {
      title: "Natours",
      image: "project1.png",
      description:
        "A responsive travel landing page offering adventurous tours, built with modern layouts and visual design.",
      technologies: ["HTML5", "CSS"],
      link: "#",
    },
    {
      title: "Bankist",
      image: "project2.png",
      description:
        "A minimalist online banking interface with smooth transitions, mock accounts, and interactive money transfer logic.",
      technologies: ["HTML5", "CSS", "Javascript"],
      link: "#",
    },
    {
      title: "Forkify",
      image: "project3.png",
      description:
        "A recipe search app using a public API to browse, bookmark, and display over one million recipes.",
      technologies: ["Javascript", "HTML5", "Git"],
      link: "#",
    },
    {
      title: "Simon Game",
      image: "project4.png",
      description:
        "A classic memory game where players repeat light and sound patterns using colorful interactive buttons.",
      technologies: ["jQuery", "HTML5", "CSS"],
      link: "#",
    },
    {
      title: "Mapty",
      image: "project5.png",
      description:
        "A workout tracking app that uses geolocation and maps to log running and cycling sessions.",
      technologies: ["Javascript", "HTML5", "CSS"],
      link: "#",
    },
    {
      title: "Nexter",
      image: "project6.png",
      description:
        "A modern real estate homepage showcasing premium properties with grid layouts and clean responsive design.",
      technologies: ["HTML5", "Sass"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
