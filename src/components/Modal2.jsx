/*---Hooks---*/
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import PropTypes from "prop-types";
/*---Icons---*/
import { GrSend } from "react-icons/gr";
const Modal2 = () => {
    /* for message para makita yung message if success ba na send or not */
    const [message, setMessage] = useState(null);
    const Message = ({ message }) => {
        return <div className="message">{message}</div>;
    };
    Message.propTypes = {
        message: PropTypes.string.isRequired,
    };


    /*----------Email.js library----------*/
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_345facs", "template_u1bdmy5", form.current, {
                publicKey: "pcVUpUfKq-HRj0GQI",
            })
            .then(
                () => {
                    setMessage("Sent Successfully!");
                    e.target.reset();
                },
                (error) => {
                    setMessage("FAILED... " + error.text);
                }
            );
    };
    /*----------End Email.js library----------*/

    return (
        <>
            <div className='modal-content2'>
                <div className='input-box'>
                {message && <Message message={message} />}
                    <form id="fillup" ref={form} onSubmit={sendEmail}>
                        <input type="text" id="opname" name="from_name" className='input1' required />
                        <span className='span1'>Name</span>
                        <input type="text" name="from_email" className='input2' required id="gmail" />
                        <span className='span2'>your Email</span>
                        <textarea name="message" rows="5" cols="50" id="message" className='input3' required></textarea>
                        <span className='span3'>your message</span>
                        <div className="modal2-footer">
                            <span><GrSend /></span>
                            <button type="submit" value="send">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal2
