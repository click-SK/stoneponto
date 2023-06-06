import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import AddNewPost from "./AddNewPost";
import EditPost from "./EditPost";
import '../../../style/editeBlog.scss'
const AdminBlog = () => {
  const [addingNewPost, setAddingNewPost] = useState(false);
  const [editPost, setEditPost] = useState(true);

  const { t } = useTranslation();

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
        <p className={`admin_panel_blog_header__item ${addingNewPost ? 'active_blog_item' : ''}`} onClick={addingNewPostFunc}>{t(`Add a new post`)}</p>
        <p className={`admin_panel_blog_header__item ${editPost ? 'active_blog_item' : ''}`} onClick={editPostFunc}>{t(`Edit post`)}</p>
      </div>
      {addingNewPost && <AddNewPost />}
      {editPost && <EditPost />}
    </div>
  );
};

export default AdminBlog;
