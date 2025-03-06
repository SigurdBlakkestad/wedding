'use client';

import React from 'react';
import Image from 'next/image';

const PictureTest = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFF8F0' }}>
      <h1 className="text-3xl font-bold text-center mb-8">PNG Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Image 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
            {/* Replace the comment below with your PNG */}
            { <Image src="/images/Austre_Moland_farge.png" alt="Image 1" width={400} height={400} /> }
            <p className="text-gray-500">PNG Image 1</p>
          </div>
          <p className="text-sm text-gray-600">Description for image 1</p>
        </div>

        {/* Image 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
            {/* Replace the comment below with your PNG */}
            {<Image src="/images/Blomst3.png" alt="Image 2" width={400} height={400} /> }
            <p className="text-gray-500">PNG Image 2</p>
          </div>
          <p className="text-sm text-gray-600">Description for image 2</p>
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
            {/* Replace the comment below with your PNG */}
            { <Image src="/images/Harveland_sort.png" alt="Image 3" width={400} height={400} /> }
            <p className="text-gray-500">PNG Image 3</p>
          </div>
          <p className="text-sm text-gray-600">Description for image 3</p>
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
            {/* Replace the comment below with your PNG */}
            { <Image src="/images/Robåt_farge.png" alt="Image 4" width={400} height={400} />}
            <p className="text-gray-500">PNG Image 4</p>
          </div>
          <p className="text-sm text-gray-600">Description for image 4</p>
        </div>
      </div>
    </div>
  );
};

export default PictureTest;