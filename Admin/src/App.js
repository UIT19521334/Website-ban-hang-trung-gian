import "./App.css";
import "boxicons/css/boxicons.min.css";
import App_route from "./components/app_route/App_route";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <App_route />
    </BrowserRouter>
  );
}

export default App;
