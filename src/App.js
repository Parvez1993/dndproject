import "./App.css";
import Homepage from "./component/Homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Homepage />
      </DndProvider>
      {/* //the entire app structure is included in the homepage */}
    </div>
  );
}

export default App;
