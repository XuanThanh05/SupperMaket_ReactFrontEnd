function SupplierFormModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white p-4 rounded shadow-lg">
        <h5 className="mb-4">Thêm nhà cung cấp mới</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Tên nhà cung cấp</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Địa chỉ</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input type="tel" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
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

export default SupplierFormModal;
