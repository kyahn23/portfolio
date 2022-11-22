import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about.desc}</p>
        <p>
          <a href={`mailto:${about.mail}`}
            target="_blank" rel="noopener noreferrer">{about.mail}
          </a>
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
