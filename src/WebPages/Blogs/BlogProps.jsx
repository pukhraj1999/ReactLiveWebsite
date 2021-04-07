function BlogProps(props) {
  return (
    <>
      <div className="container mt-5">
        <img className="img-fluid" src={props.imgsrc} alt="" srcset="" />

        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_1}
        </h1>
        <p className="lead fs-2">{props.content_1}</p>
        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_2}
        </h1>
        <p className="lead fs-2">{props.content_2}</p>
        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_3}
        </h1>
        <p className="lead fs-2">{props.content_3}</p>
        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_4}
        </h1>
        <p className="lead fs-2">{props.content_4}</p>
        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_5}
        </h1>
        <p className="lead fs-2">{props.content_5}</p>
        <h1
          style={{ fontSize: "3rem", color: "rgb(174, 98, 245)" }}
          className="text-center mt-5"
        >
          {props.title_6}
        </h1>
        <p className="lead fs-2">{props.content_6}</p>
      </div>
    </>
  );
}

export default BlogProps;
