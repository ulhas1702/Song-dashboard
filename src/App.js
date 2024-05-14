import './App.css';
import Player from './player/player';
import { songsdata } from './player/audios';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [curAudioPos, setCurrentAudioPos] = useState(0);
  const [songs, setSongs] = useState(songsdata);
  const [isplay, setIsplay] = useState(false);
  const [currentsong, setCurrentsong] = useState(songsdata[0]);
  const audioElem = useRef();

  useEffect(() => {
    if (isplay) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplay, audioElem]);

  const handleAudioSeek = (val) => {
    console.log("Seek to ", val);
    setCurrentAudioPos(val);
    audioElem.current.currentTime = val;
  }

  return (
    <div className="App">
      <audio
        id="audioPlayer"
        src={currentsong.url}
        ref={audioElem}
        onLoad={(e) => setAudioPlayer(e)}
        onTimeUpdate={(e) => {
        setCurrentAudioPos(e.target.currentTime);
        console.log("Progress", e.target.currentTime);
  }}
></audio>

      <Player
        audioPlayer={audioPlayer}
        songs={songs}
        setSongs={setSongs}
        isplay={isplay}
        setIsplay={setIsplay}
        audioElem={audioElem}
        currentsong={currentsong}
        setCurrentsong={setCurrentsong}
        handleAudioSeek={handleAudioSeek}
        curAudioPos={curAudioPos}
      />
    </div>
  );
}

export default App;
