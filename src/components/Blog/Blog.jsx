import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchLanguage} from '../../store/language'
import ReactQuill from 'react-quill';
import Loader from "../Loader/Loader";
import '../../style/blog.scss'

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const lang = useSelector((state) => state.lang.language);
  
  useEffect(() => {
    fetch("http://91.206.30.132:4444/get-all-post")
      .then((res) => res.json())
      .then((res) => setAllPosts(res.reverse()));
  }, []);

  useEffect(() => {
    dispatch(fetchLanguage())
  },[lang])


  return (
    <div className="blog_content_wrap">
      {allPosts.length != 0 ? (
        <>
          {allPosts.map((post) => (
          <div key={post._id} className="blog_item">
            <div className="img_blog_wrap">
              <img
                src={`http://91.206.30.132:4444${post.blogImage}`}
              />
            </div>
            <div className="content_wrap">
              <h3 className="title_blog_item">
                {lang == "Ua" ? <>{post.titleUa}</> : <>{post.titleRu}</>}
              </h3>
              <div className="date_item">
                <span>{formattedDate}</span>
              </div>
              <div className="blog_news">
                {lang == "Ua" ? (
                  <ReactQuill readOnly={true} value={post.descriptionUa} />
                ) : (
                  <ReactQuill readOnly={true} value={post.descriptionRu} />
                )}
              </div>
            </div>
          </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Blog;
