import SupplierPage from './pages/SupplierPage';
import ProductPage from './pages/ProductPage';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <>
  <SupplierPage/>;
  <ToastContainer position="top-right" autoClose={3000} />
  </>
 
}

export default App;
