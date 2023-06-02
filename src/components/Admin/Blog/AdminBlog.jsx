import React, {useState} from "react";
import AddNewPost from "./AddNewPost";
import EditPost from "./EditPost";
import '../../../style/editeBlog.scss'
const AdminBlog = () => {
  const [addingNewPost, setAddingNewPost] = useState(false);
  const [editPost, setEditPost] = useState(true);

  const addingNewPostFunc = () => {
    setAddingNewPost(true);
    setEditPost(false);
  }

  const editPostFunc = () => {
    setEditPost(true);
    setAddingNewPost(false);
  }
  return (
    <div className="admin_panel_blog">
      <div className="admin_panel_blog_header">
        <p className={`admin_panel_blog_header__item ${addingNewPost ? 'active_blog_item' : ''}`} onClick={addingNewPostFunc}>Додати новий пост</p>
        <p className={`admin_panel_blog_header__item ${editPost ? 'active_blog_item' : ''}`} onClick={editPostFunc}>Редагувати пости</p>
      </div>
      {addingNewPost && <AddNewPost />}
      {editPost && <EditPost />}
    </div>
  );
};

export default AdminBlog;
