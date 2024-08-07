import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Bem-vindo ao Portfólio</h1>
        <p>Introdução sobre a professora...</p>
      </div>
    </Layout>
  );
};

export default Home;
