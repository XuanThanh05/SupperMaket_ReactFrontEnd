function ProductFormModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white p-4 rounded shadow-lg">
        <h5 className="mb-4">Thêm sản phẩm mới</h5>
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Tên sản phẩm</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mã vạch</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Loại</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Giá</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Tồn kho</label>
              <input type="number" className="form-control" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Nhà cung cấp</label>
            <input type="text" className="form-control" />
          </div>

          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              ← Quay lại
            </button>
            <button type="submit" className="btn btn-primary">
              + Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductFormModal;
