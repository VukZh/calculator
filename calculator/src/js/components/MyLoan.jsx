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

const MyLoan = ({data,def}) => (
  <div>
     <MyToolTip tips="--Tooltip--"/>
        MyToolTip
     <MyInputDollars/>
     <MyInputPercent/>
     <MyListButton/>
     <MyButtonToolbar/>
     <MyButtonToolbarArr arr={data} def={def}/>
     <My1Button text='GET'/>
     <MyWorth/>
  </div>
);



export default MyLoan;