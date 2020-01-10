import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Board from "./Board";
import Popup from "./Popup";

class App extends React.Component {
  state = { show: false, card: [] };
  handleCardClick = card => {
    this.openModal();
    this.setState({ card });
  };
  openModal = () => {
    this.setState({ show: true });
  };
  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main style={{ height: "100%" }}>
        <DndProvider backend={HTML5Backend}>
          <Board handleCardClick={this.handleCardClick} />
          <Popup
            show={this.state.show}
            close={this.closeModal}
            card={this.state.card}
          />
        </DndProvider>
      </main>
    );
  }
}

export default App;
