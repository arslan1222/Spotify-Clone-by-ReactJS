import React from 'react';
import { useNavigate } from 'react-router-dom'


const AlbumItem = ({ id, name, image, description }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] inline-block'>
        <img className='rounded' src={image} alt={name} />
        <p className='font-bold text-slate-200 mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{description}</p>
    </div>
    
  );
};

export default AlbumItem;
