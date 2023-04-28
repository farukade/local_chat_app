import React from "react";
import AlertError from "./Components/Common/Alerts/AlertError";
import DeleteModal from "./Components/Common/DeleteModal";

function App() {
  const onClose = () => {};
  const onDeleteClick = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <AlertError />
        <DeleteModal
          show={true}
          onCloseClick={onClose}
          onDeleteClick={onDeleteClick}
        />
      </header>
    </div>
  );
}

export default App;
