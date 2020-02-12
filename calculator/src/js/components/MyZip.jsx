import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyZip = ({zip}) => (
  <div>
    <InputGroup className='mb-3'>
    Postal code
    <FormControl
      placeholder="Post Code" value={zip} className='customHeight customMargin3'/>
    </InputGroup>
  </div>
);

export default MyZip;