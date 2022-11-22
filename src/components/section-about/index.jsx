import React from 'react';

import Section from '../section';

const SectionAbout = ({ about, mail }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
        <p>
          <a href={`mailto:${mail}`}
            target="_blank" rel="noopener noreferrer">{mail}
          </a>
        </p>
      </div>
    </Section>
  );
};

export default SectionAbout;
