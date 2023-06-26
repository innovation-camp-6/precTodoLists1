import "./App.css";
import React, { useState } from "react";
import TodoLayout from "./components/TodoLayout";

function App() {
  const [todo, setTodo] = useState("");
  const [cards, setCards] = useState([]);
  const [content, setContent] = useState("");
  const [nextId, setNextId] = useState(1);

  const addCard = () => {
    const newCard = {
      id: nextId,
      title: todo,
      done: false,
      content: content,
    };

    setCards([...cards, newCard]);
    setTodo("");
    setContent("");
    setNextId(nextId + 1);
  };

  const markAsDone = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, done: !card.done };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  console.log(cards);

  {
    /* ------------------------------------------------------------------------------ */
  }

  return (
    <div className="App">
      {/* 나브박스 */}
      <div className="box-nav">
        <div className="nav-text1">
          <h4>My Todo List</h4>
        </div>
        <div className="nav-text2">
          <h4>React</h4>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}

      {/* 제목,내용박스 */}
      <div className="list">
        <div className="input-container">
          <label className="labelInput1">제목</label>
          <input
            className="titleInput1"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <label className="labelInput2">내용</label>
          <input
            className="titleInput2"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="titleButton" onClick={addCard}>
          추가하기
        </button>
      </div>

      {/* ------------------------------------------------------------------------------ */}

      {/* Working 영역 */}
      <TodoLayout
        title="Working...🔥"
        cards={cards}
        deleteCard={deleteCard}
        markAsDone={markAsDone}
        isDone={false}
      />
      

      {/* ------------------------------------------------------------------------------ */}

      {/* Done 영역 */}
      <TodoLayout
        title="Done...🎉"
        cards={cards}
        deleteCard={deleteCard}
        markAsDone={markAsDone}
        isDone={true}
      />
      
    </div>
  );
}

export default App;
