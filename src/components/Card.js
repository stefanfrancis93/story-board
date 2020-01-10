import React from "react";
import { DragSource } from "react-dnd";
import constants from "../constants";

const CardSource = {
  beginDrag(props) {
    return props;
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
const Card = ({
  card,
  handleRemoveCard,
  index,
  createdAt,
  description,
  connectDragSource,
  isDragging,
  handleCardClick
}) => {
  return connectDragSource(
    <div
      className="list-card"
      style={styles.listCard}
      onClick={() => handleCardClick(card)}
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

export default DragSource(constants.CARD, CardSource, collect)(Card);
