import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import BlogItem from "./BlogItem";
import "../../style/blog.scss";

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("http://91.206.30.132:4444/get-all-post")
      .then((res) => res.json())
      .then((res) => setAllPosts(res.reverse()));
  }, []);

  return (
    <div className="blog_content_wrap">
      {allPosts.length != 0 ? (
        <>
          {allPosts.map((post) => (
            <BlogItem key={post._id} post={post} />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Blog;
