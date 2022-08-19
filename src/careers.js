import AOS from 'aos'
import "aos/dist/aos.css";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
function Careers (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="careers">
            <div className="careersLeft">
                <p className="careersName">Careers</p>
                <p className="careersHeader">We’re looking for innovative talent to join our team. See all positions and submit your CV.</p>
                <div className='careersRead'>Openings</div>
            </div>
            <div className="careersRight" data-aos="fade-up" data-aos-duration="800">
            
                <Swiper
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    bulletActiveClass: "test-bullet",
                    bulletClass:"swiper-pagination-bullet bullet-bar"
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div id="careersJobsEE">
                            <p className='careersJobsName'>ELECTRICAL ENGINEER</p>
                            <p className='careersJobsLoc'>San Francisco, CA</p>
                            <p className='careersJobsContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button>Apply Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="careersJobsDS">
                            <p className='careersJobsName'>DATA SCIENTIST</p>
                            <p className='careersJobsLoc'>San Francisco, CA</p>
                            <p className='careersJobsContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button>Apply Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="careersJobsAI">
                            <p className='careersJobsName'>ARTIFICIAL INTELLIGENCE RESEARCHER</p>
                            <p className='careersJobsLoc'>San Francisco, CA</p>
                            <p className='careersJobsContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button>Apply Now</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="careersJobsDL">
                            <p className='careersJobsName'>DEEP LEARNING ENGINEER</p>
                            <p className='careersJobsLoc'>San Francisco, CA</p>
                            <p className='careersJobsContent'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button>Apply Now</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    )
}

export default Careers