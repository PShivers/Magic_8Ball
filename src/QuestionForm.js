import React, { useState } from "react";

import { Button, Input } from "reactstrap";

export default function QuestionForm(props) {
  const [question, setQuestion] = useState("");
  const answers = [
    "Go outside",
    "As I see it it, yes.",
    "Try again.",
    "Most Definitely",
    "Get a job, Hippie",
    "Ask again Later",
    "Better not tell you now",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it."
  ];

  const handleChange = e => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTuple = {};
    const answer = answers[Math.floor(Math.random() * 23 + 1)];
    newTuple.question = question;
    newTuple.answer = answer;
    props.updateTuples(newTuple);
    setQuestion("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <Input
          onChange={handleChange}
          type="text"
          value={question}
          placeholder={"message"}
        />
        <Button outline color="primary" >
          Send
        </Button>
      </form>
    </div>
  );
}
