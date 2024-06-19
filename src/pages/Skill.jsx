import Img2 from '/public/img2.svg'
import Img3 from '/public/img3.svg'
import Img4 from '/public/img4.svg'
import Img5 from '/public/img5.svg'
import Img6 from '/public/img6.svg'


const Skill = () => {
    return (
        <>
            {/*----------SKILL----------*/}
            <section id='skill'>
                <div className='main-container'>
                    {/*----------SKILL CONTAINER----------*/}
                    <div className='skill-container'>
                        <div className='title'>SKILLS</div>
                        {/*----------SKILL CARD----------*/}
                        <div className='skill-card'>
                            {/*----------CARD 1----------*/}
                            <div className='card1'>
                                <div className='card-head'>
                                    <div className='title-card'>
                                        <div>Front-End</div>
                                    </div>
                                    <img src={Img2} />
                                </div>
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind</li>
                                    <li>React.JS</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                            {/*----------CARD 2----------*/}
                            <div className='card2'>
                                <div className='card-head'>
                                    <div className='title-card'>
                                        <div>Back-End</div>
                                    </div>
                                    <img src={Img3} />
                                </div>
                                <ul>
                                    <li>PHP</li>
                                    <li>Node.JS</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            {/*----------CARD 3----------*/}
                            <div className='card3'>
                                <div className='card-head'>
                                    <div className='title-card'>
                                        <div>Other</div>
                                    </div>
                                    <img src={Img4} />
                                </div>
                                <ul>
                                    <li>Vite</li>
                                    <li>Next.JS</li>
                                    <li>Typescript</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        {/*----------Mini CARD----------*/}
                        <div className='mini-card'>
                            <div className='mini-card1'>
                                <img src={Img5} />
                                <h1>Front-End</h1>
                                <p>As a Front-End Developer, I ensure the UI accurately reflects the design.</p>
                            </div>
                            <div className='mini-card2'>
                                <img src={Img6} />
                                <h1>Back-End</h1>
                                <p>As a Back-End Developer, I can perform basic back-end services, including working with MySQL.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Skill
