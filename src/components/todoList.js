import React from "react";
import styled from "styled-components";

const StyleList = styled.div`
  .list_string {
    display: flex;
    justify-content: space-around;
    margin-left: 55px;
    margin-top: 30px;
    margin-bottom: 20px;
    word-wrap: break-word;
    &:last-child {
      margin-bottom: 60px;
    }
  }
  .list_name {
    max-width: 140px;
  }

  .list_number {
    margin-right: -35px;
  }
  p {
    width: 30px;
    height: 30px;
    border-radius: 27%;
    cursor: pointer;

    &:last-child {
      margin-left: -25px;
    }
    &:hover {
      color: #fff;
    }
  }
`;

const TodoList = ({ data, deleteItem }) => {
  const elements = data.map((item, index) => {
    return (
      <div className="list_string" key={index}>
        <div className="list_number">{index + 1}</div>
        <div className="list_name">{item.label}</div>
        <p>
          <i
            className="far fa-bell-slash"
            onClick={() => deleteItem(item.id)}
          ></i>
        </p>
        <p>
          <i className="fas fa-exclamation"></i>
        </p>
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
