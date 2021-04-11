import Common from "../Common/Common.jsx";
import web from "../Images/personal.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        content="We are team of powerful developers making various blogs about productivity."
        visit="/ReactLiveWebsite/contact"
        imgsrc={web}
        btnName="Contact Now"
      />
    </>
  );
}

export default About;
