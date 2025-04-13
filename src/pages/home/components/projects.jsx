import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/path/to/image1.jpg",
    url: "https://project1.com",
    tags: ["React", "IoT", ""],
  },
  {
    id: 2,
    title: "ESP 32 Tetris",
    description: "A tetris game and board powered by ESP32",
    image: "/assets/esp32tetris.png",
    url: "https://project2.com",
    tags: ["C++", "C", "Embedded"],
  },
  {
    id: 3,
    title: "BMap",
    description: "A room occupancy analyzer using IoT",
    image: "/assets/bmap.png",
    url: "https://github.com/avyuktballari/bmap",
    tags: ["React", "IoT", "Embedded", "Java", "Spring Boot"],
  },

];

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    if (searchTerm === '') return projects;
    const term = searchTerm.trim().toLowerCase()

    return project.title.toLowerCase().includes(term) ||
        project.tags.some((tag) => tag.toLowerCase().includes(term))
  });

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="bg-dark text-darkest p-12 flex flex-wrap justify-center max-w-5xl mx-auto mt-5 rounded-2xl" id="projects">
      <div className="relative w-full mb-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-12 pr-4 rounded-full bg-light text-darkest placeholder:text-darkest/60 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all"
          placeholder="Search Projects"
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full space-y-4">
      {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-light rounded-2xl p-5  shadow-xl break-inside-avoid "
          >
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 mx-auto max-h-48 object-contain" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-500">{project.description}</p>
            
            <div className="flex flex-wrap justify-start">
              {project.tags.filter(Boolean).map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 mr-2 rounded-full bg-dark text-darkest font-medium mt-4"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 w-full text-center text-darkest hover:bg-darker rounded-full bg-dark hover:text-white transition"
>
  View Project
</a>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;
