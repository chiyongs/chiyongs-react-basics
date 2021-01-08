import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });
  return element;
};

const makeLi = () => {
  const toDoValue = document.querySelector("input").value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = toDoValue;
  li.appendChild(span);
  const form = document.querySelector("form");
  form.appendChild(li);
  document.querySelector("input").value = "";
  return;
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };
  return { value, onChange };
};

const handleSubmit = (e) => {
  e.preventDefault();
};

const TodoForm = () => {
  const toDo = useInput("");
  const btn = useClick(makeLi);

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="toDoList" {...toDo}></input>
      <button ref={btn}>Add to do</button>
    </form>
  );
};

export default TodoForm;
