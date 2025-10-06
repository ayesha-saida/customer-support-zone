import React from 'react';

const States = ({ totalComplain, resolve }) => {
  return (
    <div>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg p-2">{totalComplain.title}</p>
        <button
          onClick={() => resolve(totalComplain)}
          className="bg-green-600 w-full py-2 text-white rounded"
        >
          {totalComplain.status}
        </button>
      </div>
    </div>
  );
};

export default States;
