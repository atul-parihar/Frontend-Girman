import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-300 flex flex-col items-center">
      <div className="flex flex-col items-center mt-16 md:mt-24 text-center">
        <div className="flex items-center space-x-4 mb-6">
          <img src="/girman_big_logo.png" alt="Girman Logo" className="w-[448px] h-[70px]" />
        </div>
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleSearch}
            className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-all"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
            🔍
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
