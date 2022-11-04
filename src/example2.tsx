/* eslint-disable no-loop-func */
import React from "react";
import customData from "./test.json";
import "./example2.scss";
import Example3_1 from "./example3/example3_1";
import Example3_2 from "./example3/example3_2";
import Example3_3 from "./example3/example3_3";
import Example3_4 from "./example3/example3_4";
import Example3_5 from "./example3/example3_5";
import Example3_6 from "./example3/example3_6";
import Example3_7 from "./example3/example3_7";
const Example2: React.FC = () => {
  const data: any[] = [...customData];

  //Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho trước.
  const listRandom: any[] = [];
  for (let i = 0; i < data.length; i++) {
    listRandom.push(data[Math.floor(Math.random() * data.length)]);
  }
  const uniq = listRandom.reduce((unique: string[], item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
  const Data24 = uniq.slice(0, 24);
  // console.debug(Data24);
  //Từ danh sách 24 phần tử ở trên tạo ra 1 danh sách gồm 18 phần tử không trùng lặp.
  const Data18 = Data24.slice(0, 18);
  // console.debug(Data18);

  //Từ 18 phần tử vừa lấy được tạo thành 1 danh sách gồm 6 phần tử.
  const Data6Object = [];
  for (let i = 0; i <= Data18.length; i = i + 3) {
    if (i > 0) {
      Data6Object.push({
        list: Data18.slice(i - 3, i),
        primary: i + Math.floor(Math.random() * 2),
      });
    }
  }
  console.debug("Data6Object", Data6Object);

  return (
    <>
      {/* <div>
        <h1>Câu 2:</h1>
        Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho
        trước.
        <ul>
          {Data24.map((item: any) => {
            return <li>{item}</li>;
          })}
        </ul>
        Từ danh sách 24 phần tử ở trên tạo ra 1 danh sách gồm 18 phần tử không
        trùng lặp.
        <ul>
          {Data18.map((item: any) => {
            return <li>{item}</li>;
          })}
        </ul>
        Từ 18 phần tử vừa lấy được tạo thành 1 danh sách gồm 6 phần tử.
        <ul>
          {Data6Object.map((item: any) => {
            return (
              <li>
                primary: {item.primary}
                <ul>
                  {item.list.map((e: any) => {
                    return <li>{e}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div> */}

      {/* <Example3_1 data={Data24} />
      <Example3_2 data={Data6Object} />
      <Example3_3 data={Data6Object} />
      <Example3_4 data={Data6Object} />
      <Example3_5 data={Data24} /> */}
      <Example3_6 data={Data24} />
      {/* <Example3_7 data={Data6Object} /> */}
    </>
  );
};

export default Example2;
