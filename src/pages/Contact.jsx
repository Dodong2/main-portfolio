/*---Images---*/
import Img8 from '/public/img8.svg'
/*---Icons---*/
import { GrSend } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
/*---Hooks---*/
import { HashLink as Link } from "react-router-hash-link";
const Contact = () => {
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
                            <button>Message now <span><GrSend /></span></button>
                            </div>
                            <div className='contact-lists'>
                               <Link to=''><FaFacebook /></Link>
                               <Link to=''><FaLinkedin /></Link>
                               <Link to=''><FaTwitter /></Link>
                               <Link to=''><FaPhone /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
