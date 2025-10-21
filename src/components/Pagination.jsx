function Pagination() {
  return (
    <nav className="mt-3 d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
      </ul>
    </nav>
  );
}

export default Pagination;
