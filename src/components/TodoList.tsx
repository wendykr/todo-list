import { useState } from "react";
import { TodoItem, type TodoItemProps } from "./TodoItem"
import "./TodoList.css";

type TodoItemData = Omit<TodoItemProps, "onToggle">;

const exampleData: TodoItemData[] = [
  {
    id: 1,
    title: "Vyvenčit psa",
    completed: false,
  },
  {
    id: 2,
    title: "Odpovědět na e-maily",
    completed: true,
  },
  {
    id: 3,
    title: "Uklidit pokoj",
    completed: false,
  },
];

export const TodoList = () => {

  const [items, setItems] = useState<TodoItemData[]>(exampleData);
  const [value, setValue] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleAdd = (): void => {
    const newTodoItem = { id: Date.now(), title: value, completed: false };
    setItems((prev => [...prev, newTodoItem]));
  };

  const handleToggle = (id: number): void => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            completed: !item.completed,
          };

          return updatedItem;
        }

        return item;
      });
    });
  };

  return (
    <div>
      <div className="todoInputRow">
        <input
          className="todoInput"
          type="text"
          name={value}
          onChange={handleChange}
        />
        <button className="todoButton" onClick={handleAdd}>
          Přidat úkol
        </button>
      </div>
      {items.map((item) => (
        <TodoItem
          id={item.id}
          title={item.title}
          completed={item.completed}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}