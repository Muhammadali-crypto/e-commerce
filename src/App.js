import { Routes, Route } from 'react-router-dom';
import AboutPage from './app/about/page';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignUp />} />
    </Routes>
  );
}

export default App;
