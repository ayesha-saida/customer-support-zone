import React from 'react';

const Resolve = ({ resolve }) => {
  return (
    <div>
      <div className="bg-blue-100 shadow rounded">
        {/*  <p>No resolved task yet.</p> */}
        <p className="p-2 text-lg">{resolve.title}</p>
      </div>
    </div>
  );
};

export default Resolve;
