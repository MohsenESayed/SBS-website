import TeamHero from './Hero/Hero.jsx';
import Board from './Board/Board.jsx';
import Leaders from './Leaders/Leaders.jsx';
import Members from './Members/Members.jsx';
import PastMembers from './PastMembers/PastMembers.jsx';
import WebsiteCreators from './WebsiteCreators/WebsiteCreators.jsx';

const TeamPage = () => {
  return (
    <>
      <TeamHero />
      <Board />
      <Leaders />
      <Members />
      <PastMembers />
      <WebsiteCreators />
    </>
  );
}

export default TeamPage;
