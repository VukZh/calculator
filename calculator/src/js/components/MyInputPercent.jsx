import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputPercent = ({val}) => (
  <div className='inline'>
    <InputGroup className='mb-3 customMargin'>
      <FormControl placeholder='0.00' value ={val} className='customHeight'/>
      <InputGroup.Append className='customHeight'>
        <InputGroup.Text>%</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  </div>
);



export default MyInputPercent;