/*---Images---*/
import Img8 from '/img8.svg'
/*---Icons---*/
import { GrSend } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
/*---Hooks---*/
import { HashLink as Link } from "react-router-hash-link";
import { useState } from 'react';
/*---Pages---*/
import Modal2 from '../components/Modal2'


const Contact = () => {

const [ isModal2, setModal2] = useState(false)

if(isModal2) {
    document.body.classList.add('active-modal')
} else {
    document.body.classList.remove('active-modal')
}


return (
        <>
            <section id='contact'>
                <div className="main-container">
                    <div className='contact-container'>
                        <div className='contact-left'>
                            <h1>Contact Me</h1>
                            <img src={Img8} />
                        </div>
                        <div className='contact-right'>
                            <h1>Let's connect!</h1>
                            <h2>Tell me about your projects.</h2>
                            <p>I am open to <span>collaborations</span> and <span>freelance</span> work. </p>
                            <div className='mess-container'>
                            <button onClick={() => setModal2(!isModal2)}>Message now <span><GrSend /></span></button>
                            </div>
                            <div className='contact-lists'>
                               <Link to='https://web.facebook.com/karu.sutibunhama.3'><FaFacebook /></Link>
                               <Link to='https://www.linkedin.com/in/arocha-carl-stephen-b3392b2b3/'><FaLinkedin /></Link>
                               <Link to='https://x.com/chatdog0403?t=oSsC-VZdm5EGezzmXsVVWw&s=09'><FaTwitter /></Link>
                               <Link to=''><FaPhone /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`modal2 ${isModal2 ? 'setopen' : ''}`}>
                <div className='overlay1' onClick={() => setModal2(!isModal2)}></div>
                <Modal2 setModal2={setModal2}/>
                </div>
            </section>
        </>
    )
}

export default Contact
