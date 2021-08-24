import React from 'react';
import { Button, Card } from 'react-bootstrap';
import burger from '../../photos/Image/adult-blur-blurred-background-687824.png';
import shef from '../../photos/Image/chef-cook-food-33614.png';
import delivery from '../../photos/Image/architecture-building-city-2047397.png';

const Speciality = () => {
    return (
        <div >
            <div style={{margin: '30px 0px'}}>
            <h3>Why you choose us</h3>
            <small>Barton waiter twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</small>
            </div>
            <div style={{marginLeft: '120px'}}>
                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={burger} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">See more</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shef} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="card-design">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={delivery} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Speciality;