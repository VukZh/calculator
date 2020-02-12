import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputPercent = ({val}) => (
  <div className='inline'>
    <InputGroup className='mb-3 customMargin'>
      <FormControl type="number" step="0.1" min="0" placeholder='0,0' value ={val} className='customHeight'/>
      <InputGroup.Append className='customHeight'>
        <InputGroup.Text>%</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  </div>
);



export default MyInputPercent;