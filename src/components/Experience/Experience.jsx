
import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Footer from '../Footer/Footer'
const Experience=()=>{
    return(
        <section id='experience' style={{marginTop:'100px'}}>
            <h5>What Skilss I have</h5>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Front Development</h3>
                    <div className='experience__content'>
                    
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Mongo Db</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>MY SQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Experience