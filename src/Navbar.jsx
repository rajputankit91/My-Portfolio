import React from "react";
import { useState,useEffect } from "react";
// import {Link} from 'react-scroll'

export default function Navbar(){
    const [navActive,setNavActive] = useState(false)

    // const toggleNav = () =>{
    //     setNavActive(!navActive)
    // }

    // const closeMenu = () =>{
    //     setNavActive(false)
    // }

    // useEffect(() =>{
    //     const handleResize = () =>{
    //         if(window.innerWidth <= 500){
    //             closeMenu
    //         }
    //     }
    //     window.addEventListener('resize',handleResize);

    //     return () =>{
    //         window.removeEventListener('resize',handleResize)
    //     }
    // },[])

    // useEffect(() =>{
    //     if(window.innerWidth <= 1200){
    //         closeMenu
    //     }
    // })

    return(
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="logo-div">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/320400615/original/41ce77932062173d2a1dee0b20ebc305af0c2a8f/create-unique-and-eye-catching-logo-designs.png" height={100}
                width={150}></img>
            </div>
            <div className="nav-icon">
                <ul className="navList">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>

        </nav>
    )
}