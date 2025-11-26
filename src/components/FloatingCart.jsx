import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
export default function FloatingCart(){
  const { cart } = useContext(CartContext);
  const total = cart.reduce((s,i)=>s+i.qty,0);
  return (
    <Link to="/cart" className="fixed right-4 bottom-6 z-40">
      <button className="bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
        🛒 {total}
      </button>
    </Link>
  );
}
