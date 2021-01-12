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

const TodoAdd = ({ text, setText }) => {
  return (
    <StyleAdd>
      <form action="">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <i className="far fa-bell fa-2x"></i>
        </button>
      </form>
    </StyleAdd>
  );
};

export default TodoAdd;
