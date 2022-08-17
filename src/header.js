import { useState, useEffect } from 'react'

function Header(){
    const [navColor, setNavColor] = useState(false)
    const changeColor = () => {
     if(window.scrollY >= 20){
       setNavColor(true)
     }else{
       setNavColor(false)
     }
    }
    window.addEventListener('scroll', changeColor)
    return(
        <div className="App-header">
            <div className={navColor ? 'navBar-bg' : 'navBar'}>
                <div className='navLeft'>Autono</div>
                <div className='navRight'>
                    <div className='navRightTech'>Technonoly</div>
                    <div className='navRightAbt'>About</div>
                    <div className='navRightCarr'>Careers</div>
                    <div className='navRightSub'>Subcribe</div>
                </div>
            </div>

            <div className="headerBanner">
                <p className='headerBannerContent'>
                THE FUTURE OF MOBILITY IS HERE
                </p>
                <p className='headerBannerSubContent'>
                Discover the safest self-driving experience with Autono.
                </p>
            </div>
        </div>
    )
}

export default Header;