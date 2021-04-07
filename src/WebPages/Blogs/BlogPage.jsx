import BlogProps from "./BlogProps.jsx";
import BlogArr from "./BlogData.js";
import { useParams } from "react-router-dom";

function BlogPage() {
  const { blogId } = useParams();

  return (
    <>
      {BlogArr.map((item) => {
        if (item.id === blogId)
          return (
            <BlogProps
              imgsrc={item.img}
              title_1={item.title_1}
              content_1={item.content_1}
              title_2={item.title_2}
              content_2={item.content_2}
              title_3={item.title_3}
              content_3={item.content_3}
              title_4={item.title_4}
              content_4={item.content_4}
              title_5={item.title_5}
              content_5={item.content_5}
              title_6={item.title_6}
              content_6={item.content_6}
            />
          );
      })}
    </>
  );
}

export default BlogPage;
