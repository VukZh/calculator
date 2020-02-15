import React, {
  Component
} from "react";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


const MyButtonToolbarArr = ({arr,def,func}) => {
  
  const oneButtonArr = arr.map((item, ind) => {
    if (ind === def) {
        return (
        <Button variant='outline-secondary' value={ind} className='customHeight2 selButton' >{item}</Button>
      );
    } else {
      return (
      <Button variant='outline-secondary' value={ind} className='customHeight2' >{item}</Button>
    );   
    }
 
  });

  return (
        <ButtonGroup type="radio" name="options" defaultValue={def} className='customHeight customMargin' onMouseUp={(e)=>func(e.target.value)}>
      {oneButtonArr}
    </ButtonGroup>
  );


};


export default MyButtonToolbarArr;