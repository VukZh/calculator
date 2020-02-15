import React, {
  Component, Fragment
} from "react";

import MyToolTip from "./MyToolTip.jsx";
import MyInputDollars from "./MyInputDollars.jsx";
import MyInputPercent from "./MyInputPercent.jsx";
import MyWorth from "./MyWorth.jsx";
import MyButtonToolbarArr from "./MyButtonToolbarArr.jsx";
import MyZip from "./MyZip.jsx";


const MyLoan = ({terms,creditScore,def1,def2,price70,zip,percent,percentF,down,downF,tiv, tivF,creditF,loanTermF,postalF}) => (
  <div>
      <p></p>
      <MyZip zip={zip} func={postalF}/>
      <span>Edmunds Suggested Price</span> 
      <MyToolTip tips="About Edmunds Suggested Price"/>
      <div>Term (Months)</div>   
      <MyButtonToolbarArr arr={terms} def={def1} func={loanTermF}/> 
      <span>Trade-In Value</span> 
      <MyToolTip tips="About Trade-In Value"/> 
      <MyInputDollars val={tiv} func={tivF}/> 
      <MyWorth price70={price70}/>  
      <span>Down Payment</span> 
      <MyToolTip tips="About Down Payment"/> 
      <MyInputDollars val={down} func={downF}/>
      <div></div>
      <span>Approx. Credit Score</span> 
      <MyToolTip tips="About Approx. Credit Score"/>  
      <MyButtonToolbarArr arr={creditScore} def={def2} func={creditF}/>  
      <span>Estimated ARP</span> 
      <MyToolTip tips="About Estimated ARP"/> 
      <MyInputPercent val={percent} func={percentF}/>
  </div>
);

export default MyLoan;