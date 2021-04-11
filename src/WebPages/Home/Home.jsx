import Common from "../Common/Common.jsx";
import web from "../Images/website.svg";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        subContent="“Life is a series of problem-solving opportunities.  The problems you face will either defeat you or develop you depending on how you respond to them.”"
        content="We are team of powerful developers making various blogs about productivity."
        visit="/ReactLiveWebsite/blogs"
        imgsrc={web}
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
