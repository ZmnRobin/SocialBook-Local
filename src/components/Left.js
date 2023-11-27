import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Left() {
    return (
        <Card style={{ width: '18rem' }} className='left'>
          <Card.Img variant="top" src="/images/profile.png" />
            <Card.Body>
              <Card.Title>Random User</Card.Title>
              <Card.Text>
                I’m not the kind of person who tries to be cool or trendy, I’m definitely an individual.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>XYZ University</ListGroup.Item>
              <ListGroup.Item>ABC High School</ListGroup.Item>
              <ListGroup.Item>Dhaka, Bangladesh</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}
