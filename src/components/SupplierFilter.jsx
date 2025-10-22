import { useState } from 'react';

function SupplierFilter({ onSearch }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ name, phone, email });
  };

  const handleClear = () => {
    setName('');
    setPhone('');
    setEmail('');
    onSearch({ name: '', phone: '', email: '' });
  };

  return (
    <div className="my-3 p-3 bg-white border rounded shadow-sm">
      <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Tên công ty"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="SDT"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Tìm kiếm</button>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-link text-danger p-0" onClick={handleClear}>✕ clear filter</button>
        </div>
      </form>
    </div>
  );
}

export default SupplierFilter;
