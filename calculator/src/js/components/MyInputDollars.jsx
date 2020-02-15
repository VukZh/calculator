import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputDollars = ({val,func}) => {
  
    return (
      <div className='inline'>
        <InputGroup className='mb-3 customMargin'>
          <InputGroup.Prepend className='customHeight'>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" placeholder='0' min="0" value ={val}  onChange={(e) => {func(e.target.value)}} className='customHeight'/>
        </InputGroup>
        <div></div>
      </div>
    )

};

export default MyInputDollars;