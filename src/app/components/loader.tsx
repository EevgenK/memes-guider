import React from 'react';

const Loader = () => {
  return (
    <div>
      {' '}
      <div className="flex justify-center items-center h-52">
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-gray-900"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-primary ml-3"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-secondary ml-3"></div>
      </div>
    </div>
  );
};

export default Loader;
