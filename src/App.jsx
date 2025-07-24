import React from 'react'
import About from './components/about/About'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App=()=>{
    return(
        <>
        <Nav/>
        <Header/>
        <About/>
        <Experience/>
        <Footer/>
        </>
    )
}
export default App