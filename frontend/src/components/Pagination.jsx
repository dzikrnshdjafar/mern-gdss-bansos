import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    // Handle page change
    const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    };

  return (
    <div className="join grid grid-cols-2 my-4">
            <button
              className="join-item btn btn-outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              >
              Previous page
            </button>
            <button
              className="join-item btn btn-outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              >
              Next
            </button>

              </div>
  );
};

export default Pagination;
