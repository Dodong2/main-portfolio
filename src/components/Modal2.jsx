/*---Hooks---*/
/*---Icons---*/
import { GrSend } from "react-icons/gr";
const Modal2 = () => {
  return (
    <>
      <div className='modal-content2'>
    <div className='input-box'>
    <form id="fillup" >
    <input type="text" id="opname" name="from_name" className='input1' required/>
    <span className='span1'>Name</span>
    <input type="text" name="from_email" className='input2' required id="gmail"/>
    <span className='span2'>your Email</span>
    <textarea name="message" rows="5" cols="50" id="message" className='input3' required></textarea>
    <span className='span3'>your message</span>
    <div className="modal2-footer">
    <span><GrSend/></span>
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
