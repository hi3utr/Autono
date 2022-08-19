import { useState, useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
function Why(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className='why'>
            <div className='whyContainer' data-aos="fade-up" data-aos-duration="800">
                <p className='whyText'>Why Autono</p>
                <p className='whyHeader'>A different approach, using a new method of manufacturing.</p>
                <p className='whyContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <div className='whyRead'>Read more</div>
            </div>
        </div>
    )
}

export default Why