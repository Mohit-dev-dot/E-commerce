import React from 'react'; 
export default function FiltersBar(
    {sort,setSort, minPrice,maxPrice,setPriceRange, rating, setRating})
    { return 
        (<div className='flex flex-col sm:flex-row gap-3 items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <label className='text-sm'>Sort:</label>
                <select value={sort} onChange={e=>setSort(e.target.value)} className='border p-1 rounded'><option value=''>Relevance</option>
                <option value='price_asc'>Price ↑</option><option value='price_desc'>Price ↓</option>
                <option value='rating_desc'>Top Rated</option><option value='name_asc'>Name A-Z</option>
                </select></div><div className='flex gap-2 items-center'><label className='text-sm'>Price:</label>
                <input type='range' min='0' max='200' value={minPrice} onChange={e=>setPriceRange([Number(e.target.value), maxPrice])}/>
                <span>Up to ₹{minPrice}</span></div><div className='flex gap-2 items-center'><label className='text-sm'>Min Rating:</label>
                <select value={rating} onChange={e=>setRating(Number(e.target.value))} className='border p-1 rounded'>
                <option value={0}>Any</option><option value={3}>3+</option>
                <option value={4}>4+</option></select></div>
                </div>
                ); }