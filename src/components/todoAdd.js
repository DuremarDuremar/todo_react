import React from "react";
import styled from "styled-components";

const StyleAdd = styled.div`
  position: absolute;
  bottom: 15px;
  form {
    align-items: center;
  }
  input {
    font-size: 20px;
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 30%;
  }
`;

const TodoAdd = () => {
  return (
    <StyleAdd>
      <form action="">
        <input type="text" />
        <button>
          <i className="far fa-bell fa-2x"></i>
        </button>
      </form>
    </StyleAdd>
  );
};

export default TodoAdd;
