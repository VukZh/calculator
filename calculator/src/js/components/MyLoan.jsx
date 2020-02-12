import React, {
  Component, Fragment
} from "react";

import MyToolTip from "./MyToolTip.jsx";
import MyInputDollars from "./MyInputDollars.jsx";
import MyInputPercent from "./MyInputPercent.jsx";
import MyListButton from "./MyListButton.jsx";
import MyWorth from "./MyWorth.jsx";
import MyButtonToolbarArr from "./MyButtonToolbarArr.jsx";
import MyZip from "./MyZip.jsx";


const MyLoan = ({terms,creditScore,def1,def2,price70,zip,percent,down,tiv}) => (
  <div>
      <p></p>
      <MyZip zip={zip}/>
      <span>Edmunds Suggested Price</span> 
      <MyToolTip tips="About Edmunds Suggested Price"/>
      <div>Term (Months)</div>   
      <MyButtonToolbarArr arr={terms} def={def1}/> 
      <span>Trade-In Value</span> 
      <MyToolTip tips="About Trade-In Value"/> 
      <MyInputDollars val={tiv}/> 
      <MyWorth price70={price70}/>  
      <span>Down Payment</span> 
      <MyToolTip tips="About Down Payment"/> 
      <MyInputDollars val={down}/>
      <div></div>
      <span>Approx. Credit Score</span> 
      <MyToolTip tips="About Approx. Credit Score"/>  
      <MyButtonToolbarArr arr={creditScore} def={def2}/>  
      <span>Estimated ARP</span> 
      <MyToolTip tips="About Estimated ARP"/> 
      <MyInputPercent val={percent}/>
  </div>
);

export default MyLoan;