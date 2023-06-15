import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import {RiFileEditFill} from 'react-icons/ri';

const EditCurrentPost = ({ post, editPath, title, setIsFetch }) => {
  const [editValue, setEditValue] = useState("");
  const [isEditValue, setIsEditValue] = useState(false);
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [titleUa, setTitleUa] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [descriptionUa, setDescriptionUa] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");

  const { t } = useTranslation();

  const inputFileRef = useRef(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const handleEditButtonSave = () => {
    const formData = new FormData();
    formData.append("blogImage", image);
    formData.append("titleUa", titleUa);
    formData.append("titleRu", titleRu);
    formData.append("descriptionUa", descriptionUa);
    formData.append("descriptionRu", descriptionRu);
    formData.append("postId", post._id);
    setIsEditValue((isEdit) => !isEdit);

    fetch("http://localhost:4444/update-post", {
      method: "PATCH",
      body: formData,
    }).then((res) => res.json());
    setTimeout(() => {
      // window.location.reload();
      setIsFetch((state) => !state);
    }, 1000);
  };

  const handleEditButton = () => {
    setIsEditValue((state) => !state);
    setTitleUa(post.titleUa);
    setTitleRu(post.titleRu);
    setDescriptionUa(post.descriptionUa);
    setDescriptionRu(post.descriptionRu);
  };

  const removeImage = () => {
    setImage(null);
    setImageSrc(null);
  };

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    setImage(e.target.files[0]);
  };

  const handleRemovePost = () => {
    fetch("http://localhost:4444/remove-post", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: post._id,
        filename: post.blogImage,
      }),
    });
    setTimeout(() => {
      // window.location.reload();
      setIsFetch((state) => !state);
    }, 1000);
  };

  const handleContentChangeUa = (value) => {
    setDescriptionUa(value);
  };
  const handleContentChangeRu = (value) => {
    setDescriptionRu(value);
  };

  return (
    <div className="edit_blog_item">
        <div className="item_nema_edit">
            <div className="img_wrap">
            {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Selected"
                    
                  />
                ) : (
                  <img
                    src={`http://localhost:4444${post.blogImage}`}
                    alt="Selected"
                    
                  />
                )}
            </div>
          <p>{post.titleUa}</p>
          {isEditValue ? (
            <AiFillCloseCircle
              onClick={() => setIsEditValue((state) => !state)}
              
            />
          ) : (
            <RiFileEditFill
              onClick={handleEditButton}
              
            />
          )}
        </div>
        {isEditValue && (
          <div className="edit_curent_post">
            <div className="post_info">
            <button onClick={() => inputFileRef.current.click()}>
            {t(`Choose a photo`)}
            </button>

            <input
              type="file"
              name="img"
              onChange={handleImageChange}
              ref={inputFileRef}
              hidden
            />
            <div >
              <div
                
              >
                {imageSrc ? (
                  <img
                    className="edit_post_img"
                    src={imageSrc}
                    alt="Selected"
                    
                  />
                ) : (
                  <img
                    className="edit_post_img"
                    src={`http://localhost:4444${post.blogImage}`}
                    alt="Selected"
                    
                  />
                )}
              </div>
              <div>
                <p>{t(`Title in Ukrainian`)}</p>
                <input
                  value={titleUa}
                  onChange={(e) => setTitleUa(e.target.value)}
                />
              </div>
              <div>
                <p>{t(`The title is in Russian`)}</p>
                <input
                  value={titleRu}
                  onChange={(e) => setTitleRu(e.target.value)}
                />
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <div>
                <p>{t(`Description in Ukrainian`)}</p>
                <ReactQuill
                className="textarea"
                value={descriptionUa}
                onChange={handleContentChangeUa}
              //  modules={{ toolbar: toolbarOptions }}
               />
              </div>
              <div>
                <p>{t(`Description in Russian`)}</p>
                <ReactQuill
                  className="textarea"
                  value={descriptionRu}
                  onChange={handleContentChangeRu}
                  //  modules={{ toolbar: toolbarOptions }}
               />
              </div>
            </div>
            <button onClick={handleEditButtonSave}>{t(`Save changes`)}</button>
            <button onClick={handleRemovePost}>{t(`Delete the post`)}</button>
            {/* <button onClick={setIsEditValue((isEdit) => !isEdit)}>Закрити без змін</button> */}
            </div>
          </div>
        )}
    </div>
  );
};

export default EditCurrentPost;
