import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyZip = ({zip,func}) => (
  <div>
    <InputGroup className='mb-3'>
    Postal code
    <FormControl
      placeholder="Post Code" type="number" value={zip} onChange={(e)=>func(e.target.value)} className='customHeight customMargin3'/>
    </InputGroup>
  </div>
);

export default MyZip;