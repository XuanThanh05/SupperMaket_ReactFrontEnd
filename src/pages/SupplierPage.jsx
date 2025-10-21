import { useState } from 'react';
import SupplierFilter from '../components/SupplierFilter';
import SupplierTable from '../components/SupplierTable';
import Pagination from '../components/Pagination';
import SupplierFormModal from '../components/SupplierFormModal';

function SupplierPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
          <h4 className="m-0">Quản lý Nhà cung cấp</h4>
          <button className="btn btn-light btn-sm">← Trở lại</button>
        </div>

        <SupplierFilter />
        <SupplierTable onAddClick={() => setShowForm(true)} />
        <Pagination />
      </div>

      {showForm && <SupplierFormModal onClose={() => setShowForm(false)} />}
    </>
  );
}

export default SupplierPage;
