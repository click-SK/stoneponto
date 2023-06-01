import React, { useState, useRef, useEffect } from "react";

const AddNewPost = () => {
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [titleUa, setTitleUa] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [descriptionUa, setDescriptionUa] = useState("");
  const [descriptionRu, setDescriptionRu] = useState("");

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

  console.log("image", image);

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
        window.location.reload();
      })
      .catch((error) => {
        // Обробка помилки
        console.log(error);
      });
  };

  const removeImage = () => {
    setImage(null);
    setImageSrc(null);
  };

  return (
    <div>
        <div>
          {!imageSrc && (
            <button onClick={() => inputFileRef.current.click()}>
              Вибрати фото
            </button>
          )}
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
              {imageSrc && (
                <>
                  <img
                    src={imageSrc}
                    alt="Selected"
                    style={{ width: "auto", height: "100%" }}
                  />
                  <button onClick={removeImage}>Видалити</button>
                </>
              )}
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
          <button onClick={createNewPost}>Створити пост</button>
        </div>
    </div>
  );
};

export default AddNewPost;
