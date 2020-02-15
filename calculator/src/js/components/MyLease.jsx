/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import MyToolTip from './MyToolTip.jsx';
import MyInputDollars from './MyInputDollars.jsx';
import MyInputSelect from './MyInputSelect.jsx';
import MyZip from './MyZip.jsx';

const MyLease = ({
  terms,
  creditScore,
  miles,
  def1,
  leaseTermF,
  def2,
  mF,
  def3,
  creditF,
  zip,
  down,
  downF,
  tiv,
  tivF,
  onClick,
  postalF,
}) => (
  <div>
    <p></p>
    <MyZip zip={zip} func={postalF} />
    <div>Term (Months)</div>
    <MyInputSelect arr={terms} def={def1} func={leaseTermF} />
    <span>Trade-In Value</span>
    <MyToolTip tips="About Trade-In Value" />
    <MyInputDollars val={tiv} func={tivF} />
    <span>Down Payment</span>
    <MyToolTip tips="About Down Payment" />
    <MyInputDollars val={down} func={downF} />
    <div></div>
    <div>Mileages</div>
    <MyInputSelect arr={miles} def={def2} func={mF} />
    <span onClick={onClick}>Approx. Credit Score</span>
    <MyToolTip tips="About Approx. Credit Score" />
    <MyInputSelect arr={creditScore} def={def3} func={creditF} />
  </div>
);

export default MyLease;
