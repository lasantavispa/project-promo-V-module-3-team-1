import React from 'react';
import Hero from '../Hero';
import ButtonCreateCard from '../ButtonCreateCard';
import ButtonSeeProjects from '../ButtonSeeProjects';
import { Link} from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Hero />
      <div className="twoButtons">
          <ButtonCreateCard />
          <ButtonSeeProjects />
      </div>
    </div>
  );
}

export default LandingPage;
