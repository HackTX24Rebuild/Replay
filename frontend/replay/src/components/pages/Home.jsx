import React from 'react'
import './Home.css'
import { Button } from 'src/components/Button.jsx'


export const Home = () => {
  return (
    <div className="home-background">
        <div className="spacer"></div>
        <div className="arcade-cabinet">
            <div className="arcade-top"></div>
            <div className="screen-border">
                <div className="arcade-screen">
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
