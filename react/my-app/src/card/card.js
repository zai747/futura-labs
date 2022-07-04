import React from 'react'
import {Card,Button} from 'react-bootstrap';
import './card.css'
import img from '../images/Screenshot 2022-06-27 125512.png'

function Cardview() {
  return (
    <div className='shadow'>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
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
  )
}

export default Cardview