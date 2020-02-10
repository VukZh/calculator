import React, {
  Component
} from "react";
//<Button variant="success">Hover me to see</Button>
import MyToolTip from "./MyToolTip.jsx";
import MyInputDollars from "./MyInputDollars.jsx";
import MyInputPercent from "./MyInputPercent.jsx";
import MyListButton from "./MyListButton.jsx";
import MyButtonToolbar from "./MyButtonToolbar.jsx";
import My1Button from "./My1Button.jsx";
import MyWorth from "./MyWorth.jsx";







import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
//import Sonnet from 'react-bootstrap/Sonnet'


class App extends Component {
  render() {
    //    return <div className="app">Calculator</div>;
    return ( 
      <Tabs defaultActiveKey="loan" id="uncontrolled-tab-example">
  <Tab eventKey="loan" title="Loan">
  <MyToolTip tips="--Tooltip--"/>
   MyToolTip
   <MyInputDollars/>
   <MyInputPercent/>
   <MyListButton/>
   <MyButtonToolbar/>
   <My1Button text='GET'/>
   <MyWorth/>
  </Tab>
  <Tab eventKey="lease" title="Lease">
    ddd
  </Tab>
</Tabs>
    );
  }
}
export default App;