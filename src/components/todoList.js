import React from "react";
import styled from "styled-components";

const StyleList = styled.div`
  .list_string {
    display: flex;
    justify-content: space-around;
    margin-left: 55px;
    margin-top: 30px;
    margin-bottom: 60px;
    word-wrap: break-word;
  }
  .list_name {
    max-width: 140px;
  }

  .list_number {
    margin-right: -35px;
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 27%;
    &:last-child {
      margin-left: -25px;
    }
  }
`;

const TodoList = ({ data }) => {
  const elements = data.map((item, index) => {
    return (
      <div className="list_string" key={index}>
        <div className="list_number">{index + 1}</div>
        <div className="list_name">{item.label}</div>
        <button>
          <i className="far fa-bell-slash"></i>
        </button>
        <button>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    );
  });

  return (
    <StyleList>
      <div>{elements}</div>
    </StyleList>
  );
};

export default TodoList;
