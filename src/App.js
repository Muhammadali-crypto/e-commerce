import { Routes, Route } from 'react-router-dom';
import AboutPage from './app/about/page';
import LoginPage from '../src/components/LoginModal';
import RegisterPage from './pages/RegisterPage';
import Products from './pages/products';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/send-product" element={<SendProductPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<UserProfile />} />
    
    </Routes>
  );
}

export default App;
