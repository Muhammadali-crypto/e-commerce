import {useDispatch} from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {Form} from './Form';
import { setUser } from './../store/slices/userSlice';
// import App from './../../src/Appx';

const Login = () => {
  const dispatch = useDispatch();
  const {push} = useHistory();
  

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          uid: user.uid,
          token: user.accessToken
        }));
        push('/');
      })
      .catch(() => alert('Invalid user'));
  }

  return (
    <Form 
      title="Login"
      handleClick={handleLogin}
    />
  )

}


export {Login};