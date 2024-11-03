import { React, useState, useEffect } from 'react'
import './Home.css'
import { Button } from './Button.jsx'
import GodotGame from './GodotGame';
import useSound from 'use-sound';
import replay from '/src/assets/replay.mp3'
import start from '/src/assets/start.mp3'
import end from '/src/assets/end.mp3'
import button from '/src/assets/button.mp3'
import joystick from '/src/assets/joystick.mp3'


export const Home = () => {
  const [playEnd] = useSound(end, { preload: true });
  const [playReplay] = useSound(replay, { preload: true});
  const [playStart] = useSound(start, { preload: true});
  const [playButton] = useSound(button, { preload: true});
  const [playJoystick] = useSound(joystick, { preload: true}); 

  const [isStarted, setIsStarted] = useState(false);
  const [isSecret1, setIsSecret1] = useState(false);
  const [isSecret2, setIsSecret2] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleStart = () => {
    if (!inputValue) {
      setErrorMessage('INPUT CANNOT BE BLANK');
      return;
    }
    playReplay();
    setIsStarted(true);
  };

  const handleSecret1 = () => {
    playButton();
    setIsSecret1(true);
  };

  const handleSecret2 = () => {
    playJoystick();
    setIsSecret2(true);
    playStart();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(''); // Clear the error message when the user types
  };

  useEffect(() => {
    const handleMessage = (event) => {
      playEnd();
      if (event.data === 'exitGame') {
        setIsSecret1(false);
        setIsSecret2(false);
      }
    };
  
    window.addEventListener('message', handleMessage);
  
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  return (
    <div className="home-background" tabIndex="0">
      <div className="secret"></div>
      <div className="overlay"></div>
        <div className="left-cabinet">
          <div className="left-top">
            <div className="left-header">ADD Bros</div>
          </div>
          <div className="screen-border">
            <div className="left-screen"></div>
          </div>
          <div className="left-bottom">
            <div className="arcade-button" style ={{backgroundColor: 'black'}}>
                <Button/>
              </div>
              <div className="arcade-button2" style ={{backgroundColor: 'black'}}>
                <Button/>
              </div>
              <div className="arcade-button3" style ={{backgroundColor: 'black'}}>
                <Button/>
              </div>              
          </div>
        </div>
        <div className="right-cabinet">
          <div className="right-top">
            <div className="right-header"> Asteros</div>
          </div>
          <div className="screen-border">
            <div className="right-screen"></div>
          </div>
          <div className="right-botton"></div>
          <div className="joystick">
                <div className="ball" onClick={handleSecret2}></div>
              </div>
        </div>
        <div className="arcade-cabinet">
            <div className="arcade-top">
              <div className="arcade-header">RePlay</div>
            </div>
            <div className="screen-border">
              <div className="arcade-screen">
              {isSecret1 && isSecret2 ? (
                  <div className="game">
                    {
                      <GodotGame />
                    }
                  <div className="esc-msg">Press ESC to Exit</div>  
                  </div>
                ) : isStarted ? (
                  <div className="game">
                      <div className="computer-info">{inputValue}</div>
                      <div className="stat-bar">
                        <div className="segment segment1"></div>
                        <div className="segment segment2"></div>
                        <div className="segment segment3"></div>
                        <div className="segment segment4"></div>
                      </div>
                  </div>
                ) : (
                  <>
                    <div className="spacer"></div>
                    <div className="arcade-message">Do you wish you could play those old childhood videogames again?</div>
                    <div className="arcade-message"> With RePlay, you can!</div>
                    <div className="arcade-message"> Enter in any old or unwanted computer below!</div>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      className="model-input"
                      placeholder="Computer Name"
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="button">
                      <Button text="Press Start" onClick={handleStart} />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="arcade-bottom">
              <div className="joystick">
                <div className="ball" onClick={handleSecret2}></div>
              </div>
              <div className="arcade-button">
                <Button onClick={handleSecret1}/>
              </div>
              <div className="arcade-button2">
                <Button/>
              </div>
              <div className="arcade-button3">
                <Button/>
              </div>  
            </div>
        </div>
    </div>
  )
}
