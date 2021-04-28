import React from 'react'


function Country (props) {
  return(
      props.city.map(el=>
        
    <div className=" pt-5 mx-5">
       <div className="d-flex">
           <img class="ville mr-2" src={el.src} />
           <h6 className="d-flex align-items-center">{el.name}</h6>
       </div>
    </div>
   )
  )
 }

export default Country