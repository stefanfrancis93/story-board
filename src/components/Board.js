import React, { useEffect } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { useDrop, DropTarget } from "react-dnd";
import List from "./List";
import AddList from "./AddItem";
import { fetchLists } from "../actions";

const Board = ({ lists, fetchLists }) => {
  useEffect(() => {
    fetchLists();
  }, []);

  const [{ isOver }, drop] = useDrop({
    accept: "list",
    drop: (props, monitor, component) => console.log(props),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const renderLists = () =>
    lists.map(list => <List list={list} key={list.id} />);

  return (
    <div className="board" style={{ padding: "10px 5px" }} ref={drop}>
      {renderLists()}
      <AddList item="list" />
    </div>
  );
};

const mapStateToProps = state => {
  return { lists: state.lists };
};

const chessSquareTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem();
    return item.fromPosition, props.position;
  },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can use componentDidUpdate() to handle enter/leave.

    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    const isOnlyThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

const ChessActions = {
  movePiece: (iPos, pos) => {
    console.log(iPos, pos);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

const dropTarget = DropTarget("list", chessSquareTarget, collect)(Board);

export default connect(mapStateToProps, { fetchLists })(dropTarget);
