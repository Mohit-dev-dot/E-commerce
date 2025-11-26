import React, { useState, useEffect } from 'react';
export default function SearchSuggestions({query, data, onSelect}) {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    if(!query || query.trim().length<1){ setItems([]); return; }
    const q = query.toLowerCase();
    const res = data.filter(p=>p.name.toLowerCase().includes(q)).slice(0,5);
    setItems(res);
  },[query,data]);
  if(items.length===0) return null;
  return (
    <div className="absolute mt-1 bg-white dark:bg-gray-800 border rounded w-full max-w-xl z-50 shadow">
      {items.map(i=> <div key={i.id} onClick={()=>onSelect(i)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{i.name}</div>)}
    </div>
  );
}