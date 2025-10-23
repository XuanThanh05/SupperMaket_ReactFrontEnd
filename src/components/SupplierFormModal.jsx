import { useState } from 'react';
import { toast } from 'react-toastify';
function SupplierFormModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    phone: '',
    email: '',
    contactPerson: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // clear lỗi cũ

    try {
      const response = await fetch('http://localhost:8080/api/suppliers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
      }

      const data = await response.json();

      toast.success(' Thêm nhà cung cấp thành công!');

      if (onSuccess) onSuccess(data);
      onClose();
    } catch (err) {
      toast.error(` Lỗi: ${err.message}`);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white p-4 rounded shadow-lg">
        <h5 className="mb-4">Thêm nhà cung cấp mới</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên nhà cung cấp</label>
            <input type="text" name="companyName" className="form-control" value={formData.companyName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Địa chỉ</label>
            <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Người liên hệ</label>
            <input type="text" name="contactPerson" className="form-control" value={formData.contactPerson} onChange={handleChange} />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

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
