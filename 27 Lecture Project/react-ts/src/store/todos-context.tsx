import React, { useState } from "react";
import Todo from "../models/todo";

type todosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});


const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      setTodos((prevTodos) => prevTodos.concat(newTodo));
    };
  
    const removeToDoHandler = (todoId: string) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };
  

    const contextValue: todosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeToDoHandler
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};

export default TodosContextProvider;