/*---Hooks---*/
import { useState} from 'react'
/*---Components---*/
import Sidebar from "../components/Sidebar"
import Typewriters from "../components/Typewriter"
import Modal1 from '../components/Modal1'
/*---Images---*/
import Img1 from '/img1.svg'


const Home = () => {

  const [isModal1, setModal1] = useState(false)

  if(isModal1) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <>
      <section id='home'>
        <div className="main-container">
          <Sidebar/>
          <div className="title-home"><h1>CSA</h1></div>
          <div className='home-container'>
            <div className='txt-left'>
              <div className='box1'>
                <h1>Hi, I am<br /><span>Carl Arocha</span></h1>
                <Typewriters />
                <button onClick={()=>setModal1(!isModal1)}>Greetings</button>
              </div>
            </div>
            <div className='img-right'>
              <div className='box2'>
                <img src={Img1} />
              </div>
            </div>
          </div>
        </div>
        <div className={`modal1 ${isModal1 ? 'setopen' : ''}`}>
        <div className='overlay1' onClick={() => setModal1(false)}>
        </div>
        <Modal1 setModal1={setModal1}/>
        </div>
      </section>
    </>
  )
}

export default Home
