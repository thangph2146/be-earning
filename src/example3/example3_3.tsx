/* eslint-disable no-loop-func */
import { Button, Spin } from "antd";
import React from "react";

interface Iexample3_2 {
  data: any[];
  data24: any[]
}
const Example3_2 = (props: Iexample3_2): JSX.Element => {
  const { data24 , data}= props

  return (
    <div className="example2">
      <div className="header">
        <img src={require("../assets/image/icon-back.png")} alt="" />
        <div className="title">Create New Wallet </div>
      </div>
      <div className="body">
        <div className="title-note">
          Confirm Your Seed Phrase <span className="step">6/6</span>
        </div>
        <div className="confirm-gen-group">
          {props.data.map((item: any, index: any) => {
            return (
              <div className="card">
                <div className="id-key">{item.primary}</div>
                {item.list.map((e: any) => {
                  return <div className={`content ${e === data24[item.primary - 1]? 'active' : ''}`}>{e}</div>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="group-btn">
        <div className="top"></div>
        <div className="bottom">
          <div className="group-tutorial">
            <div className="tutorial">How does this work?</div>
            <img src={require("../assets/image/right-arrow.png")} alt="" />
          </div>
          {/* <button className="btn-tutorial" disabled>submit</button> */}
          <Button className="btn-tutorial" style={{background: '#BBCFFB'}}>
            <Spin />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Example3_2;
