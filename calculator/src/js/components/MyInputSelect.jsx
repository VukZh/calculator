import React, {
  Component
} from "react";
import Form from 'react-bootstrap/Form';

const MyInputSelect = ({arr,def,txt}) => {  


  const oneSelectArr = arr.map((item, ind) => {

    return (
      (ind === def)?<option selected>{item}</option>:<option>{item}</option>
    );    
  });

  return (
      <Form>
        <Form.Group>
          <Form.Label className='inline'>{txt}</Form.Label>
          <Form.Control as="select">
            {oneSelectArr}
          </Form.Control>
        </Form.Group>
      </Form>
  )

};


export default MyInputSelect;