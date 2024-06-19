/*---Hooks---*/
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";
/*---Icons---*/
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { TbHomeFilled } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaSquarePhone } from "react-icons/fa6";
import { RiStackshareFill } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='sidebar-container'>
        <div className='menu-phone'>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon">{isOpen ? <IoClose /> : <RiMenu4Fill />}</span>
          </button>
        </div>
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="inner">
            <header>
              <button
                type="button"
                className="sidebar-burger"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="icon">{isOpen ? <IoClose /> : <RiMenu4Fill />}</span>
              </button>
            </header>
            <nav className={isOpen ? "txt" : "notxt"}>
              <Link to='#home' className='btn' smooth><button><TbHomeFilled /><span>Home</span></button></Link>
              <Link to='#skill' className='btn' smooth><button><GiSkills /> <span>Skills</span></button></Link>
              <Link to='#project' className='btn' smooth><button><LiaProjectDiagramSolid /> <span>Build</span></button></Link>
              <Link to='#contact' className='btn' smooth><button><FaSquarePhone /><span>Contact</span></button></Link>
              <Link to='#share' className='btn' smooth><button><RiStackshareFill /><span>Share</span></button></Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
