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

//localStorage.clear();

if (!localStorage.getItem('calcCar')){
    localStorage.setItem('calcCar', JSON.stringify(
    {
    postal:'',
    downPayment: 0,
    tradeIn: 0,
    APR: 0,
    currLoanTerms: 1,
    currLeaseTerms: 1,
    currCreditScore: 3,
    currMileagesArr: 1,
    postal:'',
    currLoan: 0,
    currLease: 0, 
    }
  )
  )
}





class App extends Component {

  constructor(props) {
    super(props);
    
    
//    console.log('>>>>>>> ' + localStorage.getItem('calcCar').postal)
    let init =  JSON.parse(localStorage.getItem('calcCar'));
//    alert(init.currCreditScore)
    
    this.state = {
      downPayment: init.downPayment,
      tradeIn: init.tradeIn,
      APR: init.APR,
      currLoanTerms: init.currLoanTerms,
      currLeaseTerms: init.currLeaseTerms,
      currCreditScore: init.currCreditScore,
      currMileagesArr: init.currMileagesArr,
      postal:init.postal,
      carData: carData(),
      currLoan: init.currLoan,
      currLease: init.currLease, 
      
//      downPayment: 0,
//      tradeIn: 0,
//      APR: 0,
//      currLoanTerms: 1,
//      currLeaseTerms: 1,
//      currCreditScore: 3,
//      currMileagesArr: 1,
//      postal:'',
//      carData: carData(),
//      currLoan: 0,
//      currLease: 0,       
      
//      downPayment: 0,
//      tradeIn: 0,
//      APR: 1,//
//      currLoanTerms: 1,
//      currLeaseTerms: 1,
//      currCreditScore: 3,
//      currMileagesArr: 1,
//      postal:'',
//      carData: carData(),
//      currLoan: 0,
//      currLease: 0,
      
    }
    
    this.updatePostal = (val) => {
      this.setState((state) => {
        return {
          postal: val
        }
      }, this.recalc)
    }
    
    this.updateDownPayment = (val) => {
      if (val <= this.state.carData.msrp/4) {
        this.setState((state)=>{
          return {
            downPayment: val
          }
        },this.recalc       
      )        
    }  
  }
    
    
    this.updateTradeIn = (val) => {
      if (val <= this.state.carData.msrp/4) {
        this.setState((state)=>{
          return {
            tradeIn: val
          }
        },this.recalc         
      ) 
    }       
    } 
    
    this.updateAPR = (val) => {
        this.setState((state)=>{
          return {
            APR: val
          }
        },this.recalc         
      )     
    }     
    
    this.updateTermLease = (val) => {
        let ind = leaseTermsArr.indexOf(+val)
        this.setState((state) => {
          return { currLeaseTerms: ind }
        },this.recalc 
      )     
    }      
    
    this.updateTermLoan = (val) => {
        
//        let ind = loanTermsArr.indexOf(+val)
        this.setState((state) => {
          return { currLoanTerms: +val }
        },this.recalc 
      )     
    }     
    
      
    this.updateMileages = (val) => {
        let ind = mileagesArr.indexOf(+val)
        this.setState((state) => {
          return { currMileagesArr: ind }
        },this.recalc 
      )   
    }      
    
    
    this.updateCredit = (val) => {
        let ind = creditScoreArr.indexOf(Number(val))
                this.setState((state) => {
          return { currCreditScore: ind }
        },this.recalc 
      )
    }    
    
    this.updateCreditIndex = (val) => {
        this.setState((state) => {
          return { currCreditScore: +val }
        },this.recalc 
      )
    }      
    
//    this.updateCreditLoan = (val) => {
//        let ind = creditScoreArr.indexOf(+val)
//        this.setState({ currCreditScore: ind },this.recalc)             
//    }        
    
    this.recalc = () => {
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
      
          localStorage.setItem('calcCar', JSON.stringify(
          {
            downPayment: this.state.downPayment,
            tradeIn: this.state.tradeIn,
            APR: this.state.APR,
            currLoanTerms: this.state.currLoanTerms,
            currLeaseTerms: this.state.currLeaseTerms,
            currCreditScore: this.state.currCreditScore,
            currMileagesArr: this.state.currMileagesArr,
            postal:this.state.postal,
            currLoan: this.state.currLoan,
            currLease: this.state.currLease, 
            }
          )

         )
                               
                               
//      console.log('---------')
//      console.log('msrp ' + this.state.carData.msrp)
//      console.log('tradeIn ' + this.state.tradeIn)
//      console.log('downPayment ' + this.state.downPayment)
//      console.log('mileagesArr ' + mileagesArr[this.state.currMileagesArr])
//      console.log('leaseTermsArr ' + leaseTermsArr[this.state.currLeaseTerms])
//      console.log('loanTermsArr ' + loanTermsArr[this.state.currLoanTerms])
//      console.log('creditScoreValue ' + creditScoreArr[this.state.currCreditScore])
    }
    
  }
  
  shouldComponentUpdate() {
  return true;
}
  
  componentDidMount() {
    if (!this.state.postal) {
      fetch(`https://ipinfo.io/json?token=e49bbc26ef897a`)
      .then(res => res.json())
      .then(json => this.setState({
        postal: json.postal
      }));  
    
    this.recalc();   
    }
 
  }

  
  render() {    

    
    let currLoan = 'Loan $' + this.state.currLoan;
    let currLease = 'Lease $' + this.state.currLease;

    return ( 
      <Fragment>
      <div className='container1'>
      <Tabs defaultActiveKey="loan" id="uncontrolled-tab-example">
        <Tab eventKey="loan" title={currLoan}>
          <MyLoan terms={loanTermsArr} creditScore={creditScoreArr} def1={this.state.currLoanTerms} loanTermF={this.updateTermLoan} def2={this.state.currCreditScore} creditF={this.updateCreditIndex} tiv ={this.state.tradeIn} tivF={this.updateTradeIn} dp={this.state.downPayment} acs = {creditScoreArr} apr={this.state.downPayment.APR} price70={this.state.carData.msrp * 0.7} zip={this.state.postal} percent={this.state.APR} percentF={this.updateAPR} down={this.state.downPayment} downF={this.updateDownPayment} postalF={this.updatePostal}/>
        </Tab>
        <Tab eventKey="lease" title={currLease}>
          <MyLease terms={leaseTermsArr} miles={mileagesArr} creditScore={creditScoreArr} def1={this.state.currLeaseTerms} leaseTermF={this.updateTermLease} def2={this.state.currMileagesArr} mF={this.updateMileages} def3={this.state.currCreditScore} creditF={this.updateCredit} zip={this.state.postal} down={this.state.downPayment} tiv ={this.state.tradeIn} tivF={this.updateTradeIn} downF={this.updateDownPayment} postalF={this.updatePostal}/>
        </Tab>
      </Tabs></div>
      <div className='container2' onClick={this.hehe}>
        <MyInfoCard data={this.state.carData} tx={this.state.postal}/>
      </div>       
      </Fragment>
    );
  }
}
export default App;