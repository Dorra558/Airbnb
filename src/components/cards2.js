import React from 'react'
import '../App.css'

function Experience(props){
    return(
        props.experiences.map(el=>
          
      <div className=" py-5">
         <div className="mr-3">
             <img className="photo" src={el.src} />
             <h4 className="d-flex align-items-center">{el.title}</h4>
             <p>{el.parag}</p>
         </div>
      </div>
     )
    )
 }

export default Experience