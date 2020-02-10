import React, {
  Component
} from "react";
import Button from 'react-bootstrap/Button';

const My1Button = ({text}) => (
  <Button variant="success" className='customHeight customMargin2' block>{text}</Button>
);


export default My1Button;