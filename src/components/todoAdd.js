import React, { useState } from "react";
import styled from "styled-components";

const StyleAdd = styled.div`
  position: absolute;
  bottom: -20px;
  right: -5px;
  form {
    align-items: center;
  }
  input {
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 2px 0px 2px 5px;
  }
  button {
    margin-left: 3px;
    width: 40px;
    height: 40px;
    border-radius: 30%;
    outline: none;
    &:hover {
      color: #b71540;
    }
  }
`;

const TodoAdd = ({ dataAdd }) => {
  const [addValue, setAddValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (addValue.length > 0) {
      dataAdd(addValue);
      setAddValue("");
    } else {
      return;
    }
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
