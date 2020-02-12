import React, {
  Component, Fragment
} from "react";

import MyToolTip from "./MyToolTip.jsx";
import MyInputDollars from "./MyInputDollars.jsx";
import MyInputPercent from "./MyInputPercent.jsx";
import MyListButton from "./MyListButton.jsx";
import MyButtonToolbar from "./MyButtonToolbar.jsx";
import My1Button from "./My1Button.jsx";
import MyWorth from "./MyWorth.jsx";
import MyButtonToolbarArr from "./MyButtonToolbarArr.jsx";

//const a = [10,11,12,13,14];

const MyLoan = ({terms,creditScore,def1,def2,price70}) => (
  <div>
      <p></p>
      <span>Edmunds Suggested Price</span> 
      <MyToolTip tips="About Edmunds Suggested Price"/>
      <div>Term (Months)</div>   
      <MyButtonToolbarArr arr={terms} def={def1}/> 
      <span>Trade-In Value</span> 
      <MyToolTip tips="About Trade-In Value"/> 
      <MyInputDollars/> 
      <MyWorth price70={price70}/>  
      <span>Down Payment</span> 
      <MyToolTip tips="About Down Payment"/> 
      <MyInputDollars/>
      <div></div>
      <span>Approx. Credit Score</span> 
      <MyToolTip tips="About Approx. Credit Score"/>  
      <MyButtonToolbarArr arr={creditScore} def={def2}/>  
      <span>Estimated ARP</span> 
      <MyToolTip tips="About Estimated ARP"/> 
      <MyInputPercent/>
  </div>
);



export default MyLoan;