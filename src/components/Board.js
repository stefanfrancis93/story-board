import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import List from "./List";
import AddList from "./AddItem";
import { fetchLists } from "../actions";

class Board extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  renderLists = () =>
    this.props.lists.map((list, index) => (
      <List
        list={list}
        key={index}
        index={index}
        dispatch={this.props.dispatch}
      />
    ));

  handleOnDrop = list => {
    console.log(list);
  };

  render() {
    return (
      <div
        className="board"
        style={{
          padding: "10px 5px"
        }}
      >
        <h1
          className="main-title"
          style={{
            fontSize: 30,
            color: "#fff",
            fontFamily: "fantasy",
            textAlign: "center"
          }}
        >
          Story Board
        </h1>
        {this.renderLists()}
        <AddList
          item="list"
          index={this.props.index}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists.columns };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ fetchLists }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
