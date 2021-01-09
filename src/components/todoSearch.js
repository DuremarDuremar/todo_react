import React from "react";
import styled from "styled-components";

const StyleSearch = styled.div`
  button {
    width: 40px;
    height: 40px;
    border-radius: 30%;
    margin: 15px 0;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
  input {
    font-size: 20px;
    border-radius: 10px;
  }
`;

const TodoSearch = () => {
  return (
    <StyleSearch>
      <div className="button_search">
        <button>
          <i className="fab fa-buffer fa-2x"></i>
        </button>
        <button>
          <i className="far fa-bookmark fa-2x"></i>
        </button>
        <button>
          <i className="fas fa-bookmark fa-2x"></i>
        </button>
      </div>
      <input type="text" />
    </StyleSearch>
  );
};

export default TodoSearch;
