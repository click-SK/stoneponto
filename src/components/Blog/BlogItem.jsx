import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
import ReactQuill from "react-quill";
const BlogItem = ({ post }) => {
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);
  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  let dateObj = new Date(post.createdAt);

  // Отримуємо значення дня, місяця і року
  let day = dateObj.getUTCDate();
  let month = dateObj.getUTCMonth() + 1; // Місяці починаються з 0, тому додаємо 1
  let year = dateObj.getUTCFullYear();

  // Створюємо новий рядок з перетвореними значеннями
  let formattedDate = day + "." + month + "." + year;
  return (
    <div className="blog_item">
      <div className="img_blog_wrap">
        <img src={`http://91.206.30.132:4444${post.blogImage}`} />
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
  );
};

export default BlogItem;
