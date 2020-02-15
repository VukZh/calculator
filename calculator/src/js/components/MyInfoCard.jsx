import React, {
  Component, Fragment
} from "react";

import ttimg from '../../assets/images/phone.svg';

const MyInfoCard = ({data,tx}) => {
  let phone = 'tel:' + data.dealerPhoneNumber;
  return (  <Fragment>
    <div className = 'inline2'>MSRP
    <div className = 'inline2'>{data.msrp}</div>
    </div>
    <p></p>
    <div className = 'inline2'>
      {data.vehicleName}   
    </div>
    <p></p>
    <div className = 'inline2'>
    <a href={data.dealUrl}>{data.dealerName}</a>      
    </div>
    <p></p>
    <div className = 'inline2'>
    <a href={phone}><img src={ttimg} />{data.dealerPhoneNumber}</a>


      </div>
<p></p>
    <div className = 'inline2'>Rating
    <div className = 'inline2'>{data.dealerRating}</div>
  </div>
   <p></p>
    <div className = 'inline2'>Taxes
    <div className = 'inline2'>{tx.split('').map(num => num * 11)}</div>
  </div>  
  </Fragment>)

};

export default MyInfoCard;