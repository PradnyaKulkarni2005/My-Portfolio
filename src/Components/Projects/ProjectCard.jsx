import React from 'react';
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, imgSrc, description, skills, demo } }) => {
  return (
    <div className={style.outer}>
    <div className={style.card}>
      <img src={imgSrc} alt={title} className={style.image} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={style.skill}>{skill}</li>
        ))}
      </ul>
      <div className={style.links}>
        <a href={demo} className={style.link}>Demo</a>
      </div>
    </div>
    </div>
  );
};
export default ProjectCard;
