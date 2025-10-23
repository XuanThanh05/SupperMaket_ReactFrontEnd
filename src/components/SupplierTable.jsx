function SupplierTable({ suppliers, onAddClick, onDeleteClick }) {
  return (
    <div className="bg-white border rounded shadow-sm p-3">
      <div className="text-end mb-2">
        <button className="btn btn-success" onClick={onAddClick}>
          + Thêm mới
        </button>
      </div>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-success">
          <tr>
            <th>STT</th>
            <th>Tên nhà cung cấp</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((item, index) => (
            <tr key={item.supplierId}>
              <td>{index + 1}</td>
              <td>{item.companyName}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Sửa</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteClick(item.supplierId)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SupplierTable