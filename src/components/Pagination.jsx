function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="mt-3">
      <ul className="pagination justify-content-center align-items-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handlePrevious}>
            ← Trước
          </button>
        </li>

        <li className="page-item disabled">
          <span className="page-link">
            Trang {currentPage} / {totalPages}
          </span>
        </li>

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handleNext}>
            Sau →
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;