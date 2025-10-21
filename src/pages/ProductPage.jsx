import { useState } from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductTable from '../components/ProductTable';
import Pagination from '../components/Pagination';
import ProductFormModal from '../components/ProductFormModal';

function ProductPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="container my-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center bg-success text-white p-3 rounded">
          <h4 className="m-0">Quản lý Sản phẩm</h4>
          <button className="btn btn-light btn-sm">← Trở lại</button>
        </div>

        <ProductFilter />
        <ProductTable onAddClick={() => setShowForm(true)} />
        <Pagination />
      </div>

      {/* Modal form */}
      {showForm && <ProductFormModal onClose={() => setShowForm(false)} />}
    </>
  );
}

export default ProductPage;
