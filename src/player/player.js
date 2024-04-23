import React, { useEffect, useState } from 'react'
import './player.css'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";

const Player = ({audioPlayer, audioElem, curAudioPos, isplay, setIsplay, currentsong, setCurrentsong, songs, handleAudioSeek}) => {
    const [audioLen, setAudioLen] = useState(0);
    const playpause = () => {
         setIsplay(!isplay)
    }

    const skipback = () => {

        const index = songs.findIndex(x => x.title === currentsong.title)
        if(index === 0){
           setCurrentsong(songs[songs.length - 1])
        } else {
            setCurrentsong(songs[index - 1])
        }
        audioElem.current.currentTime = 0
    }


    const skipNext = () => {

        const index = songs.findIndex(x => x.title === currentsong.title)
        if(index === songs.length-1){
           setCurrentsong(songs[0])
        } else {
            setCurrentsong(songs[index + 1])
        }
        audioElem.current.currentTime = 0
    }

    useEffect(() => {
        let audioLengh = 0;
        const audioEle = document.getElementById("audioPlayer");
        if(audioEle) {
            if(audioEle.duration == 'Infinity') {
                audioEle.load();
                audioEle.currentTime = 24*60*60; //fake big time
                audioEle.volume = 0;
            }
            audioLengh = audioEle.duration;
        }
        setAudioLen(audioLengh);
        console.log("audioLen", audioLengh)
    }, [audioElem])

    const backward = () => {
        audioElem.current.currentTime -= 10;
    }
    
    const forward = () => {
        audioElem.current.currentTime += 10;
    }

  return (
    <div className='center'>
        <p>{currentsong.img}</p>
        <p>{currentsong.title}</p>
        <button className='back' onClick={backward}>10 <FaArrowRotateLeft/></button>
        <button className='playpause' onClick={playpause}>
            {isplay ? <FaPause/> : <FaPlay/>}
        </button>
        <button className='forward' onClick={forward}>10 <FaArrowRotateRight/></button>
        <div>
            <input style={{width:"250px"}} type="range" value={curAudioPos} min={0} max={348} onChange={(e) => handleAudioSeek(e.target.value)}></input>
        </div>
        <div>
            <button className='playpause1'><IoPlayBack onClick={skipback}/></button>
            <button className='playpause2'><IoPlayForward onClick={skipNext}/></button>
        </div>
    </div>
  )
}

export default Player
