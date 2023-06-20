import { useState, useRef } from 'react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [totalSizeFile, setTotalSizeFile] = useState(0);
  const inputFileRef = useRef(null);

  const getFileExtension = (filename) => {
    // Код для отримання розширення файлу
  };

  console.log('speed',speed);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setTotalSizeFile(file.size);
    console.log('file size',file.size);
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    setIsLoading(true);
    setProgress(0);
    setSpeed(0);

    const updateProgress = (event) => {
      const loaded = event.loaded;
      console.log('loaded',loaded);
      const total = event.total;
      console.log('total',total);


      const calculatedProgress = Math.round((loaded / total) * 100);
      console.log('calculatedProgress',calculatedProgress);
      setProgress(calculatedProgress);
    };

    const updateSpeed = (loaded, elapsedSeconds) => {
      const calculatedSpeed = Math.round((loaded / elapsedSeconds) / 1024);
      setSpeed(calculatedSpeed);
    };

    const calculateElapsedTime = (startTime) => {
      const currentTime = new Date().getTime();
      const elapsedSeconds = (currentTime - startTime) / 1000;
      return elapsedSeconds;
    };

    const handleProgressAndSpeed = (loaded, startTime) => {
      const elapsedSeconds = calculateElapsedTime(startTime);
      updateProgress({ loaded, total: loaded });
      updateSpeed(loaded, elapsedSeconds);
    };

    const finishUpload = () => {
      setIsLoading(false);
    };

    const yourUploadFunction = () => {
      return new Promise((resolve, reject) => {
        // Ваш код для завантаження файлу з відстеженням прогресу та швидкості

        // Приклад використання setTimeout для емуляції завантаження файлу
        const startTime = new Date().getTime();
        let loaded = 0;
        const total = totalSizeFile; // Загальний розмір файлу (приклад)

        const simulateUpload = () => {
          const chunkSize = 10000; // Розмір кожного чанка (приклад)
          const remaining = total - loaded;
          const toLoad = Math.min(remaining, chunkSize);
          loaded += toLoad;

          if (loaded < total) {
            handleProgressAndSpeed(loaded, startTime);
            setTimeout(simulateUpload, 1000); // Чекаємо 1 секунду перед завантаженням наступного чанка
          } else {
            handleProgressAndSpeed(loaded, startTime);
            resolve(); // Завершення завантаження
          }
        };

        simulateUpload();
      });
    };

    yourUploadFunction()
      .then(() => {
        finishUpload();
      })
      .catch((error) => {
        console.error(error);
        finishUpload();
      });
  };

  return (
    <div className="column upload">
      <h3>Файл</h3>
      <input
        type="file"
        accept=".jpg, .tif, .rar, .zip, .7z, .cdr"
        hidden
        onChange={handleChange}
        ref={inputFileRef}
      />
      <button onClick={() => inputFileRef.current.click()}>Завантажити файл</button>
      {isLoading ? (
        <div>
          <p>Завантаження файлу...</p>
          <p>Прогрес: {progress}%</p>
          <p>Швидкість: {speed} KB/s</p>
        </div>
      ) : (
        <div>
          {selectedFile && <p>Файл завантажено</p>}
          <button onClick={handleFileUpload}>Завантажити</button>
        </div>
      )}
    </div>
  );
};

export default UploadFile;