import React from 'react';
import { FaLeaf, FaSpinner } from 'react-icons/fa';

function Button({ loading = false, className = ' ', children, onClick }) {
  const clazz = [];

  const handleClick = () => {
    if (loading) {
      return;
    }
    onClick();
  };
  return (
    <button
      className={`${className} bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      onClick={handleClick}
      disabled={loading}
    >
      <span className="flex items-center justify-center">
        {loading && <FaSpinner className="animate-spin mr-2" />}
        {children}
      </span>
    </button>
  );
}

export default Button;
