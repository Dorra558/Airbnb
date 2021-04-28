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
                    <p>Airbnb Luxe</p>
                </li>
                <li>
                    <p>HotelTonight</p>
                </li>
                <li>
                    <p>Airbnb for Work</p>
                </li>
                <li>
                    <p>C'est possible, grâce aux hôtes</p>
                </li>
                <li>
                    <p>carrières</p>
                </li>
                <li>
                    <p>Lettre des fondateurs</p>
                </li>
            </ul>
            </Col>
        </Row>
    </div>
   )

 }

export default Footer