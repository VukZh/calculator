import React, {
  Component
} from "react";

import ListGroup from 'react-bootstrap/ListGroup';


const MyListButton = () => (
<ListGroup horizontal className='customHeight customMargin'>
  <ListGroup.Item action className='centerTxt'>No style</ListGroup.Item>
  <ListGroup.Item action variant="dark" className='centerTxt'>Primary</ListGroup.Item>
  <ListGroup.Item action className='centerTxt'>
    0
  </ListGroup.Item>
  <ListGroup.Item action className='centerTxt'>
    10
  </ListGroup.Item>
  <ListGroup.Item action className='centerTxt'>
    50
  </ListGroup.Item>
  <ListGroup.Item action className='centerTxt'>
    100
  </ListGroup.Item>
  <ListGroup.Item action className='centerTxt'>
    Dark
  </ListGroup.Item>
</ListGroup>
);



export default MyListButton;