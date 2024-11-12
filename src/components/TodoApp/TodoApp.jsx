import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import AddItem from "../AddItem/AddItem";

function TodoApp() {
  return (
    <div className="row">
      <section className="col-6">
        <TodoList />
      </section>
      <aside className="col-4">
        <AddItem />
      </aside>
    </div>
  );
}

export default TodoApp;
