import React from 'react'
import './Home.css'
import Greece from '../../images/greece.png'
import alps from '../../images/alps.jpg'
import bungalow from '../../images/bungalow.png'

const Home = () => {
  return (
    <>
    <div className='home-content'>
      <div className='image-text-container'>
        <h1 className='image-text'>Eager to Explore?</h1>
      </div>
      <img className='homeImage' src={ Greece } alt='Greece'></img>
      <h1 className='home-title'>Custom Vacation and Travel</h1>
      <h1 className='home-title'>~</h1>
        <h1 className='home-title'>Find your dream destination</h1>
          <div className='home-grid'>
            <div className='home-grid-cell'>
              <h2 className='home-text-title'>Explore</h2>
              <p className='home-text'>Don't settle for the same old vacation spots, Find truly unique destinations that you will never forget.</p>
            </div>
            <div className='home-grid-cell'>
              <img className='home-grid-image' src={ alps } alt=''></img>
            </div>
            <div className='home-grid-cell'>
                <h2 className='home-text-title'>Plan the memories</h2>
                <h3 className='home-text'>We offer a wide range of services! Plan your destination events so you can truly focus on the people you are spending your most important days with. </h3>
            </div>
            <div className='home-grid-cell'>
              <img className='home-grid-image' src={ bungalow } alt=''></img>
              </div>

          </div>
    </div>
    </>
  )
}

export default Home
