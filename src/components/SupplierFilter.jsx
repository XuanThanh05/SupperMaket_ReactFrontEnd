function SupplierFilter() {
  return (
    <div className="my-3 p-3 bg-white border rounded shadow-sm">
      <form className="row g-3 align-items-center">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Tên công ty" />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="SDT" />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Tìm kiếm</button>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-link text-danger p-0">✕ clear filter</button>
        </div>
      </form>
    </div>
  );
}

export default SupplierFilter;
