import React, { useState, useEffect } from "react";
import { chunk, reverse } from "lodash";
import styled from "styled-components";

const StyleList = styled.div`
  margin-bottom: 10px;
  .list_string {
    display: flex;
    justify-content: space-around;
    margin-left: 55px;
    margin-top: 30px;
    margin-bottom: 20px;
    word-wrap: break-word;
    font-family: Consolas;
    &:last-child {
      margin-bottom: 30px;
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
  }
  .list_name {
    max-width: 140px;
    font-size: 16px;
    cursor: pointer;
  }

  .list_number {
    margin-right: -35px;
  }

  .list_done {
    text-decoration: line-through;
    text-decoration-color: #fff;
  }

  .list_important {
    color: #8b0000;
    font-size: 20px;
  }
  .list_pagination {
    display: flex;
    justify-content: center;
    font-family: "Courier New";
    margin-bottom: 25px;
    p {
      cursor: pointer;
      font-size: 18px;
      padding: 5px;
      &:not(first-child) {
        margin-left: 15px;
      }
    }
    .pagAc {
      color: #8b0000;
      border: 1px solid black;
      border-radius: 75%;
    }
  }
`;

const TodoList = ({ data, deleteItem, importantItem, doneItem }) => {
  const [allPage, setAllPage] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setAllPage(chunk(data, 6));
  }, [data]);

  const data2 = chunk(data, 6)[page] || data;

  const elements = data2.map((item, index) => {
    const classImportant = item.important ? " list_important" : " ";
    const classDone = item.done ? " list_done" : " ";
    const classLabel = "list_name" + classImportant + classDone;

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
      <div className="list_pagination">
        {allPage &&
          allPage.map((item, indexPage) => (
            <p
              key={indexPage}
              onClick={() => setPage(indexPage)}
              className={page === indexPage ? "pagAc" : ""}
            >
              {indexPage + 1}
            </p>
          ))}
      </div>
    </StyleList>
  );
};

export default TodoList;
