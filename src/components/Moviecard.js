import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
function Moviecard({el}) {
  return (
    <div>
      <Link to={`/trailer/${el.name}`} style={{textDecoration:"none", color:"white"}}>
      <Card style={{ width: '18rem', margin:'20px' }}>
      <Card.Img variant="top" src={el.posterurl} style={{minHeight:"250px", maxHeight:"250px"}}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         {el.description}
         <ReactStars
  count={5}
  
  size={24}
  color2={'red'} 
  edit={false}
  value={el.rating} />
  
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Link>
      
    </div>
  )
}

export default Moviecard
