import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faTruck, faBusAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
import burger from '../../photos/Image/adult-blur-blurred-background-687824.png';
import shef from '../../photos/Image/chef-cook-food-33614.png';
import delivery from '../../photos/Image/architecture-building-city-2047397.png';

const Speciality = () => {
    return (
        <div >
            <div style={{margin: '30px 0px', marginLeft: '120px'}}>
            <h3>Why you choose us</h3>
            <small>Barton waiter twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</small>
            </div>
            <div style={{marginLeft: '100px'}}>
                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burger} />
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faBusAlt} /> fast Delivery</Card.Title>
                            <Card.Text>
                                Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.
                            </Card.Text>
                            <Button variant="primary">See more <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shef} />
                        <Card.Body>
                            <Card.Title> <FontAwesomeIcon icon={faBell} /> A Good Auto Responder</Card.Title>
                            <Card.Text>
                            Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.

                            </Card.Text>
                            <Button variant="primary">See more <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={delivery} />
                        <Card.Body>
                            <Card.Title> <FontAwesomeIcon icon={faTruck} /> Home Delivery</Card.Title>
                            <Card.Text>
                            Keep your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.

                            </Card.Text>
                            <Button variant="primary">See more <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Speciality;