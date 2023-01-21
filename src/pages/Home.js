import React from 'react';
import AboutMe from '../components/aboutme/AboutMe';
import Hards from '../components/hardskills/HardsSkills';
import Projects from '../components/projects/Projects';
import Slider from '../components/slider/Slider';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <AboutMe />
      <Projects />
      <Hards />
    </div>
  );
}

export default Home;