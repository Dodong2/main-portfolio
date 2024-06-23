/*---Hooks---*/
import PropTypes from "prop-types";
// install: npm install prop-types
/*---Images---*/
import Img13 from '/img13.svg'
import Img14 from '/img14.svg'
/*---Icons---*/
import { IoClose } from "react-icons/io5";
const Modal1 = ({ setModal1 }) => {
  return (
    <>
      <div className="modal-content1">
      <div className='modal1-header'>
      <img src={Img13}/>
      <button onClick={() => setModal1(false)}><IoClose/></button>
      </div><br/>        
        <p>
          Greetings, My name is Carl Stephen Arocha. I`m currently studying
          second year of BSIT. As a web developer, I possess a beginner-level
          skill set, which I have detailed below. As I am keen on expanding my
          portfolio, I am open to collaborating on projects that align with my
          skill set. Please find my skills outlined below. Thank you for your
          consideration.
        </p>
        <div className='modal1-footer'>
        <img src={Img14}/>
        </div>
      </div>
    </>
  );
};

Modal1.propTypes = {
  setModal1: PropTypes.func.isRequired,
};

export default Modal1;
