import React, {
  Component, Fragment
} from "react";


import MyLoan from "./MyLoan.jsx";
import MyLease from "./MyLease.jsx";
import MyInfoCard from "./MyInfoCard.jsx";


import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import carData from '../data';





  const loanTermsArr= [12,24,36,48,72,84];
  const leaseTermsArr= [24,36,48];
  const creditScoreArr= [600,650,700,750,800,850,900];
  const mileagesArr= [10000,12000,15000];




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      downPayment: 0,
      tradeIn: 0,
      APR: 0,
      postCode: '',
      currLoanTerms: 1,
      currLeaseTerms: 1,
      currCreditScore: 3,
      currMileagesArr: 1,
      postal:'',
      carData: carData(),
      currLoan: 0,
      currLease: 0,
    }
  }
  
  componentDidMount() {
    fetch(`https://ipinfo.io/json?token=e49bbc26ef897a`)
      .then(res => res.json())
      .then(json => this.setState({
        postal: json.postal
      }));    
  }
  

  
  render() {    
    
    let currLoan = 'Loan $' + this.state.currLoan;
    let currLease = 'Lease $' + this.state.currLease;

    return ( 
      <Fragment>
      <div className='container1'>
      <Tabs defaultActiveKey="loan" id="uncontrolled-tab-example">
        <Tab eventKey="loan" title={currLoan}>
          <MyLoan terms={loanTermsArr} creditScore={creditScoreArr} def1={this.state.currLoanTerms} def2={this.state.currCreditScore} tiv ={this.state.tradeIn} dp={this.state.downPayment} acs = {creditScoreArr} apr={this.state.downPayment.APR} price70={this.state.carData.msrp * 0.7}/>
        </Tab>
        <Tab eventKey="lease" title={currLease}>
          <MyLease terms={leaseTermsArr} miles={mileagesArr} creditScore={creditScoreArr} def1={this.state.currLeaseTerms} def2={this.state.currMileagesArr} def3={this.state.currCreditScore}/>
        </Tab>
      </Tabs></div>
      <div className='container2'>
        <MyInfoCard data={this.state.carData}/ >
      </div>
       
      </Fragment>
    );
  }
}
export default App;