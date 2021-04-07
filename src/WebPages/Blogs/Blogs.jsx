import Card from "./Card";
import CardData from "./CardData";

function Blogs() {
  return (
    <>
      <h1 className="text-center mt-5">Our Top Blogs</h1>
      <div className="container mb-5">
        <div className="row">
          {CardData.map((item) => (
            <Card
              link={item.link}
              imgsrc={item.img}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
