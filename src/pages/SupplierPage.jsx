import { useEffect, useState } from 'react';
import SupplierFilter from '../components/SupplierFilter';
import SupplierTable from '../components/SupplierTable';
import Pagination from '../components/Pagination';
import SupplierFormModal from '../components/SupplierFormModal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SupplierPage() {
  const [showForm, setShowForm] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [page, setPage] = useState(0); 
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const params = new URLSearchParams({
      page,
      name: filters.name || '',
      phone: filters.phone || '',
      email: filters.email || ''
    });

    fetch(`http://localhost:8080/api/suppliers/search?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setSuppliers(data.content);
        setTotalPages(data.totalPages);
      });
  }, [page, filters]);

  const handleSearch = ({ name, phone, email }) => {
    setFilters({ name, phone, email });
    setPage(0);
  };
  
  
  const handleDeleteConfirm = (id) => {
    fetch(`http://localhost:8080/api/suppliers/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 204) {
          toast.success("Xoá thành công!");
          setSuppliers((prev) => prev.filter((s) => s.supplierId !== id));
        } else {
          toast.error("Xoá thất bại!");
        }
      })
      .catch(() => toast.error("Có lỗi xảy ra khi xoá!"));
  };

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Bạn có chắc chắn muốn xoá?</p>
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => {
              handleDeleteConfirm(id);
              closeToast();
            }}
          >
            Xoá
          </button>
          <button className="btn btn-secondary btn-sm" onClick={closeToast}>
            Huỷ
          </button>
        </div>
      ),
      { autoClose: false }
    );
  };



  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
          <h4 className="m-0">Quản lý Nhà cung cấp</h4>
          <button className="btn btn-light btn-sm">← Trở lại</button>
        </div>

        <SupplierFilter onSearch={handleSearch} />
        <SupplierTable
          suppliers={suppliers}
          onAddClick={() => setShowForm(true)}
          onDeleteClick={handleDelete}
        />
        <Pagination
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={(pageNumber) => setPage(pageNumber - 1)} 
        />
      </div>

      {showForm && (
        <SupplierFormModal
          onClose={() => setShowForm(false)}
          onSuccess={(newSupplier) => {
            setPage(0); 
          }}
        />
      )}
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

export default SupplierPage;
