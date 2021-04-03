import Card from "./Card";
import CardData from "./CardData";

function Service() {
  return (
    <>
      <h1 className="text-center mt-5">Our Services</h1>
      <div className="container mb-5">
        <div className="row">
          {CardData.map((item) => (
            <Card imgsrc={item.img} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
