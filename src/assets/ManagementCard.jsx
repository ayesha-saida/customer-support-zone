import React from 'react';
import { DiscAlbum } from 'lucide-react';

const ManagementCard = ({ totalPending, resolved }) => {
  return (
    <div className="flex lg:space-x-6  space-x-0  justify-center items-center lg:flex-row flex-col lg:py-[60px] py-[25px] lg:space-y-0 space-y-4">
      <div className="relative flex flex-col justify-center items-center p-7  rounded-md text-white lg:w-[780px] w-[350px] lg:h-[250px] h-[150px] gradient-box-left overflow-hidden">
        {/* Left image  */}
        <img
          src="/vector1.png"
          alt="img1"
          className="absolute left-0 bottom-0 lg:w-[300px] w-[200px] h-auto"
        />

        {/* Center image  */}
        <img
          src="/vector2.png"
          alt="img2"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-[900px] w-[400px] h-auto"
        />

        {/* Right image (flipped img1) */}
        <img
          src="/vector1.png"
          alt="img1-flipped"
          className="absolute right-0 bottom-0 lg:w-[300px] w-[200px] h-auto scale-x-[-1]"
        />

        {/* Content */}
        <h1 className="text-[20px] z-10">In-Progress</h1>
        <p className="text-[40px] font-bold z-10">{totalPending}</p>
      </div>

      <div className="relative flex flex-col justify-center items-center p-7 rounded-md text-white lg:w-[780px] w-[350px] lg:h-[250px] h-[150px] gradient-box-right overflow-hidden">
        {/* Left image (img1) */}
        <img
          src="/vector1.png"
          alt="img1"
          className="absolute left-0 bottom-0 lg:w-[300px] w-[200px] h-auto"
        />

        {/* Center image (img2) */}
        <img
          src="/vector2.png"
          alt="img2"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-[900px] w-[400px] h-auto"
        />

        {/* Right image (flipped img1) */}
        <img
          src="/vector1.png"
          alt="img1-flipped"
          className="absolute right-0 bottom-0 lg:w-[300px] w-[200px] h-auto scale-x-[-1]"
        />

        {/* Content */}
        <h1 className="text-[20px] z-10">Resolved</h1>
        <p className="text-[40px] font-bold z-10">{resolved}</p>
      </div>
    </div>
  );
};

export default ManagementCard;
