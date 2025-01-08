import React from 'react';

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
    image: "/src/assets/esp32tetris.png",
    url: "https://project2.com",
    tags: ["C++", "C", "Embedded"],
  },
  {
    id: 3,
    title: "Busy Map",
    description: "A room occupancy analyzer using IoT",
    image: "/src/assets/bmap.png",
    url: "https://github.com/avyuktballari/bmap",
    tags: ["React", "IoT", "Embedded", "Python"],
  },
  
];

function Projects() {
  return (
    <section className="bg-dark text-darkest p-24 flex flex-wrap justify-center max-w-5xl mx-auto mt-10 rounded-3xl" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-light rounded-lg p-5 shadow-xl boing"
          >
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 mx-auto w-max" />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-500">{project.description}</p>
            <a href={project.url} className="text-blue-500 hover:underline">
              View Project
            </a>
            <div className="flex flex-wrap justify-start">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 mr-2 rounded-full bg-dark text-darkest font-medium boing mt-4"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;