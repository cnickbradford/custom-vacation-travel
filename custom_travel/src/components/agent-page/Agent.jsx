import React from 'react'
import './Agent.css'
import wedding from '../../images/wedding.jpg'
import cvt from '../../images/CVT_logo.png'

const Agent = () => {
  return (
    <>
      <div className='agent-container'>
        <img src= { wedding } alt='Destination wedding' className='wedding-img'></img>
        <h1 className='agent-header'>Wedding on the beach?</h1>
        <h1 className='agent-header'>~</h1>
        <h1 className='agent-header'>Custom Vacation and Travel can make that dream come true!</h1>
        <div className='agent-grid'>
            <div className='agent-cell'>
              <h1 className='agent-header'>Some of Our Services</h1>
              <ul className='agent-list'>
                <li>International Travel</li>
                <li>Custom built trips</li>
                <li>Destination bachelor/bachelorette parties</li>
                <li>Destination weddings/honeymoon packages</li>
                <li>All inclusive resorts (family and adult only)</li>
                <li>Cruises (river and ocean sailings)</li>
                <li>Corporate, Group, and solo travel</li>
                <li>Private home rentals</li>
                <li>Tours and excursions</li>
              </ul>
            </div>
            <div className='agent-cell'>
              <img className='CVT' src={ cvt } alt='Custom Vacation and Travel'></img>
            </div>
          </div>
          <div className='paragraph-container'>
            <h1 className='agent-header'>Meet your agent!</h1>
            <p className='agent-paragraph' >Hey there! I am glad you found me. My name is Stacey and I was born and raised in Maine but my husband and I now call Virginia our home. We have adult twin sons, three grandchildren and a bonus grandson. When we are not adventuring, we love to spend time at home with our dog Layla, our cat Largo and our fluffy little flock of Polish chickens. 
I found my love for travel at an early age and have traveled all over the US and have visited five different countries as well as the British Virgin Islands and Puerto Rico. 
It was when friends started asking for blogs of our magnificent journeys I had planned, that grew into them wanting to vacation with us and ultimately asking me to plan their trips too. That is when I knew it was time to make this a career!
I also own a very successful hair salon, happy people are my passion! When combined with my love for travel, business sense and excellent customer service skills, I am driven to achieve all of your travel desires!</p>
          </div>
      </div>
    </>
  )
}

export default Agent
