
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18M5.47 12a10.003 10.003 0 0113.06 0M2.999 6.253c3.967-.99 8.033-.99 12.002 0M2.999 17.747c3.967.99 8.033.99 12.002 0"></path>
          </svg>
          <span className="text-xl font-bold text-white">English Grammar Guru</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
