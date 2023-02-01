import { useState } from "react";
import "../AdjustColor/style.css";
function AdjustColor() {
  const [red, setred] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  // increae function-------------------------------------------------------------------
  const increase = (num1: any, num2: number) => {
    if (num2 < 255) {
      num1(num2 + 5);
    } else {
    }
  };
  //   decrease function----------------------------------------------------------------------
  const decrese = (num1: any, num2: number) => {
    if (num2 > 0) {
      num1(num2 - 5);
    } else {
    }
  };
  // purecolor function-------------------------------------------------------------------------------------
  const pure = (setColor: any, removeColor: any, removeColor1: any) => {
    setColor(250);
    removeColor(0);
    removeColor1(0);
  };
  //   black function-----------------------------------------------------------------------------
  const black = () => {
    setBlue(0);
    setred(0);
    setGreen(0);
  };
  //   white function---------------------------------------------------------------------------------------
  const white = () => {
    setBlue(255);
    setred(255);
    setGreen(255);
  };
  return (
    <div className="AdjustContainer">
      <div className="choosecolor">
        {/*  black white */}
        <div className="btn">
          <button onClick={black} className="black">
            black
          </button>
          <button onClick={white} className="white">
            white
          </button>
        </div>
        {/* red--------------------------------------------------------------------------------------- */}

        <div className="containe">
          <button
            onClick={() => {
              pure(setred, setBlue, setGreen);
            }}
            className="red"
          >
            Red
          </button>
          <button
            onClick={() => {
              increase(setred, red);
            }}
          >
            Increase red
          </button>
          <button
            onClick={() => {
              decrese(setred, red);
            }}
          >
            Decrease red
          </button>
        </div>
        {/* blue--------------------------------------------------------------------------------------- */}

        <div className="container">
          <button
            onClick={() => {
              pure(setBlue, setred, setGreen);
            }}
            className="blue"
          >
            Blue
          </button>

          <button
            onClick={() => {
              increase(setBlue, blue);
            }}
          >
            Increase blue
          </button>
          <button
            onClick={() => {
              decrese(setBlue, blue);
            }}
          >
            Decrease blue
          </button>
        </div>
        {/* greeen------------------------------------------------------------------------------------------ */}

        <div className="container">
          <button
            onClick={() => {
              pure(setGreen, setred, setBlue);
            }}
            className="green"
          >
            Green
          </button>

          <button
            onClick={() => {
              increase(setGreen, green);
            }}
          >
            Increase Green
          </button>
          <button
            onClick={() => {
              decrese(setGreen, green);
            }}
          >
            Decrease Green
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
        className="card"
      >{`rgb(${red},${blue},${green})`}</div>
    </div>
  );
}
export default AdjustColor;
