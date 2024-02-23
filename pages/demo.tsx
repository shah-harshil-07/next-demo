import { useState, useCallback, useMemo } from "react";
import TodoList from "../components/todo-list";

export default function Demo() {
    const [text, setText] = useState("");

    const [todos, setTodos] = useState([
        { id: "todo-1", name: "First Todo" },
        { id: "todo-2", name: "Second Todo" }
    ]);

    const handleChangeText = (event: any) => {
        setText(event.target.value);
    };

    const handleAddTodo = () => {
        setTodos(todos.concat({ id: "todo-" + todos.length + 1, name: text }));
        setText("");
    };

    const handleRemoveTodo = useCallback((id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }, [todos]);

    const expensiveCalculation = useMemo(() => {
        console.log("expensive calculation running...");

        let num = 0;
        for (let i = 0; i < todos.length; i++) {
            num += i;
        }

        return num;
    }, [todos]);

    return (
        <div className="container">
            <h2>Demo Page</h2>

            <div>
                <input type="text" value={text} onChange={handleChangeText} />&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-primary" onClick={handleAddTodo}> Add Todo </button>
                <TodoList list={todos} onRemove={handleRemoveTodo} calculation={expensiveCalculation} />
            </div>
        </div>
    );
}