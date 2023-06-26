import "./App.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

{
  /* ------------------------------------------------------------------------------ */
}

// 카드 컴포넌트
function TodoCard({ card, deleteCard, markAsDone }) {
  const { id, title, content, done } = card;

  return (
    <Card key={id} className="card-box working-card">
      <Card.Body>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="cards-button">
          <button className="card-button1" onClick={() => deleteCard(id)}>
            삭제하기
          </button>
          <button className="card-button2" onClick={() => markAsDone(id)}>
            {done ? "취소" : "완료"}
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

{
  /* ------------------------------------------------------------------------------ */
}

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
      <div className="working">
        <h2 className="working-title">Working...🔥</h2>
        <div className="card-list">
          {cards.map((card) => {
            if (!card.done) {
              return (
                <TodoCard
                  key={card.id}
                  card={card}
                  deleteCard={deleteCard}
                  markAsDone={markAsDone}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}

      {/* Done 영역 */}
      <div className="done">
        <h2>Done...🎉</h2>
        <div className="card-list">
          {cards.map((card) => {
            if (card.done) {
              return (
                <TodoCard
                  key={card.id}
                  card={card}
                  deleteCard={deleteCard}
                  markAsDone={markAsDone}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
