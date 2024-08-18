import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Jade Hamed. Todos os direitos reservados.</p>
        <div className="mt-2">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:underline">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
