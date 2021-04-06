import Common from "../Common/Common.jsx";
import web from "../Images/website.svg";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        visit="/blogs"
        imgsrc={web}
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
