import React from 'react';

const Pagination = ({currentPage, setCurrentPage}) => {
    return (
        <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentPage}
        </div>
        <div className="pagination">
          <button
            className="btn"
            disabled={currentPage == 1 ? true : false}
            onClick={() => setCurrentPage((state) => (state -= 1))}
          >
            <img src="/img/left-pagination.svg" alt="Previous" />
          </button>
          <button
            className="btn"
            onClick={() => setCurrentPage((state) => (state += 1))}
          >
            <img src="/img/right-pagination.svg" alt="Next" />
          </button>
        </div>
      </>
    );
};

export default Pagination;