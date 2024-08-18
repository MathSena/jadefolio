import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        {/* Corrigido o backgroundImage */}
        <section className="hero" style={{ backgroundImage: `url('/images/hero-bg.png')` }}>
          <h1>Aprenda Inglês com Jade Hamed</h1>
          <p>Aulas personalizadas para todos os níveis</p>
          <button>Agende uma Aula Experimental</button>
        </section>

        <section id="about" className="mt-12">
          <h2 className="section-title">Sobre Mim</h2>
          <p>Olá, sou Jade Hamed, professora de inglês com mais de 10 anos de experiência...</p>
          <img src="/images/jade.png" alt="Jade Hamed" className="mt-4 w-48 h-48 rounded-full" />
        </section>

        <section id="services" className="mt-12">
          <h2 className="section-title">Serviços</h2>
          <ul>
            <li>📝 Aulas personalizadas para todos os níveis</li>
            <li>💻 Aulas online com material incluso</li>
            <li>⏰ Horários flexíveis para se adaptar à sua rotina</li>
          </ul>
        </section>

        <section id="testimonials" className="mt-12">
          <h2 className="section-title">Depoimentos</h2>
          <div className="card">
            <blockquote>
              <p>"A Jade é uma excelente professora! Aprendi muito com ela."</p>
              <footer>- Aluno A</footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="section-title">Contato</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
