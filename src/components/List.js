import React from "react";
import { DropTarget } from "react-dnd";
import constants from "../constants";
import CardDropHolder from "./CardDropHolder";
import AddItem from "./AddItem";
import { shiftCard, removeCard } from "../actions";

const columnTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    if (item.parentIndex === props.index) {
      return undefined;
    }
    props.dispatch(
      shiftCard(
        {
          index: item.parentIndex,
          cardIndex: item.index
        },
        {
          index: props.index
        }
      )
    );
  },
  canDrop(props) {
    return props.list.title && props.list.title.length;
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class List extends React.Component {
  renderCards = () =>
    this.props.list.cards.map((card, index) => (
      <CardDropHolder
        card={card}
        key={index}
        dispatch={this.props.dispatch}
        handleRemoveCard={this.handleRemoveCard}
        index={index}
        parentIndex={this.props.index}
      />
    ));

  handleRemoveCard = cardIndex => {
    return () => this.props.dispatch(removeCard(cardIndex, this.props.index));
  };

  render() {
    return this.props.connectDropTarget(
      <div
        className="list-wrapper"
        style={{
          ...styles.listWrapper,
          opacity: this.props.isDragging ? 0.25 : 1
        }}
      >
        <div className="list" style={styles.list}>
          <div className="list-header" style={styles.header}>
            <h2 className="list-header-name" style={styles.headerName}>
              {this.props.list.listTitle}
            </h2>
          </div>
          <div className="list-cards" style={styles.listCards}>
            {this.renderCards()}
          </div>
          <AddItem
            item="card"
            index={this.props.index}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  listWrapper: {
    width: 272,
    margin: "0 4px",
    height: "100%",
    boxSizing: "border-box",
    display: "inline-block",
    verticalAlign: "top",
    whiteSpace: "nowrap"
  },
  list: {
    backgroundColor: "#ebecf0",
    borderRadius: 3,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    position: "relative",
    whiteSpace: "normal"
  },
  header: {
    flex: "0 0 auto",
    padding: "10px 8px",
    position: "relative",
    minHeight: 20
  },
  headerName: {
    padding: "4px 8px",
    color: "#172b4d"
  },
  listCards: {
    flex: "1 1 auto",
    marginBottom: 0,
    overflowY: "auto",
    overflowX: "hidden",
    margin: "0 4px",
    padding: "0 4px",
    zIndex: 1,
    minHeight: 0
  }
};

export default DropTarget(constants.CARD, columnTarget, collect)(List);
