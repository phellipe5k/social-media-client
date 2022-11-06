import { useRouter } from 'next/router';
import Login from 'template/Login';

const LoginPage = () => {
  const router = useRouter();

  return <Login />
};

export default LoginPage;
