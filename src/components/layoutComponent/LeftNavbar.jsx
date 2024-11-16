import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('/demo-data/categories.json').then(res=>res.json()).then((data)=>setCategories(data))
    },[])
    return (
        <div className=' grid gap-2'>
            <h2 className='font-semibold'>All Category ({categories.length})</h2>
            <div className="grid gap-2 md:my-5">
                {categories.map((category)=> (
                    <NavLink to={`category/${category.id}`} className='btn bg-base-100' key={category.id}>{category.name}</NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;