import React from 'react'
import CardList from "./CardList";

function TodoLayout({title, cards, deleteCard, markAsDone, isDone}) {
  return (
    <div className="working">
        <h2 className="working-title">{title}</h2>
        <div className="card-list">
          {cards.map((card) => {
            if (card.done === isDone) {
              return (
                <CardList
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
  )
}

export default TodoLayout