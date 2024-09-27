import React from 'react'
import './Header.css'
import './predictall.html'
import Button from './Button.jsx'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2 class="bordered-text">Predict the Prices of Commodities</h2>
            {/* <p>Hungry? We've got you covered! Browse through a variety of delicious meals from top-rated restaurants and local favorites. Whether you're craving a quick snack or a full-course meal, our food delivery app brings the best options right to your doorstep.</p> */}
            <Button/>
        </div>
    </div>
  )
}

export default Header