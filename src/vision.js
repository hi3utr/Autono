import { useState, useEffect } from 'react'
import car_vision from './img/car_vision.png'
import AOS from 'aos'
import "aos/dist/aos.css";
function Vision(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className='Vision'>
            <div className='vision-left'>
                <p className='visionName'>
                    Vision
                </p>
                <p className='visionHeader'>
                    We’re Changing the Way the World Thinks About Cars
                </p>
                <p className='visionContent'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <div className='vision-right' data-aos="fade-left">
                <img src={car_vision} alt=''/>
            </div>

        </div>
    )
}

export default Vision;