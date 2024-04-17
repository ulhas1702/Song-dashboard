import './App.css';
import Player from './player/player';
import { songsdata } from './player/audios';
import { useEffect, useRef, useState } from 'react';

function App() {
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
  }, [isplay, audioElem]); // Added audioElem to the dependency array

  const onplaying = (e) => {
    //const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    // Update the progress bar here
  };

  return (
    <div className="App">
      <audio
        src={currentsong.url}
        ref={audioElem}
        onLoadedData={(e) => {
          // setDuration(e.currentTarget.duration.toFixed(2)); // No longer using duration state
        }}
        onTimeUpdate={onplaying}
      ></audio>
      <Player
        songs={songs}
        setSongs={setSongs}
        isplay={isplay}
        setIsplay={setIsplay}
        audioElem={audioElem}
        currentsong={currentsong}
        setCurrentsong={setCurrentsong}
      />
    </div>
  );
}

export default App;
