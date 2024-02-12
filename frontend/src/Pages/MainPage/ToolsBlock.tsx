import React from 'react';
import s from './ToolsBlock.module.scss';

type Props = {};

export default function ToolsBlock({}: Props) {
  const toolslist = [
    {
      frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'Angular', 'Vue.js'],
      backend: ['Node.js', 'Express', 'Django', 'Ruby on Rails', 'Java Spring', 'ASP.NET Core'],
      mobile: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
      dataScience: ['Python', 'R', 'Jupyter', 'TensorFlow', 'PyTorch', 'Pandas'],
      devOps: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'CI/CD pipelines'],
      embedded: ['Arduino', 'Raspberry Pi', 'ESP32', 'Microcontrollers'],
      database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis'],
      testing: ['Jest', 'Mocha', 'Enzyme', 'Cypress', 'Selenium'],
      tools: ['Git', 'SVN', 'Webpack', 'Gulp', 'Jenkins']
    }
  ];
  

  return (
    <div className={s.container}>
      <p>НАВЫКИ</p>
      <div style={{ textAlign: 'right', fontSize: '11px'}}>
        {toolslist.map((category, index) => (
          <React.Fragment key={index}>
            <h4>Frontend</h4>
            <div>{category.frontend.map(tool => <div key={tool}>{tool}</div>)}</div>
            <h4>Backend</h4>
            <div>{category.backend.map(tool => <div key={tool}>{tool}</div>)}</div>
            <h4>Embedded Systems</h4>
            <div>{category.embedded.map(tool => <div key={tool}>{tool}</div>)}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
