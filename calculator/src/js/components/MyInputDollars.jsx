import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputDollars = () => (
  <InputGroup className='mb-3 customMargin'>
    <InputGroup.Prepend className='customHeight'>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className='customHeight'/>
  </InputGroup>
);



export default MyInputDollars;