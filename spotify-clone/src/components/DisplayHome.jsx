import React from 'react'
import Navbar from './Navbar'
import { albumData } from '../assets/albumsData'
import AlbumItem from './AlbumItem.jsx';
import { songData } from '../assets/songData.js';


const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-white text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
            {albumData.map((item, index)=>(<AlbumItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} />))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-white text-2xl'>Today's Biggest Hits</h1>
            <div className='flex overflow-auto'>
            {songData.map((item, index)=>(<AlbumItem key={index} id={item.id} name={item.name} description={item.description} image={item.image} />))}
            </div>
        </div>
        
        
    </>
  )
}

export default DisplayHome