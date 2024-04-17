import React from 'react'
import './player.css'
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";

const Player = ({audioElem, isplay, setIsplay, currentsong, setCurrentsong, songs}) => {

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

  return (
    <div className='center'>
        <p>{currentsong.title}</p>
        <button className='back'>10 <FaArrowRotateLeft/></button>
        <button className='playpause' onClick={playpause}>
            {isplay ? <FaPause/> : <FaPlay/>}
        </button>
        <button className='forward'>10 <FaArrowRotateRight/></button>
        <div>
            <button className='playpause1'><IoPlayBack onClick={skipback}/></button>
            <button className='playpause2'><IoPlayForward onClick={skipNext}/></button>
        </div>
    </div>
  )
}

export default Player
