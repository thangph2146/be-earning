/* eslint-disable no-loop-func */
import { Modal } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
interface Iexample3_6 {
  data: any[];
}
const Example3_6 = (props: Iexample3_6): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
            <img src={require("../assets/image/right-arrow.png")} alt="" />
          </div>
          <button className="btn-tutorial">next</button>
        </div>
      </div>
      <div className={`modal-body ${isModalOpen ? "open" : ""}`}>
        <button onClick={() => handleCancel()} className="btn-close">
         <img src={require('../assets/image/arrow-down.png')} alt="" />
        </button>
        <div className="cotent">
          <img src={require("../assets/image/coppy-paste.png")} alt="" />
          <span className="sub-content">Saved to clipboard</span>
        </div>
      </div>
    </div>
  );
};

export default Example3_6;
