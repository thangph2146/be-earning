import React from "react";
import "./example3.scss";

const Example3: React.FC = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const activeTab = (e: any, index: any) => {
    const panes = $$(".tab-pane");
    $(".tab-item.active")?.classList.remove("active");
    $(".tab-pane.active")?.classList.remove("active");
    e.target.classList.add("active");
    panes[index].classList.add("active");
    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");
    // line.style.left =
    //   tabActive.offsetLeft + tabActive.offsetWidth / 2 / 2 + "px";
    // line.style.width = tabActive.offsetWidth / 2 + "px";
  };
  const activeTabBottom = (e: any, index: any) => {
    const panes = $$(".tab-pane-bottom");
    $(".tab-item-bottom.active")?.classList.remove("active");
    $(".tab-pane-bottom.active")?.classList.remove("active");
    e.target.classList.add("active");
    panes[index].classList.add("active");
    const tabActive = $(".tab-item-bottom.active");
    const line = $(".tabs .line");
    // line.style.left =
    //   tabActive.offsetLeft + tabActive.offsetWidth / 2 / 2 + "px";
    // line.style.width = tabActive.offsetWidth / 2 + "px";
  };
  return (
    <div className="example3">
      <div className="header">
        <div className="left">
          <div className="imageProfile">
            <img
              src={require("./assets/image/imageProfile.png")}
              alt="imageProfile"
            />
          </div>
          <div className="inforProfile">
            <div className="title">Minh Nguyen</div>
            <div className="sub-tilte">@Meta</div>
          </div>
        </div>
        <div className="right">
          <div className="group-btn">
            <button className="btn">
              <img src={require("./assets/image/btn1.png")} alt="btn1" />
            </button>
            <button className="btn">
              <img src={require("./assets/image/btn2.png")} alt="btn2" />
            </button>
            <button className="btn">
              <img src={require("./assets/image/bell.png")} alt="bell" />
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="top">
          <div className="tabs">
            <div
              className="tab-item active"
              onClick={(e) => activeTab(e, 0)}
              key={0}
            >
              My Wallet
            </div>
            <div className="tab-item" onClick={(e) => activeTab(e, 1)} key={1}>
              Report
            </div>
            <div className="tab-item" onClick={(e) => activeTab(e, 2)} key={2}>
              Setting
            </div>
            {/* <div className="line"></div> */}
          </div>
          <div className="tab-content">
            <div className="tab-pane active">
              <div className="group-card">
                <div
                  className="card"
                  style={{
                    background:
                      "linear-gradient(137.08deg, rgba(255, 255, 255, 0.6) 4.85%, rgba(255, 255, 255, 0.780737) 34.75%, #FFFFFF 93.98%)",
                  }}
                >
                  <div className="top">
                    <div
                      className="box-color"
                      style={{ backgroundColor: "#0084F4" }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">@Meta Wallet</div>
                    <div className="money decre">90,500 MCOIN</div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    background:
                      "linear-gradient(134.56deg, rgba(255, 255, 255, 0.6) 4.74%, rgba(255, 255, 255, 0.868774) 39.73%, #FFFFFF 96.94%)",
                  }}
                >
                  <div className="top">
                    <div
                      className="box-color"
                      style={{ backgroundColor: "#FC9D00" }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">@Meta Wallet</div>
                    <div className="money">90,500 MCOIN</div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    background:
                      "linear-gradient(137.08deg, rgba(255, 255, 255, 0.6) 4.85%, rgba(255, 255, 255, 0.780737) 34.75%, #FFFFFF 93.98%)",
                  }}
                >
                  <div className="top">
                    <div
                      className="box-color"
                      style={{ backgroundColor: "#04B800" }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">@Meta Wallet</div>
                    <div className="money">90,500 MCOIN</div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    background:
                      "linear-gradient(134.56deg, rgba(255, 255, 255, 0.6) 4.74%, rgba(255, 255, 255, 0.868774) 39.73%, #FFFFFF 96.94%)",
                  }}
                >
                  <div className="top">
                    <div
                      className="box-color"
                      style={{ backgroundColor: "#FC9D00" }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">@Meta Wallet</div>
                    <div className="money">90,500 MCOIN</div>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    background:
                      "linear-gradient(137.08deg, rgba(255, 255, 255, 0.6) 4.85%, rgba(255, 255, 255, 0.780737) 34.75%, #FFFFFF 93.98%)",
                  }}
                >
                  <div className="top">
                    <div
                      className="box-color"
                      style={{ backgroundColor: "#04B800" }}
                    ></div>
                  </div>
                  <div className="bottom">
                    <div className="title">@Meta Wallet</div>
                    <div className="money">90,500 MCOIN</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane">Report</div>
            <div className="tab-pane">Setting</div>
          </div>
        </div>
        <div className="bottom">
          <div className="tabs">
            <div
              className="tab-item-bottom active"
              onClick={(e) => activeTabBottom(e, 0)}
              key={0}
            >
              Transactions
            </div>
            <div
              className="tab-item-bottom"
              onClick={(e) => activeTabBottom(e, 1)}
              key={1}
            >
              Pending
            </div>

            {/* <div className="line"></div> */}
          </div>
          <div className="tab-content">
            <div className="tab-pane-bottom active">
              <div className="group-transaction">
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money decre">-850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money decre">-850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money decre">-850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money incre">+850 USDT</div>
                </div>

                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money decre">-850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money incre">+850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                  <div className="money decre">-850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div>
                <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div> <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div> <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div> <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div> <div className="card">
                  <div className="info">
                    <div className="imageProfile">
                      <img
                        src={require("./assets/image/imageProfile.png")}
                        alt="imageProfile"
                      />
                    </div>
                    <div className="inforProfile">
                      <div className="title">Minh Nguyen</div>
                      <div className="sub-tilte">3 hours ago</div>
                    </div>
                  </div>
                   <div className="money incre">+850 USDT</div>
                </div>
              </div>
            </div>
            <div className="tab-pane-bottom">Report</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example3;
