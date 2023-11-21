import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import BlogItem from "./BlogItem";
import "../../style/blog.scss";
import { BASE_URL } from "../../http/BaseUrl";
const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/get-all-post`)
      .then((res) => res.json())
      .then((res) => setAllPosts(res.reverse()))
      .catch((error) => {
        console.log('error',error);
      });
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
