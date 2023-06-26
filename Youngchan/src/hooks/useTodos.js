import { useState } from "react"
import { todoLists } from "../js/todo"

export const useTodos = () => {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const [todoList, setTodoLists] =  useState(todoLists)

    // CREATE - INPUT
    const onChangeInput = (e, type) => {
      switch (type) {
        case "title":
          setInputTitle(e.target.value);
          break;
        case "content":
          setInputContent(e.target.value);
          break;
        default:
      }
    }

  // CREATE - SUBMIT
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const createTodo = {
      id:Date.now(),
      title:inputTitle,
      content:inputContent,
      state : false
    }

    if(!inputTitle || !inputContent) {
      if(!inputTitle && !inputContent) {
        return alert("제목과 내용 모두 기록해주세요.")
      } else if(!inputTitle) {
        return alert("제목을 기록해주세요.")
      } else if(!inputContent) {
        return alert("내용을 기록해주세요.")
      }
    }

    inputTitle && inputContent && 
    setTodoLists([...todoList, createTodo])
    setInputTitle("")
    setInputContent("")
  }

  // DETELT
  const onDeteleHandler =  (id) => {
    console.log(id)
    setTodoLists([...todoList.filter(idlist => idlist.id !== id)])
  }

  // UPDATE
  const onDoneHandler = (id) => {
    const updateTodo = todoList.findIndex(item => item.id === id)
    todoList[updateTodo].state =!todoList[updateTodo].state
    setTodoLists([...todoList])
  } 
  return {inputTitle, inputContent, todoList, onChangeInput, onSubmitHandler, onDeteleHandler, onDoneHandler}   
}