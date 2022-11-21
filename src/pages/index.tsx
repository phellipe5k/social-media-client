import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HomeTemplate from 'template/Home';

const Home = () => {
  const router = useRouter();
  let isAuth = true;
  useEffect(() => {
    if (!isAuth) return router.push('/login');
  }, []);

  return <HomeTemplate />;
};

export default Home;
