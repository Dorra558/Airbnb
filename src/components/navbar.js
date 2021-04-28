import React from 'react'
import {Navbar,Nav,FormControl, Container} from 'react-bootstrap'
import '../App.css';


function NavigationBar() {
  return(
    <div>
       <Navbar collapseOnSelect expand="lg" bg="light">
          <Container>
          <Navbar.Brand href="#home"><img src="imgs/logoAirbnb.png" class="logoAir"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                <FormControl type="text" placeholder="Commensez votre rechreche" className="mr-sm-2" />
                </Nav>
                <Nav.Link href="#features">Devenez hôte</Nav.Link>
                <i class="fas fa-globe"></i>
                <i class="fas fa-user-circle px-3"></i>
              
            </Navbar.Collapse>
          </Container>
       </Navbar>  
    </div>
   )

 }

export default NavigationBar



