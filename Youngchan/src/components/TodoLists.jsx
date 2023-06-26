import React from "react";
import * as Styled from "../styled";

function TodoLists({title, type, todoList, onDeteleHandler, onDoneHandler }) {
  return (
    <>
      <div>{title}</div>
      <Styled.TodoBoxLayout>
        {todoList
          .filter((item) => item.state === type)
          .map((item) => (
            <Styled.TodoBox key={item.id}>
              <p>{item.title}</p>
              <p>{item.content}</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Styled.TodoBtn
                  color="red"
                  onClick={() => onDeteleHandler(item.id)}
                >
                  삭제하기
                </Styled.TodoBtn>
                <Styled.TodoBtn
                  color="teal"
                  onClick={() => onDoneHandler(item.id)}>
                  {item.state ? "취소" : "완료"}
                </Styled.TodoBtn>
              </div>
            </Styled.TodoBox>
          ))}
      </Styled.TodoBoxLayout>
    </>
  );
}

export default TodoLists;
