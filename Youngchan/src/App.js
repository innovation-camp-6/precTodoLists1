import React from "react";
import * as Styled from "./styled";
import { useTodos } from "./hooks/useTodos";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";

function App() {
  const {
    inputTitle,
    inputContent,
    todoList,
    onChangeInput,
    onSubmitHandler,
    onDeteleHandler,
    onDoneHandler,
  } = useTodos();

  return (
    <>
      <Styled.Layout>
        <Header/>
        <Form
          titlevalue={inputTitle}
          contentvalue={inputContent}
          onSubmit={onSubmitHandler}
          onChangeInput={onChangeInput}
        />
        <TodoLists
          title="Working..🍟"
          type={false}
          todoList={todoList}
          onDeteleHandler={onDeteleHandler}
          onDoneHandler={onDoneHandler}
        />
        <TodoLists
          title="Done..🥑"
          type={true}
          todoList={todoList}
          onDeteleHandler={onDeteleHandler}
          onDoneHandler={onDoneHandler}
        />
      </Styled.Layout>
    </>
  );
}

export default App;
