import { Link } from 'react-router-dom';
import MyA from '../../assets/images/mya.png'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss' ;
import Yellow from '../../assets/images/yellow_back.png'
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Resume from '../../assets/pdf/resume1.pdf';

const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate') ;
    const nameArray = ['s','h','i','s','h',' ','V','e','r','m','a'] ;
    const jobArray = ['_','_','_',' ','d','e','v','e','l','o','p','e','r','.']
    
    useEffect(()=>{
        
         setTimeout(()=>{
            setLetterClass('text-animate-hover') 
        },4000)
        
    },[])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    
                    <br/>
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                <img src ={MyA} alt="developer"/>
                <AnimatedLetters letterClass = {letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass = {letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>

                {/* <h2></h2>  skills */}
                <Link to={Resume} target='_blank' className='flat-button' > DOWNLOAD CV</Link>
                <Link to="/contact" className='flat-button' > CONTACT ME</Link>
            </div>

            <div className='images'>
                <img src={Yellow} className='shape'/>
            </div>


        </div>

        
        
    )
}

export default Home;