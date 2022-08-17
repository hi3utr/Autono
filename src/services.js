import { useState, useEffect } from 'react'
import services from './img/services.webp'

function Services(){
    return(
        <div className='services'>
            <div className='services-left'>
                <p className='servicesName'>
                    Services
                </p>
                <p className='servicesHeader'>
                    We Deliver Exceptional Products and Services Around the World
                </p>
            </div>
            <div className='servicesDriving'>
                <div className='servicesDrivingLeft'>
                    <p className='servicesDrivingHeader'>AUTONOMOUS DRIVING</p>
                    <p className='servicesDrivingContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <div className='servicesDrivingRead'>Read more</div>
                </div>
                <div className='servicesDrivingRight'>
                    <img src={services} alt=''/>            
                </div>
            </div>

        </div>
    )
}

export default Services