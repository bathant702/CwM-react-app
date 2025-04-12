import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Test from "../components/Test";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click ME
      </Button>

      <Test></Test>
    </div>
  );
}

export default App;
