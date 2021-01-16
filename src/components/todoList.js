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
    font-size: 16px;
    cursor: pointer;
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

  .list_done {
    text-decoration: line-through;
    text-decoration-color: #fff;
  }

  .list_important {
    color: #8b0000;
    font-size: 20px;
  }
`;

const TodoList = ({ data, deleteItem, importantItem, doneItem }) => {
  const elements = data.map((item, index) => {
    const classImportant = item.important ? " list_important" : " ";
    const classDone = item.done ? " list_done" : " ";
    const classLabel = "list_name" + classImportant + classDone;

    // console.log("list", data);

    return (
      <div className="list_string" key={index}>
        <div className="list_number">{index + 1}</div>
        <div className={classLabel} onClick={() => doneItem(item.id)}>
          {item.label}
        </div>
        <p onClick={() => deleteItem(item.id)}>
          <i className="far fa-bell-slash"></i>
        </p>
        <p onClick={() => importantItem(item.id)}>
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
