import Img2 from '/public/img2.svg'
import Img3 from '/public/img3.svg'
import Img4 from '/public/img4.svg'


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
                                <div>Back-End</div>
                                <img src={Img3} />
                                <ul>
                                    <li>PHP</li>
                                    <li>Node.JS</li>

                                </ul>
                            </div>
                            {/*----------CARD 3----------*/}
                            <div className='card3'>
                                <div>Others</div>
                                <img src={Img4} />
                                <ul>
                                    <li>Vite</li>
                                    <li>Next.JS</li>
                                    <li>Typescript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
