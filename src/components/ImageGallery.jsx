import React, { useState } from 'react';
export default function ImageGallery({images, className}) {
  const [idx, setIdx] = useState(0);
  return (
    <div className={className}>
      <div className="w-full h-80 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        <img src={images[idx]} alt="gallery" className="object-contain w-full h-full"/>
      </div>
      <div className="mt-2 flex gap-2">
        {images.map((src,i)=>(
          <button key={i} onClick={()=>setIdx(i)} className={`w-16 h-16 rounded overflow-hidden border ${i===idx? 'ring-2 ring-indigo-500':''}`}>
            <img src={src} className="w-full h-full object-cover"/>
          </button>
        ))}
      </div>
    </div>
  );
}
