import TeamHero from './Hero/Hero.jsx';
import Board from './Board/Board.jsx';
import Leaders from './Leaders/Leaders.jsx';
import Members from './Members/Members.jsx';
import PastMembers from './PastMembers/PastMembers.jsx';
import WebsiteCreators from './WebsiteCreators/WebsiteCreators.jsx';
import './style.css'
const TeamPage = () => {
  return (
    <>
    
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
      <TeamHero />
      <section id="container">
      <Board />
      <Leaders />
      <Members />
      <PastMembers />
      <WebsiteCreators />
      </section>
    </>
  );
}

export default TeamPage;
