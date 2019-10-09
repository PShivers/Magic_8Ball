import React from "react";
import { Parallax } from "react-scroll-parallax";
import Phone from "./Phone";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <div
          className="tagline"
          style={{
            fontFamily: "Henny Penny, cursive",
            backgroundColor: "rgba(0,0,0,.8)",
            color: "#5F00B3",
            padding: "2%",
            margin: "3%",
            borderRadius: "15%"
          }}
        >
          <h1>Uncover the truth...</h1>
          <h6>(standard text message rates apply)</h6>
        </div>

        <Phone style={{ borderStyle: "inset" }} />
      </Parallax>
    </div>
  );
}
