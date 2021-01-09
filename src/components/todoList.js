import React from "react";
import styled from "styled-components";

const StyleList = styled.div`
  display: block;
  margin-left: 40%;
  margin-top: 30px;
  .list_string {
    display: flex;
    justify-content: space-around;
  }
  .list_name {
    max-width: 140px;
  }
  button {
    width: 35px;
    border-radius: 27%;
    &:last-child {
      margin-left: -25px;
    }
    i {
    }
  }
`;

const TodoList = () => {
  return (
    <StyleList>
      <div className="list_string">
        <div className="list_number">1</div>
        <div className="list_name">Coffe drink</div>
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
