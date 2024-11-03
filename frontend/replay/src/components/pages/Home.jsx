import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { Button } from './Button.jsx'
import GodotGame from './GodotGame';


export const Home = () => {

  const [isStarted, setIsStarted] = useState(false);
  const [isSecret1, setIsSecret1] = useState(false);
  const [isSecret2, setIsSecret2] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (!inputValue) {
      setErrorMessage('INPUT CANNOT BE BLANK');
      return;
    }
    setIsStarted(true);
  };

  const handleSecret1 = () => {
    setIsSecret1(true);
  };

  const handleSecret2 = () => {
    setIsSecret2(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(''); // Clear the error message when the user types
  };

  return (
    <div className="home-background">
      <div className="overlay"></div>
        <div className="left-cabinet">
          <div className="left-top">
            <div className="left-header">ADD Bros</div>
          </div>
          <div className="screen-border">
            <div className="left-screen"></div>
          </div>
          <div className="left-bottom">
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
        </div>
        <div className="arcade-cabinet">
            <div className="arcade-top">
              <div className="arcade-header">RePlay</div>
            </div>
            <div className="screen-border">
              <div className="arcade-screen">
              {isSecret1 && isSecret2 ? (
                  <div className="game">
                    {/* New content for the game stage when both secrets are true */}
                  </div>
                ) : isStarted ? (
                  <div className="game-content">
                    {/* New content for the game stage when the game has started */}
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
