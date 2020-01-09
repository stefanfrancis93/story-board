import React, { useRef } from "react";
import Board from "./Board";
import DragAndDrop from "./DragAndDrop";

const App = () => {
  return (
    <main style={{ height: "100%" }}>
      <DragAndDrop>
        <Board />
      </DragAndDrop>
    </main>
  );
};

export default App;
