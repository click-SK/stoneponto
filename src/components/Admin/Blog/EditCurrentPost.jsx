import React, {useState, useEffect, useRef} from 'react';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

const EditCurrentPost = ({post, editPath, title, setIsFetch}) => {
    const [editValue, setEditValue] = useState('');
    const [isEditValue, setIsEditValue] = useState(false);
    const [image, setImage] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [titleUa, setTitleUa] = useState("");
    const [titleRu, setTitleRu] = useState("");
    const [descriptionUa, setDescriptionUa] = useState("");
    const [descriptionRu, setDescriptionRu] = useState("");

    const inputFileRef = useRef(null);

    console.log('post',post);

    console.log('image',image);

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
    
        fetch('https://ponto-print.herokuapp.com/update-post', {
          method: 'PATCH',
          body: formData
        })
          .then((res) => res.json())
          setTimeout(() => {
            // window.location.reload();
            setIsFetch(state => !state)
          },1000)
      };

    const handleEditButton = () => {
        setIsEditValue((state) => !state);
        setTitleUa(post.titleUa)
        setTitleRu(post.titleRu)
        setDescriptionUa(post.descriptionUa)
        setDescriptionRu(post.descriptionRu)
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
        fetch('https://ponto-print.herokuapp.com/remove-post', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            postId: post._id,
            filename: post.blogImage
          })
        })
        setTimeout(() => {
          // window.location.reload();
          setIsFetch(state => !state)
        },1000)
      }

    return (
        <div style={{padding: '20px 0px'}}>
            <div>
            <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <p>{post.titleUa}</p>
            {isEditValue 
            ?
            <AiFillCloseCircle onClick={() => setIsEditValue((state) => !state)} style={{width:'auto', height:'30px'}}/>
            :
            <AiFillEdit onClick={handleEditButton} style={{width:'auto', height:'30px'}}/>}
            </div>
            {isEditValue && (
        <div>

          <button onClick={() => inputFileRef.current.click()}>
            Вибрати фото
          </button>

        <input
          type="file"
          name="img"
          onChange={handleImageChange}
          ref={inputFileRef}
          hidden
        />
        <div style={{ width: "100%" }}>
          <div
            style={{ width: "300px", height: "300px", margin: "20px 0px" }}
          >
            {imageSrc 
            ?
            <img
            src={imageSrc}
            alt="Selected"
            style={{ width: "auto", height: "100%" }}
          />
            :
            <img
            src={`https://ponto-print.herokuapp.com${post.blogImage}`} 
            alt="Selected"
            style={{ width: "auto", height: "100%" }}
          />}
          </div>
          <div>
            <p>Заголовок Українською</p>
            <input
              value={titleUa}
              onChange={(e) => setTitleUa(e.target.value)}
            />
          </div>
          <div>
            <p>Заголовок Російською</p>
            <input
              value={titleRu}
              onChange={(e) => setTitleRu(e.target.value)}
            />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <div>
            <p>Опис Українською</p>
            <textarea
              value={descriptionUa}
              onChange={(e) => setDescriptionUa(e.target.value)}
            />
          </div>
          <div>
            <p>Опис Російською</p>
            <textarea
              value={descriptionRu}
              onChange={(e) => setDescriptionRu(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleEditButtonSave}>Зберегти зміни</button>
        <button onClick={handleRemovePost}>Видалити пост</button>
      </div>
            )}
          </div>
        </div>
    );
};

export default EditCurrentPost;