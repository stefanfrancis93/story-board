import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card" },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <div
      className="list-card"
      style={{ ...styles.listCard, opacity: isDragging ? 0.5 : 1 }}
      ref={drag}
    >
      <div className="list-card-details" style={styles.listCardDetails}>
        <span className="list-card-title">{card.title}</span>
        <span className="list-card-description" style={{ display: "none" }}>
          {card.description}
        </span>
      </div>
    </div>
  );
};

const styles = {
  listCard: {
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: "0 1px 0 rgba(9,30,66,.25)",
    cursor: "pointer",
    display: "block",
    marginBottom: 8,
    maxWidth: 300,
    minHeight: 20,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  listCardDetails: {
    overflow: "hidden",
    padding: "6px 8px",
    position: "relative",
    zIndex: 10
  }
};

export default Card;
