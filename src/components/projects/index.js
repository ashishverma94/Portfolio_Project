import React from 'react'
import './index.css';
import logo from '../../assets/images/pro1.jpg';

const Projects = () => {
    return (
        <div className='proclass'>
            <h1>My Projects</h1>
            
                <ul>
                    <a href='https://self-driving-car-mu.vercel.app/' target='_blank'><li> Self Driving Car </li></a>
                    <a href = 'https://image-generator-app-7i7d.vercel.app/' target='_blank'><li> Drawing Pad </li></a>
                    <a href = 'https://teach-nook-weather-app.vercel.app/' target = '_blank'><li> Weather App</li></a>
                    <a href = 'https://movie-next-project.vercel.app/' target='_blank'><li> Movies App</li></a>
                    <li> Book Store </li>

                </ul>

                

               

            </div>

    )
}

export default Projects;