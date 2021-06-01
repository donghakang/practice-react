import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
    const todosComponent = todosData.map(item => <TodoItem key={item.id} item={item}/>);

    return (
        <div className="todo-list">
            {todosComponent}
        </div>
    );
}

export default App;
