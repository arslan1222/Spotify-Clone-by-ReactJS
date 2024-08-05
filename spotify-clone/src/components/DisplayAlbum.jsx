import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumData } from '../assets/albumsData';
import logo from "../assets/logo.png"
import clockIcon from '../assets/clock_icon.png'
import { songData } from '../assets/songData';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumdata = albumData[id];
    
    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumdata.image} alt="" />
                <div className='flex flex-col'>
                    <p className='text-white'>Playlist</p>
                    <h2 className='text-5xl text-white font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
                    <h4 className='text-white'>{albumdata.description}</h4>
                    <pre className='mt-1'>
                        <img className='inline-block w-8 text-white' src={logo} alt="" />
                        <b className='text-white'> Spotify</b>
                        <pre className='inline-block text-white'> • 304 likes </pre>
                        <b className='text-white'>• 13 songs, </b>
                        <p className="text-white inline-block">about 43 minutes</p>
                    </pre>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={clockIcon} alt="" />
            </div>
            <hr />
            {songData.map((item, index) => (
                <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white'>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumdata.name}</p>
                    <p className='text-[15px] hidden sm:block'>3 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    );
}

export default DisplayAlbum;
