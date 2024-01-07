import React from "react";

interface Card {
  image: string;
  title: string;
  description: string;
}

interface CardListProps {
  cards: Card[];
}

const CardList = () => {
  const cards: Card[] = [];

  return (
    <div>
      {/* Your card list content */}
      {cards.map((card, index) => (
        <div key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
