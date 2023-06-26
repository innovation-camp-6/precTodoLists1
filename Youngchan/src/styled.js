import { styled } from "styled-components"

const Form = styled.form`
  box-sizing: content-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:10px;

  input {
    display: block;
    width: 100%;
  }
`

const Layout = styled.div`
  box-sizing: content-box;
  min-width: 800px;
  width: 1200px;
  margin: 0 auto;
`

const TodoBoxLayout = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

`

const TodoBox = styled.div`
  box-sizing: content-box;
  width: 300px;
  height: 150px;
  border: 2px solid teal;
  border-radius: 10px;
  padding: 2rem;
`

const TodoBtn = styled.div`
  border: 1px solid ${({color}) => color};
  border-radius: 10px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer
`

export {Form, Layout, TodoBoxLayout, TodoBox, TodoBtn};