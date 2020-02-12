import React, {
  Component, Fragment
} from "react";

import MyToolTip from "./MyToolTip.jsx";
import MyInputDollars from "./MyInputDollars.jsx";
import MyInputPercent from "./MyInputPercent.jsx";
import MyListButton from "./MyListButton.jsx";
import MyButtonToolbarArr from "./MyButtonToolbarArr.jsx";
import MyInputSelect from "./MyInputSelect.jsx";
import MyZip from "./MyZip.jsx";



const MyLease = ({terms,creditScore,miles,def1,def2,def3,zip,down,tiv}) => (
  <div>
      <p></p>
      <MyZip zip={zip}/>
      <div>Term (Months)</div>   
      <MyInputSelect arr={terms} def={def1}/> 
      <span>Trade-In Value</span> 
      <MyToolTip tips="About Trade-In Value"/> 
      <MyInputDollars val={tiv}/> 
      <span>Down Payment</span> 
      <MyToolTip tips="About Down Payment"/> 
      <MyInputDollars val={down}/>
      <div></div>
      <div>Mileages</div>   
      <MyInputSelect arr={miles} def={def2}/> 
      <span>Approx. Credit Score</span> 
      <MyToolTip tips="About Approx. Credit Score"/>  
      <MyInputSelect arr={creditScore} def={def3}/> 
  </div>
);



export default MyLease;