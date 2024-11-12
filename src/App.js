import TodoApp from "./components/TodoApp/TodoApp";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Lista de quehaceres</h1>
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
