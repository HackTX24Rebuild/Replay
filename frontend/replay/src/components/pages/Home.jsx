import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { Button } from './Button.jsx'
import GodotGame from './GodotGame';


export const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(''); // Clear the error message when the user types
  };

  return (
    <div className="home-background">
      <div className="overlay"></div>
        <div className="arcade-cabinet">
            <div className="arcade-top">
              <div className="arcade-header">RePlay</div>
            </div>
            <div className="screen-border">
                <div className="arcade-screen">
                <GodotGame />
                  <div className="arcade-message">Do you wish you could play those old childhood videogames again?</div>
                  <div className="arcade-message"> With RePlay, you can!</div>
                  <div className="arcade-message"> Enter in any old or unwanted computer below!</div>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="model-input"
                    placeholder="Input Computer"
                  />
                    <div className="buttons">
                      <Button text = "Level Up"/>
                    </div>
                </div>
            </div>
            <div className="arcade-bottom"></div>
        </div>
    </div>
  )
}
