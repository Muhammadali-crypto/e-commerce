import { Routes, Route } from 'react-router-dom';
import AboutPage from './app/about/page';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { SignUp } from './components/SignUp';
import Products from './pages/products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/send-product" element={<SendProductPage />} />
      <Route path="/products" element={<Products />} />
    
    </Routes>
  );
}

export default App;
