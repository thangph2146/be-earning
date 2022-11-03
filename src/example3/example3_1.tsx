/* eslint-disable no-loop-func */
import React from "react";

interface Iexample3_1 {
    data: any[]
}
const Example3_1 = (props: Iexample3_1): JSX.Element => {
   
  return (
    <div className="example2">

      <div className="header">
        <img src={require("../assets/image/icon-back.png")} alt="" />
        <div className="title">Create New Wallet</div>
      </div>
      <div className="body">
        <div className="title-note">Auto Gen Seed Phrase?</div>
        <div className="gen-group">
          {props.data.map((item: any, index: any) => {
            return (
              <div className="card">
                <div className="id-key">{index + 1}</div>
                <div className="content">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="group-btn">
        <div className="top">
          <div className="left">
            Tap to Copy or Carefully write down your seed phrase and store it in
            a safe place
          </div>
          <div className="right">
            <img src={require("../assets/image/coppy.png")} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="group-tutorial">
            <div className="tutorial">How does this work?</div>
            <img src={require('../assets/image/right-arrow.png')} alt="" />
          </div>
          <button className="btn-tutorial">next</button>
        </div>
      </div>
    </div>
  );
};

export default Example3_1;
