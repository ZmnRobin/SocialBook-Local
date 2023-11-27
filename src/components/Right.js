import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Right() {
  return (
    <Card style={{ width: '18rem' }} className='right'>
      <Card.Body>
        <Card.Title>Friends</Card.Title>
      </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
          <ListGroup.Item>Random Friends One</ListGroup.Item>
        </ListGroup>
      <Card.Body>
        <Card.Link href="#">See all friends</Card.Link>
      </Card.Body>
  </Card>
  )
}
