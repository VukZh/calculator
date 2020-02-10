import React, {
  Component
} from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ttimg from '../../assets/images/alert-square-fill.svg';

const MyWorth = () => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          What's my car worth?
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body className='customColor' ><img src={ttimg} className ='worth' alt =''/>Only $xxxxx has been applied to the payment, which is the maximum allowed 70% of the MSRP price</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);


export default MyWorth;