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

const TodoHeader = ({ data }) => {
  const noDone = data.filter((item) => !item.done);

  return (
    <StyleHeader>
      <h2>Todo List</h2>
      <h4>
        {noDone.length} more to do, {data.length - noDone.length} done
      </h4>
    </StyleHeader>
  );
};

export default TodoHeader;
