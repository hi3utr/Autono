import { useState, useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import facts from './img/facts.webp'
function Facts(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="facts">
            <div className="factsImg">
                <img src={facts} alt=""/>
            </div>
            <div className="factsNumbers">
                <p className="factsNumbersHeader">Autono In Numbers</p>
                <div className='factsNumbersContainer'>
                    <div>
                        <p className="factsNumbersStats">200</p>
                        <div className='factsNumbersLine' data-aos="fade-left"></div>
                        <p className="factsNumbersName">Employees</p>
                    </div>
                    <div>
                        <p className="factsNumbersStats">5</p>
                        <div className='factsNumbersLine' data-aos="fade-left"></div>
                        <p className="factsNumbersName">Core Teams</p>
                    </div>
                    <div>
                        <p className="factsNumbersStats">200M$</p>
                        <div className='factsNumbersLine' data-aos="fade-left"></div>
                        <p className="factsNumbersName">Capital</p>
                    </div>
                    <div>
                        <p className="factsNumbersStats">326</p>
                        <div className='factsNumbersLine' data-aos="fade-left"></div>
                        <p className="factsNumbersName">Partners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts