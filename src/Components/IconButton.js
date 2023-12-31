/*
      Created By: Aniket Biswas
      Github: https://github.com/thesmartaniket
      LinkedIn: https://www.linkedin.com/in/thesmartaniket/
*/

//libaries and css
import React, { useState } from "react";
import './ComponentCss/iconbutton.css'

const IconButton = ({Icon, Text, OnClick, filter, border, fontWeight}) => {
    //useState variable
    const [isHovering, setHovering] = useState(false)

    return(
        <div
            onClick={OnClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)} 
            className="iconButton"
            style={{
                border:(border)?border:'',
                fontWeight:(fontWeight)?fontWeight:''
            }}
            >
            <img
                style={{
                    filter:(isHovering && filter)?'invert(100%)':''
                }} 
                width={"30px"} 
                src={Icon} 
                alt=""/>
            <span>{Text}</span>
        </div>
    )
}

export default IconButton