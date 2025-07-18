import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-4xl font-bold text-center flex items-center justify-center min-h-screen">
        Hey there!!!
      </h1>
    </Provider>
  );
}

export default App;
