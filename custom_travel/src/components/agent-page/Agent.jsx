import React from 'react'
import './Agent.css'
import wedding from '../../images/wedding.jpg'

const Agent = () => {
  return (
    <>
      <div className='agent-container'>
        <img src= { wedding } alt='Destination wedding' className='wedding-img'></img>
        <h1 className='wedding-text'>Wedding on the beach?</h1>
        <h1>Custom Vacation and Travel make dreams come true</h1>
      </div>
    </>
  )
}

export default Agent
