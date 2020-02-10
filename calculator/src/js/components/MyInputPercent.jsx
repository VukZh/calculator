import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputPercent = () => (
  <InputGroup className='mb-3 customMargin'>
    <FormControl className='customHeight'/>
    <InputGroup.Append className='customHeight'>
      <InputGroup.Text>%</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);



export default MyInputPercent;