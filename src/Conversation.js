import React from "react";

export default function Conversation(props) {
  return (
    <div
      style={{
        overflow: 'hidden',
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      {props.tuples.map(tuple => {
        return (
          <div
            style={{
              height: "30%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <div
              className="question"
              style={{
                alignSelf: "flex-end"
              }}
            >
              <div
                style={{
                  padding: "3%",
                  margin: "5%",
                  borderRadius: "10%",
                  backgroundColor: "lightgray",
                  alignSelf: "flex-start"
                }}
              >
                {tuple.question}
              </div>
            </div>
            <div
              className="answer"
              style={{
                alignSelf: "flex-start"
              }}
            >
              <div
                style={{
                  padding: "3%",
                  margin: "5%",
                  borderRadius: "10%",
                  backgroundColor: "#147efb",
                  alignSelf: "flex-end"
                }}
              >
                {tuple.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
