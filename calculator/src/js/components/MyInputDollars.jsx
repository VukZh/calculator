import React, {
  Component
} from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const MyInputDollars = ({val}) => {
  
    return (
      <div className='inline'>
        <InputGroup className='mb-3 customMargin'>
          <InputGroup.Prepend className='customHeight'>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" placeholder='0' min="0" value ={val} className='customHeight' onChange={(e)=>alert({val})}/>
        </InputGroup>
        <div></div>
      </div>
    )
 


};



export default MyInputDollars;