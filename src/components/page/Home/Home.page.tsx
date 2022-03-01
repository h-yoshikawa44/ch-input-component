import { VFC } from 'react';
import Layout from '@/components/common/Layout';
import Home from './Home';

const HomePage: VFC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
