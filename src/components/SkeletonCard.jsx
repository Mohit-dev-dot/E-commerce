import React from 'react';
export default function SkeletonCard(){ return (
  <div className="animate-pulse">
    <div className="bg-gray-200 dark:bg-gray-700 h-40 rounded"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-3 w-3/4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
  </div>
)}