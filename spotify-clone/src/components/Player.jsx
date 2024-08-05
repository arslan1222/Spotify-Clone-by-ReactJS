import React, { useContext } from 'react'
import { allSongs } from "../assets/allsongs"
import shuffleIcon from "../assets/shuffle_icon.png"
import prevIcon from "../assets/prev_icon.png"
import playIcon from "../assets/plays_icon.png"
import nextIcon from "../assets/next_icon.png"
import loopIcon from "../assets/loop_icon.png"

import playsIcon from "../assets/plays_icon.png"
import pauseIcon from "../assets/pause_icon.png"
import micIcon from "../assets/mic_icon.png"
import speakerIcon from "../assets/speaker_icon.png"
import vollumeIcon from "../assets/vollume_icon.png"
import { PlayerContext } from '../Context/PlayerContext'


const Player = () => {

    const {track, seekBg, seekBar, playStatus, play, pause, time} = useContext(PlayerContext); 
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.description.slice(0,20)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap=1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={shuffleIcon} alt="" />
                <img className='w-4 cursor-pointer' src={prevIcon} alt="" />
                {playStatus ?<img onClick={pause} className='w-4 cursor-pointer' src={pauseIcon} alt="" /> :<img onClick={play} className='w-4 cursor-pointer' src={playIcon} alt="" /> }
                <img className='w-4 cursor-pointer' src={nextIcon} alt="" />
                <img className='w-4 cursor-pointer' src={loopIcon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items items-center gap-2 opacity-75'>
                <img className='w-4' src={playsIcon} alt="" />
                <img className='w-4' src={micIcon} alt="" />
                <img className='w-4' src={speakerIcon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>
                <img className='w-4' src={vollumeIcon} alt="" />
            </div>

    </div>
  )
}

export default Player