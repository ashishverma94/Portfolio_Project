import './index.scss';
import AnimatedLetters from'../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGit, faGitAlt, faGithub, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Cpp from '../../assets/images/cpp.png'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate') ;

    useEffect(()=>{
        
        setTimeout(()=>{
           setLetterClass('text-animate-hover') 
       },4000)
       
   },[])

   

    return(
        <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I'm very ambitious person looking for a 
                role in established IT company with the opportunity 
                to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quietly confident, naturally curious, and 
                perpetually working on imiproving my chops one 
                design problem at a time.
            </p>
            <p>
                If I need to define myself in one sentence that 
                would be a hardworking and tech-obsessed !!!
            </p>

        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className = 'face1'>
                    < FontAwesomeIcon icon={faJava} color="#DD0031" />
                </div>
                <div className = 'face2'>
                    < FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className = 'face3'>
                    < FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className = 'face4'>
                    < FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className = 'face5'>
                    < FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className = 'face6'>
                    {/* < FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
                    <img className='LangLogo' src={Cpp} alt ='cpp' />
                </div>
                
            </div>
        </div>
    </div>

    </>

    )


}

export default About;