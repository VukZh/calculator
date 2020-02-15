import React, {
  Component
} from "react";
import Form from 'react-bootstrap/Form';

const MyInputSelect = ({arr,def,func}) => {  

  const oneSelectArr = arr.map((item, ind) => {
    return (
      (ind === def)?<option className='option' selected >{item}</option>:<option className='option'>{item}</option>
    );    
  });

  return (
      <Form>
        <Form.Group>
          <Form.Control as="select" onChange={(e)=>func(e.target.value)} className='customHeight3'>
            {oneSelectArr}
          </Form.Control>
        </Form.Group>
      </Form>
  )
};

export default MyInputSelect;




//onChange={(e) => {func(e.target.value)}} 