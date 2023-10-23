import song from "./song.mp3"
import './App.css';
import { useRef, useState } from "react";

function App() {

  const [musicPlay, setMusicPlay] = useState(true);
  const refAudio = useRef();


  const handleMusic = () => {
    setMusicPlay(!musicPlay);
    musicPlay ? refAudio.current.play() : refAudio.current.pause()
  }

  return (
    <div className="App">

      <audio
        loop="loop"
        src={song}
        ref={refAudio}>
      </audio>

      <button onClick={handleMusic}>
        {musicPlay ? "Play" : "Pause"}
      </button>
    </div>
  );
}

export default App;
