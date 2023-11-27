import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Left from '../components/Left';
import Feed from '../components/Feed';
import Right from '../components/Right';

export default function Home() {
  return (
    <Container>
        <div className='row'>
            <div className='col-md-3'><Left/></div>
            <div className='col-md-6 feed'><Feed/></div>
            <div className='col-md-3'><Right/></div>
        </div>
    </Container>
  )
}
