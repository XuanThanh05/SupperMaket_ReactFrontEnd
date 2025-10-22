import { useEffect, useState } from 'react';
import SupplierFilter from '../components/SupplierFilter';
import SupplierTable from '../components/SupplierTable';
import Pagination from '../components/Pagination';
import SupplierFormModal from '../components/SupplierFormModal';

function SupplierPage() {
  const [showForm, setShowForm] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/api/suppliers?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setSuppliers(data.content);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
          <h4 className="m-0">Quản lý Nhà cung cấp</h4>
          <button className="btn btn-light btn-sm">← Trở lại</button>
        </div>

        <SupplierFilter />
        <SupplierTable suppliers={suppliers} onAddClick={() => setShowForm(true)} />
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      {showForm && <SupplierFormModal onClose={() => setShowForm(false)} />}
    </>
  );
}

export default SupplierPage;