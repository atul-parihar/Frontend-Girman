import React, { useState, useEffect, useLayoutEffect } from 'react';
import userData from '../data/users.json';
import UserCard from '../components/UserCard';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  useEffect(() => {
    const filteredResults = userData.filter(user => {
      const [firstNameQuery, lastNameQuery] = query.split(' ');
    
      const matchesFirstName = user.first_name && user.first_name.toLowerCase().includes(firstNameQuery);
      const matchesLastName = user.last_name && user.last_name.toLowerCase().includes(lastNameQuery);
    
      if (firstNameQuery && lastNameQuery) {
        return matchesFirstName && matchesLastName;
      }
    
      return (
        (user.first_name && user.first_name.toLowerCase().includes(query)) ||
        (user.last_name && user.last_name.toLowerCase().includes(query)) ||
        (user.city && user.city.toLowerCase().includes(query)) ||
        (user.contact_number && user.contact_number.includes(query))
      );
    });
    setResults(filteredResults);
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-300">
      <div className="container mx-auto p-6">
        <div className="search-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((user, index) => <UserCard key={index} user={user} />)
          ) : (
            <div className="flex items-center justify-center col-span-full text-center text-gray-600 mt-10">
              <img src="/no_result.png" alt="No Result" className="max-w-[460px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
