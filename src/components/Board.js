import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";
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

export default connect(mapStateToProps, { fetchLists })(Board);
