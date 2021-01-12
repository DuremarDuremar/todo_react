import React from "react";
import styled from "styled-components";

const StyleList = styled.div`
  .list_string {
    display: flex;
    justify-content: space-around;
    margin-left: 55px;
    margin-top: 30px;
    margin-bottom: 30px;
    word-wrap: break-word;
  }
  .list_name {
    max-width: 140px;
  }

  .list_number {
    margin-right: -35px;
  }
  button {
    width: 35px;
    height: 35px;
    border-radius: 27%;
    &:last-child {
      margin-left: -25px;
    }
    i {
    }
  }
`;

const TodoList = ({ text }) => {
  return (
    <StyleList>
      <div className="list_string">
        <div className="list_number">1</div>
        <div className="list_name">{text}</div>
        <button>
          <i className="far fa-bell-slash"></i>
        </button>
        <button>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </StyleList>
  );
};

export default TodoList;
