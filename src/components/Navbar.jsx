import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; 
export default function Navbar()
{ const { cart } = useContext(CartContext); 
const { items } = useContext(WishlistContext); 
const total = cart.reduce((s,i)=>s+i.qty,0); 
const [dark,setDark] = useState(document.documentElement.classList.contains('dark'));
useEffect(()=>{ document.documentElement.classList.toggle('dark', dark); 
localStorage.setItem('theme_v1', dark ? 'dark':'light'); }, [dark]);
useEffect(()=>{ const pref = localStorage.getItem('theme_v1'); if(pref) setDark(pref==='dark'); }, []); 
return (
<nav className='bg-white dark:bg-gray-800 shadow'>
    <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Link to='/' className='font-bold text-lg'>MyShop</Link>
            <Link to='/' className='hidden sm:inline'>Products</Link>
            </div>
            <div className='flex items-center gap-3'>
                <button onClick={()=>setDark(s=>!s)} className='px-3 py-1 border rounded'>{dark? 'Light':'Dark'}</button>
                <Link to='/wishlist' className='px-2'>Wishlist ({items.length})</Link><Link to='/cart' className='px-3 bg-indigo-600 text-white rounded'>Cart ({total})
                </Link>
                </div>
                </div>
                </nav>); }