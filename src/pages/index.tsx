import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Text from 'components/Text';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);

  return <Text title="Next Js Boilerplate 2023 - @phellipe5k" />;
};

export default Home;
