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
      downPayment: 5000,
      tradeIn: 200,
      APR: 1,//
      postCode: '',
      currLoanTerms: 3,
      currLeaseTerms: 2,
      currCreditScore: 4,
      currMileagesArr: 2,
      postal:'',
      carData: carData(),
      currLoan: 0,
      currLease: 0,      
      
//      downPayment: 0,
//      tradeIn: 0,
//      APR: 1,//
//      postCode: '',
//      currLoanTerms: 1,
//      currLeaseTerms: 1,
//      currCreditScore: 3,
//      currMileagesArr: 1,
//      postal:'',
//      carData: carData(),
//      currLoan: 0,
//      currLease: 0,
      
    }
  }

  
  componentDidMount() {
    fetch(`https://ipinfo.io/json?token=e49bbc26ef897a`)
      .then(res => res.json())
      .then(json => this.setState({
        postal: json.postal
      }));  
    
    let creditScoreValue;
    if (creditScoreArr[this.state.currCreditScore] >= 750) {
      creditScoreValue = 0.95
    } else if (creditScoreArr[this.state.currCreditScore] < 750 && creditScoreArr[this.state.currCreditScore] >= 700) {
      creditScoreValue = 1
    } else if (creditScoreArr[this.state.currCreditScore] < 700 && creditScoreArr[this.state.currCreditScore] >= 640) {
      creditScoreValue = 1.05
    } else {
      creditScoreValue = 1.2
    }
    
      this.setState({
        currLoan: ((this.state.carData.msrp - this.state.tradeIn - this.state.downPayment) / loanTermsArr[this.state.currLoanTerms] * creditScoreValue * this.state.APR * 0.01).toFixed(2)
      });
    
      this.setState({
        currLease: ((this.state.carData.msrp - this.state.tradeIn - this.state.downPayment) * mileagesArr[this.state.currMileagesArr] / 10000 / leaseTermsArr[this.state.currLeaseTerms] * creditScoreValue).toFixed(2)
      });
  }

  
  render() {    

    
    let currLoan = 'Loan $' + this.state.currLoan;
    let currLease = 'Lease $' + this.state.currLease;

    return ( 
      <Fragment>
      <div className='container1'>
      <Tabs defaultActiveKey="loan" id="uncontrolled-tab-example">
        <Tab eventKey="loan" title={currLoan}>
          <MyLoan terms={loanTermsArr} creditScore={creditScoreArr} def1={this.state.currLoanTerms} def2={this.state.currCreditScore} tiv ={this.state.tradeIn} dp={this.state.downPayment} acs = {creditScoreArr} apr={this.state.downPayment.APR} price70={this.state.carData.msrp * 0.7} zip={this.state.postal} percent={this.state.APR} down={this.state.downPayment}/>
        </Tab>
        <Tab eventKey="lease" title={currLease}>
          <MyLease terms={leaseTermsArr} miles={mileagesArr} creditScore={creditScoreArr} def1={this.state.currLeaseTerms} def2={this.state.currMileagesArr} def3={this.state.currCreditScore}  zip={this.state.postal} down={this.state.downPayment} tiv ={this.state.tradeIn}/>
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