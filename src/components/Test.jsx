import React, { useState } from "react";

function Test() {
  const [text, setText] = useState("");

  const handleToUpperCase = (text) => {
    let newText = text.toUpperCase();
    return newText;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(handleToUpperCase(e.target.value));
  };

  console.log(text);

  return (
    <div>
      <input value={text} onChange={(e) => handleSubmit(e)} />
      <p>{text}</p>
    </div>
  );
}

export default Test
