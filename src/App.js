import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoHeader from "./components/todoHeader";
import TodoAdd from "./components/todoAdd";
import TodoList from "./components/todoList";
import TodoSearch from "./components/todoSearch";
import { useMediaQuery } from "react-responsive";

const StyleApp = styled.div`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  a {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  position: relative;
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(77, 28, 25, 1)),
    color-stop(17%, rgba(105, 17, 29, 1)),
    color-stop(40%, rgba(143, 2, 34, 1)),
    color-stop(54%, rgba(143, 2, 34, 1)),
    color-stop(81%, rgba(77, 17, 30, 1)),
    color-stop(100%, rgba(31, 28, 28, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(77, 28, 25, 1) 0%,
    rgba(105, 17, 29, 1) 17%,
    rgba(143, 2, 34, 1) 40%,
    rgba(143, 2, 34, 1) 54%,
    rgba(77, 17, 30, 1) 81%,
    rgba(31, 28, 28, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d1c19', endColorstr='#1f1c1c', GradientType=1 );
  min-height: 100vh;
  /* min-width: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const AppWrapper = styled.div`
  text-align: center;
  min-width: 400px;
  background: rgba(123, 145, 24, 1);
  background: -moz-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(123, 145, 24, 1)),
    color-stop(94%, rgba(59, 64, 36, 1)),
    color-stop(99%, rgba(56, 60, 37, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -o-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -ms-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: linear-gradient(
    to right,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7b9118', endColorstr='#383c25', GradientType=1 );
  border-radius: 42px 42px 0px 200px;
  -moz-border-radius: 42px 42px 0px 200px;
  -webkit-border-radius: 42px 42px 0px 200px;
  border: 6px solid #453138;
  padding-left: 10px;
  margin: 30px 0;
  position: relative;
`;

const AppWrapper500 = styled.div`
  text-align: center;
  min-width: 300px;
  background: rgba(123, 145, 24, 1);
  background: -moz-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(123, 145, 24, 1)),
    color-stop(94%, rgba(59, 64, 36, 1)),
    color-stop(99%, rgba(56, 60, 37, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -o-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: -ms-linear-gradient(
    left,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  background: linear-gradient(
    to right,
    rgba(123, 145, 24, 1) 0%,
    rgba(59, 64, 36, 1) 94%,
    rgba(56, 60, 37, 1) 99%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7b9118', endColorstr='#383c25', GradientType=1 );
  border-radius: 42px 42px 0px 200px;
  -moz-border-radius: 42px 42px 0px 200px;
  -webkit-border-radius: 42px 42px 0px 200px;
  border: 4px solid #453138;
  padding-left: 6px;
  margin: 20px 0;
  position: relative;
`;

const App = () => {
  const [data, setData] = useState(() => {
    const initialState1 = JSON.parse(localStorage.getItem("dataTodo"));
    const initialState2 = [
      {
        label: "sleep and drink coffee",
        id: "23444",
        done: false,
        important: true,
      },
      {
        label: "drink coffee again",
        id: "55666",
        done: false,
        important: false,
      },
      {
        label: "drink coffee",
        id: "757589696",
        done: false,
        important: false,
      },
    ];

    if (initialState1.length > 0) {
      return initialState1;
    } else {
      return initialState2;
    }
  });

  const [view, setView] = useState(data);

  const [activeData, setActive] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  //localStorage
  // useEffect(() => {
  //   const localTodo = localStorage.getItem("dataTodo") || "[]";
  //   console.log("localTodo", JSON.parse(localTodo));
  //   setData(JSON.parse(localTodo));
  // }, []);

  useEffect(() => {
    localStorage.setItem("dataTodo", JSON.stringify(data));
  }, [data]);
  //

  useEffect(() => {
    setView(search(data, searchValue));
  }, [data, searchValue, setView]);

  const a500 = useMediaQuery({ query: "(min-width: 500px)" });

  function search(items, term) {
    if (!items) {
      return null;
    }

    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const importantItem = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.important = !item.important;
        }
        return item;
      })
    );
  };

  const doneItem = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  const dataAdd = (item) => {
    setData([
      {
        label: item,
        id: Date.now().toString(),
        done: false,
        important: false,
      },
      ...data,
    ]);
  };

  const dataFilter = (activeData) => {
    if (activeData === "active") {
      return view.filter((item) => !item.done);
    } else if (activeData === "done") {
      return view.filter((item) => item.done);
    } else return view;
  };

  const contentApp = () => {
    return (
      <>
        <TodoHeader data={data} />
        <TodoSearch
          setActive={setActive}
          data={data}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList
          data={dataFilter(activeData)}
          setSearchValue
          deleteItem={deleteItem}
          importantItem={importantItem}
          doneItem={doneItem}
        />
        <TodoAdd dataAdd={dataAdd} />
      </>
    );
  };

  return (
    <StyleApp>
      {a500 ? (
        <AppWrapper>{contentApp()}</AppWrapper>
      ) : (
        <AppWrapper500>{contentApp()}</AppWrapper500>
      )}
    </StyleApp>
  );
};

export default App;
