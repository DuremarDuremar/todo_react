import React, { useState } from "react";
import styled from "styled-components";

const StyleSearch = styled.div`
  button {
    width: 40px;
    height: 40px;
    border-radius: 30%;
    margin: 15px 0;
    outline: none;
    &:not(:first-child) {
      margin-left: 5px;
    }
    &:hover {
      color: #b71540;
    }
  }
  input {
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 2px 0px 2px 5px;
  }
  .btn_active {
    border: 3px solid #b71540;
  }
  .todo_p {
    margin-bottom: 5px;
  }
`;

const TodoSearch = ({ setActive, data, setSearchValue, searchValue }) => {
  const [btn, setBtn] = useState([
    { id: "all", class: "btn_active" },
    { id: "active", class: "" },
    { id: "done", class: "" },
  ]);

  const onBtn = (id) => {
    setBtn(
      btn.map((item) => {
        if (id === item.id) {
          item.class = "btn_active";
        } else {
          item.class = "";
        }
        return item;
      })
    );
    setActive(id);
  };

  return (
    <StyleSearch>
      <div className="button_search">
        <button
          onClick={() => onBtn("all")}
          className={btn[0].class}
          id={btn[0].id}
        >
          <i className="fab fa-buffer fa-2x"></i>
        </button>
        <button
          onClick={() => onBtn("active")}
          className={btn[1].class}
          id={btn[1].id}
        >
          <i className="far fa-bookmark fa-2x"></i>
        </button>
        <button
          onClick={() => onBtn("done")}
          className={btn[2].class}
          id={btn[2].id}
        >
          <i className="fas fa-bookmark fa-2x"></i>
        </button>
      </div>
      {data.length > 0 ? (
        <>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <p className="todo_p">____________________</p>
        </>
      ) : (
        <p className="todo_p">____________________</p>
      )}
    </StyleSearch>
  );
};

export default TodoSearch;
