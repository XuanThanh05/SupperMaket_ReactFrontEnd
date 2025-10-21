import { FaEdit, FaTrash } from 'react-icons/fa';

function ProductTable({ onAddClick }) {
  const data = Array(8).fill({
    id: 1,
    name: 'Gì đó',
    barcode: 'Gì đó',
    category: 'Gì đó',
    price: 'Gì đó',
    stock: 'Gì đó',
    supplier: 'Gì đó',
  });

  return (
    <div className="bg-white border rounded shadow-sm p-3">
      <div className="text-end mb-2">
        <button className="btn btn-success" onClick={onAddClick}>+ Thêm mới</button>
      </div>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-success">
          <tr>
            <th>STT</th>
            <th>Tên ↑↓</th>
            <th>Mã vạch</th>
            <th>Loại</th>
            <th>Giá ↑↓</th>
            <th>Tồn kho</th>
            <th>Nhà cung cấp</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.barcode}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
