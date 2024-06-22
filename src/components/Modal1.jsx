/*---Hooks---*/
import PropTypes from "prop-types";
// install: npm install prop-types
const Modal1 = ({ setModal1 }) => {
  return (
    <>
      <div className="modal-content1">
        <button onClick={() => setModal1(false)}>Close</button>
        <p>
          Greetings, My name is Carl Stephen Arocha. I`m currently studying
          second year of BSIT. As a web developer, I possess a beginner-level
          skill set, which I have detailed below. As I am keen on expanding my
          portfolio, I am open to collaborating on projects that align with my
          skill set. Please find my skills outlined below. Thank you for your
          consideration.

          (bukas ulit)
        </p>
      </div>
    </>
  );
};

Modal1.propTypes = {
  setModal1: PropTypes.func.isRequired,
};

export default Modal1;
