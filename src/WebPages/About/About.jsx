import Common from "../Common/Common.jsx";
import web from "../Images/personal.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        visit="/ReactLiveWebsite/contact"
        imgsrc={web}
        btnName="Contact Now"
      />
    </>
  );
}

export default About;
