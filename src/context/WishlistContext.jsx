import React, { createContext, useReducer, useEffect } from 'react';
 export const WishlistContext = createContext(); 
 function reducer(state, action){ switch(action.type){ case 'init': return action.payload||[]; case 'toggle': { const exists = state.find(i=>i.id===action.item.id); if(exists)
     return state.filter(i=>i.id!==action.item.id); return [...state, action.item]; } case 'clear': return []; default: return state;} }
      export function WishlistProvider({children}){ const [items, dispatch] = useReducer(reducer, []);
         useEffect(()=>{ const s = localStorage.getItem('wishlist_v1'); 
        if(s) dispatch({type:'init', payload: JSON.parse(s)}); }, []);
         useEffect(()=>localStorage.setItem('wishlist_v1', JSON.stringify(items)), [items]); 
         return <WishlistContext.Provider value={{items,dispatch}}>{children}</WishlistContext.Provider>; }