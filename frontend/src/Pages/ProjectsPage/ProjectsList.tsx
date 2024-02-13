import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import s from './ProjectsList.module.scss'
import axios from 'axios';

type Props = {}

export default function ProjectsList({ }: Props) {
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
      <Header />
      <div className={s.projects}>

        {projects.map((el) => <>
          <span className={s.name}>{el.name}</span> <span className={s.date}>{el.pushed_at}</span>
          <p className={s.link}>{el.html_url}</p>
          <p className={s.description}>{el.description}</p>
          <p className={s.lang}>{el.all_languages.map((lang) => <>{lang}{', '}</>)}</p>
          <span style={{ fontSize: '10px' }}>release</span> <span className={s.release}>0.1</span>
          <hr />
        </>)
        }

      </div>


    </div>
  )
}