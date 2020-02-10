import React, {
  Component
} from "react";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


const MyButtonToolbar = () => (

    <ToggleButtonGroup type="radio" name="options" defaultValue={1} className='customHeight customMargin'>
      <ToggleButton variant='outline-secondary' value={1} className='customHeight2'>10</ToggleButton>
      <ToggleButton variant='outline-secondary' value={2} className='customHeight2'>20</ToggleButton>
      <ToggleButton variant='outline-secondary' value={3} className='customHeight2'>30</ToggleButton>
    </ToggleButtonGroup>

);


export default MyButtonToolbar;