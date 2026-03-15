import { FaReact, FaPython, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMongodb, SiMysql, SiSpringboot, SiFlask, SiPostman, SiJenkins, SiGo, SiExpress } from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced with modern programming languages, frameworks, databases, 
and development tools used to build scalable full-stack applications.</p>
                        <div className="skills-grid">

  <div className="skill-item">
    <SiCplusplus size={40}/>
    <p>C++</p>
  </div>

  <div className="skill-item">
    <SiJavascript size={40}/>
    <p>JavaScript</p>
  </div>

  <div className="skill-item">
    <FaPython size={40}/>
    <p>Python</p>
  </div>

  <div className="skill-item">
    <FaJava size={40}/>
    <p>Java</p>
  </div>

  <div className="skill-item">
    <SiGo size={40}/>
    <p>Go</p>
  </div>

  <div className="skill-item">
    <FaReact size={40}/>
    <p>React</p>
  </div>

  <div className="skill-item">
    <SiExpress size={40}/>
    <p>Express</p>
  </div>

  <div className="skill-item">
    <SiSpringboot size={40}/>
    <p>Spring Boot</p>
  </div>

  <div className="skill-item">
    <SiFlask size={40}/>
    <p>Flask</p>
  </div>

  <div className="skill-item">
    <SiMongodb size={40}/>
    <p>MongoDB</p>
  </div>

  <div className="skill-item">
    <SiMysql size={40}/>
    <p>MySQL</p>
  </div>

  <div className="skill-item">
    <FaDocker size={40}/>
    <p>Docker</p>
  </div>

  <div className="skill-item">
    <SiJenkins size={40}/>
    <p>Jenkins</p>
  </div>

  <div className="skill-item">
    <FaGitAlt size={40}/>
    <p>Git</p>
  </div>

  <div className="skill-item">
    <SiPostman size={40}/>
    <p>Postman</p>
  </div>

</div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
