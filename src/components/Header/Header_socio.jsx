import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials=()=>{
    return(
        <div className="r">
            <a href="https://www.linkedin.com/in/bera-vamsi-krishna-10671a266/" target="_blank"  rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/vamsi22113/" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
    )
}
export default HeaderSocials