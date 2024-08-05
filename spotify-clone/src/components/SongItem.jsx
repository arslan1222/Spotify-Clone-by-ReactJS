import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext';

const SongItem = ({ id, name, image, description }) => {
  const { playWithId } = useContext(PlayerContext);
    return (
      <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] inline-block'>
          <img className='rounded' src={image} alt='' />
          <p className='font-bold text-slate-200 mt-2 mb-1'>{name}</p>
          <p className='text-slate-200 text-sm'>{description}</p>
      </div>
      
    );
}

export default SongItem;