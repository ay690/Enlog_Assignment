import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex overflow-auto">
         <Sidebar />
         <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 pt-6">
             <Routes>
              <Route path = "/" element = {<Dashboard />} />
             </Routes>
            </main>
         </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
