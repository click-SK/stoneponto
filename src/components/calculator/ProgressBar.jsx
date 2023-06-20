import React from 'react';

const ProgressBar = ({isProgresBar,currentSizeFile,totalSizeFile, progress}) => {
    return (
        <>
            {isProgresBar && (
                    <div>
                      <div
                        style={{
                          minWidth: `${300}px`,
                          border: "1px solid black",
                          borderRadius: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: `${progress || 0}%`,
                            height: "20px",
                            background: `${
                              progress < 100 ? "#222935" : "green"
                            }`,
                            fontWeight: "600",
                            color: "white",
                            paddingTop: "2px",
                          }}
                        >
                          {progress || 0}%
                        </div>
                      </div>
                      <p>
                        Завантаження: {currentSizeFile}/{totalSizeFile} Мбайт
                      </p>
                    </div>
                  )}
        </>
    );
};

export default ProgressBar;