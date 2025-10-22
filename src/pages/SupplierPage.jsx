import { useEffect, useState } from 'react';
import SupplierFilter from '../components/SupplierFilter';
import SupplierTable from '../components/SupplierTable';
import Pagination from '../components/Pagination';
import SupplierFormModal from '../components/SupplierFormModal';

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

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
          <h4 className="m-0">Quản lý Nhà cung cấp</h4>
          <button className="btn btn-light btn-sm">← Trở lại</button>
        </div>

        <SupplierFilter onSearch={handleSearch} />
        <SupplierTable suppliers={suppliers} onAddClick={() => setShowForm(true)} />
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

    </>
  );
}

export default SupplierPage;
