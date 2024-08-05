import { createContext, useEffect, useRef, useState } from "react";
import { songData } from "../assets/songData";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songData[2]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true)
    }

    const pause = ()=> {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) =>{
        await setTrack(songData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play,pause,
        playWithId,
    }

    useEffect(()=>{
        setTimeout(()=>{

            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration /60),
                    }
                })
                
            }
        })
    })

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;