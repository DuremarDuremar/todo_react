import React, { useState } from "react";
import styled from "styled-components";

const StyleAdd = styled.div`
  position: absolute;
  bottom: 15px;
  form {
    align-items: center;
  }
  input {
    font-size: 20px;
    border-radius: 10px;
  }
  button {
    margin-left: 3px;
    width: 40px;
    height: 40px;
    border-radius: 30%;
  }
`;

const TodoAdd = ({ dataAdd }) => {
  const [addValue, setAddValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dataAdd(addValue);
    setAddValue("");
  };

  return (
    <StyleAdd>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
        />
        <button>
          <i className="far fa-bell fa-2x"></i>
        </button>
      </form>
    </StyleAdd>
  );
};

export default TodoAdd;
