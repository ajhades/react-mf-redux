import { lazy, Suspense } from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import { Provider } from "react-redux";
import store from "./redux/store";
const RemoteApp = lazy(() => import("app_remote/RemoteApp"));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Lista de quehaceres</h1>
        <TodoApp />
        <Suspense fallback={<div>Loading Remote App...</div>}>
          <RemoteApp />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
