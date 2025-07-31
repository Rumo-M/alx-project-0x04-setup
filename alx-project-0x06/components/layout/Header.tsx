import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; // Update this path if needed

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <span className="text-lg">Count: {count}</span>
      </div>
    </header>
  );
};

export default Header;
