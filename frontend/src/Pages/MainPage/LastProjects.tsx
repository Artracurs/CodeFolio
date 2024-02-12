import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './LastProjects.module.scss';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://192.168.43.216:3002/github-languages/Artracurs`);
        setProjects(response.data); 
       
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={s.container}>
        {projects.slice(0, 9).map((project, index) => (
          <div key={index}>
            <strong className={s.title}><a href={project.html_url}>{project.name}</a></strong> - <span className={s.description}>{project.description !== 'No description' && project.description} </span>
          </div>
        ))}
    </div>
  );
};

export default ProjectsList;
