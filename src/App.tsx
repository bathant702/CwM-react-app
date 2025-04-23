import { useState } from "react";
import ListGroup from "../components/ListGroup/ListGroup";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;
