/*---Images---*/
import Img7 from "/public/img7.svg";
import Appcon from "/public/appcon.png";
import Todo from "/public/php crud.png"
import Cat from "/public/catfact.png"
import Bao from "/public/bao.png"
import Port from "/public/port design.png"
const Project = () => {
  return (
    <>
      <section id="project">
        <div className="main-container">
          {/*----------PROJECT----------*/}
          <div className="project-container">
            {/*----------PROJECT LAYER1----------*/}
            <div className="project-layer1">
              <div className="project-description1">
                <h1>See my projects</h1>
                <p>
                  In my past projects, I have showcased my proficiency in
                  front-end and back-end skills, with a strong focus on web
                  development. This includes web design as well.
                </p>
              </div>
              <div className="img-holder">
                <img src={Img7} />
              </div>
            </div>
            {/*----------PROJECT LAYER2----------*/}
            <div className="project-layer2">
              <div className="project-img">
                <img src={Appcon} />
              </div>
              <div className="project-description2">
                <span>2023-2024</span>
                <h1>HEAN</h1>
                <h2>Health Electronic Alert Network</h2>
                <p>
                  AppCon is a competition focused on developing web or mobile
                  applications that aim to resolve social issues in the
                  Philippines. Since this is a team project, my contributions
                  were in front-end development, where I coded the UI design
                  into the website and hosted it.
                </p>
              </div>
            </div>
            {/*----------PROJECT LAYER3----------*/}
            <div className="project-layer3">
              <div className="project-img">
                <img src={Todo} />
              </div>
              <div className="project-description2">
                <span>2023-2024</span>
                <h1>ToDo List</h1>
                <h2>PHP - CRUD</h2>
                <p>
                  I created this project to learn the basics of backend
                  development. In this project, I performed CRUD operations
                  using PHP and MySQL, and hosted it on InfinityFree.
                </p>
              </div>
            </div>
            {/*----------PROJECT LAYER2----------*/}
            <div className="project-layer2">
              <div className="project-img">
                <img src={Bao} />
              </div>
              <div className="project-description2">
                <span>2024</span>
                <h1>BAO Website UI</h1>
                <h2>Business Affairs Office</h2>
                <p>
                This is our final project in the subjects Multimedia Systems and Web Systems and Technologies, where my classmates handled the website design while I coded its UI and deployed it.
                </p>
              </div>
            </div>
            {/*----------PROJECT LAYER3----------*/}
            <div className="project-layer3">
              <div className="project-img">
                <img src={Cat} />
              </div>
              <div className="project-description2">
                <span>2024</span>
                <h1>Cat Facts</h1>
                <h2>CatFacts API</h2>
                <p>
                I used to create Cat Fact ideas to bring fun thoughts to everyone about their cats. In this project, I learned how to integrate data using an Application Programming Interface (API).
                </p>
              </div>
            </div>
            {/*----------PROJECT LAYER2----------*/}
            <div className="project-layer2">
              <div className="project-img">
                <img src={Port} />
              </div>
              <div className="project-description2">
                <span>2024</span>
                <h1>Portfolio Design</h1>
                <h2>Figma Website Design</h2>
                <p>
                This is my first website design project in Figma. It is my portfolio design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
