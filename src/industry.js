import { useState, useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import GT from './img/General_Transport.webp'
import IDI from './img/IDI_Software.webp'
import IMO from './img/Imogen_Cars.webp'
import TRI from './img/Tri-Nex .webp'
function Industry (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="industry">
            <div className="industryLeft">
                <p className="industryName">Industry</p>
                <p className="industryHeader">Our Partners</p>
                <p className="industryContent">Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.</p>
            </div>
            <div className="industryRight">
                <div className="industryPartner" data-aos="zoom-in" data-aos-duration="800">
                    <img src={GT} alt=""/>
                    <p>GENERAL TRANSPORT</p>
                </div>
                <div className="industryPartner" data-aos="zoom-in" data-aos-duration="800">
                    <img src={IDI} alt=""/>
                    <p>IDI SOFTWARE</p>
                </div>
                <div className="industryPartner" data-aos="zoom-in" data-aos-duration="800">
                    <img src={IMO} alt=""/>
                    <p>IMOGEN CARS</p>
                </div>
                <div className="industryPartner" data-aos="zoom-in" data-aos-duration="800">
                    <img src={TRI} alt=""/>
                    <p>TRI-NEX</p>
                </div>
            </div>
        </div>
    )
}

export default Industry