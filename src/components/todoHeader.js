import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
  h2 {
    font-size: 34px;
    padding-top: 20px;
  }
  h4 {
    padding-top: 15px;
    font-size: 22px;
    font-style: italic;
    font-weight: 300;
  }
`;

const TodoHeader = () => {
  return (
    <StyleHeader>
      <h2>Todo List</h2>
      <h4>1 more to do, 0 done</h4>
    </StyleHeader>
  );
};

export default TodoHeader;
