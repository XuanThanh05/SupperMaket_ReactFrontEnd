function ProductFilter() {
  return (
    <div className="my-3 p-3 bg-white border rounded shadow-sm">
      <form className="row g-3 align-items-center">
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Tên sản phẩm" />
        </div>
        <div className="col-md-4">
          <select className="form-select">
            <option value="">Tất cả loại</option>
            <option value="rau">Rau củ</option>
            <option value="thit">Thịt</option>
          </select>
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Mã vạch" />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-success w-100">Tìm</button>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-link text-danger p-0">✕ clear filter</button>
        </div>
      </form>
    </div>
  );
}

export default ProductFilter;
