import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>-   Job A -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
                <div className='card'>
                    <h3>- Job B -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
                <div className='card'>
                    <h3>- Job 3 -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
