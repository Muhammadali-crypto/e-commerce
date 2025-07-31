import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from './Form';
import { setUser } from './../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import SportovaNavbar from './SportovaNavbar'; // если нужно

const SignUp = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = async (email, password) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      dispatch(setUser({
        email: user.email,
        uid: user.uid,
        token: user.accessToken
      }));

      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          subject: 'Добро пожаловать!',
          message: 'Вы успешно зарегистрированы.',
        }),
      });

      push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form 
      title="register"
      handleClick={handleRegister}
    />
  );
};

export { SignUp };
