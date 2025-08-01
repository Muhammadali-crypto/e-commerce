// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Form } from './Form';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('✅ Logged in:', user);
        navigate('/');
      })
      .catch((err) => {
        alert('Ошибка входа: ' + err.message);
      });
  };

  return <Form title="Login" handleClick={handleLogin} />;
};
