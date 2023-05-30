import React, { useState, useEffect } from "react";

const AdminBlog = () => {
  const [image, setImage] = useState(null);
  const [titleUa, setTitleUa] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [descriptionUa, setDescriptionUa] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [addNew, setAddNew] = useState(false);

  const formData = new FormData();

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    setImage(e.target.files[0]);
  };

  console.log('image',image);

//   const createNewPost = () => {
//     fetch('https://ponto-print.herokuapp.com/create-post', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         image,
//         // titleUa,
//         // titleRu,
//         // descriptionUa,
//         // descriptionRu,
//       }),
//     });
//   };

const createNewPost = () => {
    const formData = new FormData();
    formData.append("blogImage", image);
    formData.append("titleUa", titleUa);
    formData.append("titleRu", titleRu);
    formData.append("descriptionUa", descriptionUa);
    formData.append("descriptionRu", descriptionRu);
  
    fetch("https://ponto-print.herokuapp.com/create-post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Обробка відповіді сервера
        console.log(data);
      })
      .catch((error) => {
        // Обробка помилки
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => setAddNew((state) => !state)}>
        Почати створення нового поста
      </button>
      {addNew && (
        <div>
          <p>Створення нового поста</p>
          <p>Виберіть фото</p>
          <input type="file" name="img" onChange={handleImageChange} />
          <div style={{width: '50%'}}>
          <div>
            <p>Заголовок Українською</p>
            <input 
            value={titleUa}
            onChange={(e) => setTitleUa(e.target.value)}/>
          </div>
          <div>
            <p>Заголовок Російською</p>
            <input 
            value={titleRu}
            onChange={(e) => setTitleRu(e.target.value)}/>
          </div>
          </div>

          <div style={{width: '50%'}}>
          <div>
            <p>Опис Українською</p>
            <textarea
            value={descriptionUa}
            onChange={(e) => setDescriptionUa(e.target.value)}/>
          </div>
          <div>
            <p>Опис Російською</p>
            <textarea
            value={descriptionRu}
            onChange={(e) => setDescriptionRu(e.target.value)}/>
          </div>
          </div>
          <button onClick={createNewPost}>Створити пост</button>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
