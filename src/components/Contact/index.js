import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser' ;
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form=useRef() ;
    useEffect(() => {

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    

    const sendEmail =(e)=>{
        e.preventDefault() ;

        emailjs.sendForm(
            'service_o2znh5m',
            'template_8ate8h6',
            form.current,
            "fhV4UNcVTRshECH-q"
        )
        .then(
            ()=>{
                alert("Message successfully send!") ;
                window.location.reload(false) ;
            },
            (e)=>{
                console.log(e) ;
                alert('Failed to send the Email, please try again') ;
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        Contact me using below form -.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type = "text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input className='flat-button' value="Send" type = "submit" />
                            </li>
                        </ul>
                        </form>
                    </div>




                </div>

                <div className='info-map'>
                    Ashish Verma,
                    <br/>
                    Uttar Pradesh, India
                    <br/>
                    Sitapur,Biswan 261201<br/>
                    <span>hariashish1@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[27.4938,80.9965]} zoom={8}  >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
                        <Marker position={[27.4938,80.9965]} />
                    </MapContainer>
                </div>
            
            </div>
        </>
    )
}

export default Contact;