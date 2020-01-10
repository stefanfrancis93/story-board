import React from "react";
import { DropTarget } from "react-dnd";
import PropTypes from "prop-types";
import constants from "../constants";
import Card from "../components/Card";
import { swapCard } from "../actions";

const cardDropTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const data = {
      src: {
        columnIndex: item.parentIndex,
        cardIndex: item.index
      },
      target: {
        columnIndex: props.parentIndex,
        cardIndex: props.index
      }
    };
    if (!item.parentIndex || !item.index || !props.parentIndex || !props.index)
      return;
    props.dispatch(swapCard(data.src, data.target));
  },
  canDrop() {
    return true;
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const CardDropHolder = ({
  isOver,
  connectDropTarget,
  card,
  handleRemoveCard,
  index,
  parentIndex
}) =>
  connectDropTarget(
    <div style={{ opacity: isOver ? 0.5 : 1 }}>
      <Card
        createdAt={card.createdAt}
        description={card.description}
        index={index}
        card={card}
        parentIndex={parentIndex}
        handleRemoveCard={handleRemoveCard}
      />
    </div>
  );
CardDropHolder.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  parentIndex: PropTypes.number.isRequired,
  handleRemoveCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
};
export default DropTarget(
  constants.CARD,
  cardDropTarget,
  collect
)(CardDropHolder);
