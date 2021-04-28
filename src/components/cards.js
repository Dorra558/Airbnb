import React from 'react'
import {Container, Row} from 'react-bootstrap'
import '../App.css'


function Service(props){
return(
    props.services.map(el=>
        
<Container>
    <div>
      <Row className="d-flex">
       <img className="servImg mb-2" src={el.src}/>
       <h5 className="">{el.title}</h5>
      </Row>
    </div>
</Container>
   )
    )
 }

export default Service