import React from "react";

const Example1: React.FC = () => {
  //Câu 1:
  const arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
  const arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
  const arr3 = [1, 10, 19, 11, 13, 16, 19];

  // sort arr

  const sortArr = (arr: any[]) => {
    return arr.sort((a, b) => (a < b ? 1 : -1));
  };
  return (
    <div>
      <h1>Câu 1:</h1>
      <span>Array 1: [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]</span>
      <br />
      <span>Array 2: [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]</span>
      <br />
      <span>Array 3: [1, 10, 19, 11, 13, 16, 19]</span>
      <br />
      <h2>Array sort finish: </h2>
      <span>Array 1: </span>
      {sortArr(arr1).map((item: number) => {
        return <span>{item}</span>;
      })}
      <br />
      <span>Array 2: </span>
      {sortArr(arr2).map((item: number) => {
        return <span>{item}</span>;
      })}
      <br />
      <span>Array 3: </span>
      {sortArr(arr3).map((item: number) => {
        return <span>{item}</span>;
      })}
    </div>
  );
};

export default Example1;
