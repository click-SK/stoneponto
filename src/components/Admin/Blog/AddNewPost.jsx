import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewPost = () => {
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [titleUa, setTitleUa] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [descriptionUa, setDescriptionUa] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");
  const [inputKey, setInputKey] = useState(0); // Додано стан для key атрибуту

  const { t } = useTranslation();

  const toolbarOptions = [
    [{ 'size': ['small', false, 'large', 'huge'] }], // розмір шрифту
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // налаштування заголовків
    [{ 'color': ['red','white', 'black'] }, { 'background': ['red', 'grey', 'black', 'white'] }], // колір тексту та фону
  ];

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const inputFileRef = useRef(null);

  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    setImage(e.target.files[0]);
  };

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

        window.location.reload();
      })
      .catch((error) => {
        // Обробка помилки
        // console.log();
      });
  };

  const removeImage = () => {
    setImage(null);
    setImageSrc(null);
    setInputKey((prevKey) => prevKey + 1); // Збільшуємо значення key атрибуту
  };

  const handleContentChangeUa = (value) => {
    setDescriptionUa(value);
  };
  const handleContentChangeRu = (value) => {
    setDescriptionRu(value);
  };

  return (
    <div className="add_post_wrap">
      <div className="flex_row">
        <div className="photo_add_wrap">
          {!imageSrc && (
            <button onClick={() => inputFileRef.current.click()}>
              {t(`Choose a photo`)}
            </button>
          )}
          <input
            type="file"
            name="img"
            onChange={handleImageChange}
            ref={inputFileRef}
            hidden
            key={inputKey} // Додаємо key атрибут
          />
          <div className="photo_add">
            {imageSrc && (
              <>
                <img src={imageSrc} alt="Selected" />
                <button onClick={removeImage}>{t(`Remove`)}</button>
              </>
            )}
          </div>
        </div>
        <div className="title_wrap">
          <div className="title_item">
            <p>{t(`Title in Ukrainian`)}</p>
            <input
              value={titleUa}
              onChange={(e) => setTitleUa(e.target.value)}
            />
          </div>
          <div className="title_item">
            <p>{t(`The title is in Russian`)}</p>
            <input
              value={titleRu}
              onChange={(e) => setTitleRu(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="descript_wrap">
        <div className="descript_item">
          <p>{t(`Description in Ukrainian`)}</p>
          {/* <textarea
                value={descriptionUa}
                onChange={(e) => setDescriptionUa(e.target.value)}
              /> */}
          <ReactQuill
            className="textarea"
            value={descriptionUa}
            onChange={handleContentChangeUa}
            //  modules={{ toolbar: toolbarOptions }}
          />
        </div>
        <div className="descript_item">
          <p>{t(`Description in Russian`)}</p>
          <ReactQuill
            className="textarea"
            value={descriptionRu}
            onChange={handleContentChangeRu}
            //  modules={{ toolbar: toolbarOptions }}
          />
        </div>
      </div>
      <button onClick={createNewPost}>{t(`Create a post`)}</button>
    </div>
  );
};

export default AddNewPost;
