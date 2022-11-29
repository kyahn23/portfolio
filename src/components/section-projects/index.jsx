import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  console.log(project)
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          github={project.github}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
