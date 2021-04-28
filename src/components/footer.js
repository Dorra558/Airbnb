import React from 'react'
import{Row, Col, Container} from 'react-bootstrap'
import '../App.css';

function Footer(){
  return(
    <div>
        <Row>
            <Col>
            <h5 className="text-uppercase">À propos</h5>
            <ul>
                <li>
                    <p>Fonctionnement d'Airbnb</p>
                </li>
                <li>
                    <p>Newsroom</p>
                </li>
                <li>
                    <p>Investisseurs</p>
                </li>
                <li>
                    <p>Airbnb</p>
                </li>
            </ul>
            </Col>
        </Row>
    </div>
   )

 }

export default Footer