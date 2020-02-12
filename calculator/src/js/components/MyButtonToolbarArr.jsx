import React, {
  Component
} from "react";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


const MyButtonToolbarArr = ({arr,def}) => {
  
  const oneButtonArr = arr.map((item, ind) => {
    return (
      <ToggleButton variant='outline-secondary' value={ind} className='customHeight2'>{item}</ToggleButton>
    );    
  });

  return (
        <ToggleButtonGroup type="radio" name="options" defaultValue={def} className='customHeight customMargin' >
      {oneButtonArr}
    </ToggleButtonGroup>
  );


};


export default MyButtonToolbarArr;