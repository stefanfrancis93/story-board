import React from "react";
import Card from "./Card";
import AddList from "./AddItem";
import { useDrag, useDrop } from "react-dnd";

const List = ({ list }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "list" },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (props, monitor, component) => console.log(props),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const renderCards = () =>
    list.cards.map(card => <Card card={card} key={card.id} />);

  return (
    <div className="list-wrapper" style={styles.listWrapper}>
      <div className="list" style={styles.list} ref={drag}>
        <div className="list-header" style={styles.header}>
          <h2 className="list-header-name" style={styles.headerName}>
            {list.listTitle}
          </h2>
        </div>
        <div className="list-cards" style={styles.listCards} ref={drop}>
          {renderCards()}
        </div>
        <AddList item="card" />
      </div>
    </div>
  );
};

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

export default List;
