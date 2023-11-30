import React from 'react'
import { pdfjs } from 'react-pdf'
export default function MainSection(){
    const downloadResume = () =>{
        console.log('clicked')
    }

    return (
        <section id = 'mainSection' className="main-section">
            <div className="section-container">
                <div className="main-section-container">
                    <div className='hello'>Hello 👋 I'm</div>
                    <div className='my-name'>Ankit Kumar</div>
                    <div className='text'>And I'm a front End Developer</div>
                    <a className='resume' href="resume.pdf" download="resume.pdf" onClick={downloadResume}>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}