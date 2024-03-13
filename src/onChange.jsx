import React from 'react';
import {useState} from 'react';

function Change(){
    const [display, setDisplay] = useState(null);
   function handleClick(event){
    event.preventDefault()
    setDisplay(event.target.value)

   }

 return (
    <section className="changeEvent">
      <form
      onSubmit = {(event)=>{
        event.preventDefault()
        const { name, email, phone} = event.target.elements;
        setDisplay(name.value+" - "+email.value+" - "+phone.value)
        // console.log(name.value, email.value, phone.value)
    }}>
        <input type="text" onChange={handleClick} placeholder="Enter your full name" name="name"/>
        <input type="email" onChange={handleClick} placeholder="Enter your Email" name="email"/>
        <input type="tel" onChange={handleClick} placeholder="Enter your Phone" name="phone"/>
        <button type="submit">Submit</button>
      </form>
      <div className="display">{display}</div>
    </section>
 )
}

export default Change;