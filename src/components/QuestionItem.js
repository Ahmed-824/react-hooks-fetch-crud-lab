import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  const [selectedCorrectIndex, setSelectedCorrectIndex] = useState(correctIndex);

  function handleDelete() {
    if (onDelete) {
      onDelete(id);
    }
  }

  function handleSelectChange(event) {
    const newCorrectIndex = parseInt(event.target.value);
    setSelectedCorrectIndex(newCorrectIndex);

    if (onUpdate) {
      onUpdate(id, newCorrectIndex);
    }
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          value={selectedCorrectIndex}
          onChange={handleSelectChange}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
