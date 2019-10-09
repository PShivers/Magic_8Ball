import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import Conversation from "./Conversation";

function Phone() {
  const [tuples, setTuples] = useState([
    {
      question: "Are you there 8 Ball?",
      answer: "I sure am Ask away."
    }
  ]);
  const updateTuples = newTuple => {
    console.log(newTuple);
    setTuples([...tuples, newTuple]);
  };

  return (
    <div
      style={{
        borderStyle: "inset",
        borderRadius: "10%",
        background: "black",
        width: "400px",
        height: "700px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        className="phone-screen"
        style={{
          display: "flex",
          borderStyle: "inset",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          width: "90%",
          height: "85%",
          color: "black"
        }}
      >
        <div
          className="screen-banner"
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(235,235,235,1)",
            width: "100%",
            height: "15%"
          }}
        >
          <div
            className="img-container"
            style={{
              maxWidth: "70%",
              maxHeight: "70%"
            }}
          >
            <img
              src="https://magic-8ball.com/assets/images/magicBallStart.png"
              alt="magic_8ball"
              style={{
                maxWidth: "100%",
                maxHeight: "100%"
              }}
            />
          </div>
          Magic 8-Ball
        </div>

        <Conversation tuples={tuples} />

        <div
          className="questionform-container"
          style={{ backgroundColor: "lightgray", width: "100%" }}
        >
          <QuestionForm updateTuples={updateTuples} />
        </div>
      </div>
    </div>
  );
}

export default Phone;
