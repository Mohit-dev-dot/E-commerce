import React from 'react'; 
import ProductCard from './ProductCard'; 
export default function ProductGrid({list})
{ return (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>{list.map(p=> <ProductCard key={p.id} p={p}/> )}</div>); }