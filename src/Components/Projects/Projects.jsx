import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard'; // Import default export
import style from "./Projects.module.css"

const Projects = () => {
  return (
    <section className={style.container} id='projects'>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />; // Pass the project prop
        })}
      </div>
    </section>
  );
};

export default Projects;
