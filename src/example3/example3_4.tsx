/* eslint-disable no-loop-func */
import React from "react";

interface Iexample3_4 {
    data: any[]
}
const Example3_4 = (props: Iexample3_4): JSX.Element => {
   console.debug(props.data)
  return (
    <div className="example2">

      <div className="header">
        <img src={require("../assets/image/icon-back.png")} alt="" />
        <div className="title">Create New Wallet </div>
      </div>
      <div className="body">
        <div className="title-note">Confirm Your Seed Phrase <span className="step">0/6</span></div>
        <div className="confirm-gen-group">
          {props.data.map((item: any, index: any) => {
            return (
              <div className="card">
                <div className="id-key">{item.primary}</div>
                {item.list.map((e: any) =>{
                
                return <div className="content">{e}</div>
                })}
              </div>
            );
          })}
        </div>
        <span className="err-noti"><img src={require('../assets/image/err-noti.png')} alt="" />Wrong seed phrases. Please try again!</span>
      </div>
      <div className="group-btn">
        <div className="top">
          
        </div>
        <div className="bottom">
          <div className="group-tutorial">
            <div className="tutorial">How does this work?</div>
            <img src={require('../assets/image/right-arrow.png')} alt="" />
          </div>
          <button className="btn-tutorial">submit</button>
        </div>
      </div>
    </div>
  );
};

export default Example3_4;
