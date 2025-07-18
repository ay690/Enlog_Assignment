import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex overflow-auto">
         <Sidebar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
