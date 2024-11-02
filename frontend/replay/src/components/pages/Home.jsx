import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-background">
        <div className="spacer"></div>
        <div className="arcade-cabinet">
            <div className="arcade-top"></div>
            <div className="screen-border">
                <div className="arcade-screen">
                    Home
                </div>
            </div>
            <div className="arcade-bottom"></div>
        </div>
    </div>
  )
}
