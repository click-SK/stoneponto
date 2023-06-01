import React, {useState} from "react";
import AddNewPost from "./AddNewPost";
import EditPost from "./EditPost";
const AdminBlog = () => {
  const [addingNewPost, setAddingNewPost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const addingNewPostFunc = () => {
    setAddingNewPost(true);
    setEditPost(false);
  }

  const editPostFunc = () => {
    setEditPost(true);
    setAddingNewPost(false);
  }
  return (
    <div>
      <div className="admin_panel__header">
        <p className="admin_header__item" onClick={addingNewPostFunc}>Додати новий пост</p>
        <p className="admin_header__item" onClick={editPostFunc}>Редагувати пости</p>
      </div>
      {addingNewPost && <AddNewPost />}
      {editPost && <EditPost />}
    </div>
  );
};

export default AdminBlog;
