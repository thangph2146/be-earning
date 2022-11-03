/* eslint-disable no-loop-func */
import { Button, Checkbox, Radio, RadioChangeEvent, Space, Spin } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import React, { useState } from "react";

interface Iexample3_7 {
  data: any[];
}
const Example3_7 = (props: Iexample3_7): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isChecked, setIsChecked] = useState<any[]>([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
    setIsChecked(checkedValues);
  };
  const plainOptions = [
    "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.",
    "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.",
    "To keep your backup file safe, you should also keep secret your back up location and secure it.",
  ];
  console.debug(isChecked);
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
                  return <div className="content">{e}</div>;
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
          <Button className="btn-tutorial" style={{ background: "#BBCFFB" }}>
            <Spin />
          </Button>
        </div>
      </div>
      <div className={`modal-body-create  ${isModalOpen ? "open" : ""}`}>
        <button onClick={() => handleCancel()} className="btn-close">
          <img src={require("../assets/image/arrow-down.png")} alt="" />
        </button>
        <div className="cotent">
          <img src={require("../assets/image/coppy-paste.png")} alt="" />
          <span className="sub-content">Your wallet has been created!</span>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
          {isChecked.length !== 3 ? (
            <button className="btn-tutorial-disable">i understand</button>
          ) : (
            <button className="btn-tutorial">i understand</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example3_7;
