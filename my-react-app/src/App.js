// App.js
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/routes/Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div className="app-container">
        <Router />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
