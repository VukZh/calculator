import React, {
  Component
} from "react";
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ttimg from '../../assets/images/question-square.svg';

const MyToolTip = ({tips}) => (
<OverlayTrigger trigger="hover" placement='right-start' delay={{ show: 250, hide: 1000 }} overlay={<Popover><Popover.Content>{tips}</Popover.Content></Popover>}>
  <span className="d-inline-block">
    <img src={ttimg} className ='toolTip' alt =''/>
  </span>
</OverlayTrigger>
);


export default MyToolTip;