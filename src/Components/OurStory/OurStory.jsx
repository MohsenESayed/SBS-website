import OurStoryHero from "./Hero/Hero";
import OurGoal from "./OurGoal/OurGoal";
import OurMission from "./OurMission/OurMission";
import OurServices from "./OurServices/OurServices";
import OurStory from "./OurStory/OurStory";
import OurVision from "./OurVision/OurVision";



const OurStoryPage = () => {
  return (
    <>
     <OurStoryHero />
     <OurMission />
     <OurGoal/>
     <OurServices />
     <OurStory />
     <OurVision />
    </>
  );
}

export default OurStoryPage;
