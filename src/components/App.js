import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Board from "./Board";

class App extends React.Component {
  render() {
    return (
      <main style={{ height: "100%" }}>
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </main>
    );
  }
}

export default App;
