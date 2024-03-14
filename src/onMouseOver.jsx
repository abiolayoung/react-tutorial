import React from 'react';
import {useState} from 'react';

function MouseOver(){
    const [mouseOver, setMouseOver] = useState("React Tutorial");
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseOver(event){
        event.preventDefault()
      setMouseOver("React made easy")
      setIsHovered(false)
    }

    function handleMouseLeave(event){
        event.preventDefault()
        setMouseOver("React Tutorial")
        setIsHovered(true)
    }

   return (
    <div onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
     className="mouseOver">
        <h2>{mouseOver}</h2>
    </div>
   )
}

export default MouseOver;