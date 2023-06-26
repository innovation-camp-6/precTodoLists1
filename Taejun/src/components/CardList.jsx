import React from "react";
import Card from "react-bootstrap/Card";

// 카드 컴포넌트
function CardList({ card, deleteCard, markAsDone }) {
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

export default CardList;
