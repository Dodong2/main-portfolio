/*---Components---*/
import Sidebar from "../components/Sidebar"
import Typewriters from "../components/Typewriter"
import Img1 from '/public/img1.svg'

const Home = () => {
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
                <button>Greetings</button>
              </div>
            </div>
            <div className='img-right'>
              <div className='box2'>
                <img src={Img1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
