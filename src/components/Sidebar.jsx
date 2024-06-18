/*---Hooks---*/
import { useState } from "react";
/*---Icons---*/
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { TbHomeFilled } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaSquarePhone } from "react-icons/fa6";
import { RiStackshareFill } from "react-icons/ri";
/*---Hooks---*/
/*---Hooks---*/

const Sidebar = () => {
    const [ isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='sidebar-container'>
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
          <nav className={isOpen ? "" : "notxt"}>
          <button ><TbHomeFilled /><span>Home</span></button>
          <button className=""><GiSkills/> <span>Settings</span></button>
          <button><LiaProjectDiagramSolid/> <span>Build</span></button>
          <button><FaSquarePhone/><span>Contact</span></button>
          <button className="btn5"><RiStackshareFill/><span>Share</span></button>
          </nav>
        </div>
      </aside>
      </div>
    </>
  )
}

export default Sidebar
