import React, { useRef } from "react";
import Board from "./Board";
import { createDndContext, DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const App = () => {
  const manager = useRef(createDndContext(HTML5Backend));
  return (
    <main style={{ height: "100%" }}>
      <DndProvider manager={manager.current.dragDropManager}>
        <Board />
      </DndProvider>
    </main>
  );
};

export default App;
