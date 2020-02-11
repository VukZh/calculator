import React, {
  Component, Fragment
} from "react";
//<Button variant="success">Hover me to see</Button>


import MyLoan from "./MyLoan.jsx";
import MyLease from "./MyLease.jsx";


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
//import Sonnet from 'react-bootstrap/Sonnet'

  const loanArr= [10,11,12,13,14];
  const leaseArr= [22,33,44];

class App extends Component {
  

  
  constructor(props) {
    super(props);
    this.state = {      
    }
  }

  
  render() {
    //    return <div className="app">Calculator</div>;
    return ( 
      <Fragment>
      <div className='container1'>
      <Tabs defaultActiveKey="loan" id="uncontrolled-tab-example">
  <Tab eventKey="loan" title="Loan">
  
    <MyLoan data={loanArr} def={3} />
  </Tab>
  <Tab eventKey="lease" title="Lease">
    <MyLease data={leaseArr} def={2} />
  </Tab>
</Tabs></div>
     <div className='container2'>Info</div>
      </Fragment>
    );
  }
}
export default App;