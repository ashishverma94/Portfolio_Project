import React from 'react'
import './index.css';
import logo from '../../assets/images/pro1.jpg';

const Projects = () => {
    return (
        <div className='proclass'>
            <h1>My Projects</h1>
                <ul>
                    <a href = 'https://movie-next-project.vercel.app/' target='_blank'><li> Movies App</li></a>
                    <a href = 'https://tuf-assignment-rouge.vercel.app/' target = '_blank'><li> Coding Compiler</li></a>
                    <a href='https://levitation-invoice-generator.vercel.app/login' target='_blank'><li> Invoice Generator App </li></a>
                    <a href = 'https://blue-dollar-4mqh.vercel.app/' target='_blank'><li> Blue Dollar ( Web Scrapping ) </li></a>
                    <a href = 'https://next-ai-chatbot-woad.vercel.app/' target = '_blank'><li>ChatBot (ChatGPT )</li></a>
                    <a href =  'https://zepto-pick-fruit.vercel.app/' target = '_blank'><li>Pic Fruit</li></a>
                    <a href =  'https://affiliate-project.vercel.app/' target = '_blank'><li>Update Courses ( react-router-dom)</li></a>
                </ul>
            </div>
    )
}

export default Projects;
