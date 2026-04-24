import "./TodoItem.css"

export interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void
}

export const TodoItem = ({ id, title, completed, onToggle }: TodoItemProps) => {
  return (
    <button
      onClick={() => onToggle(id)}
      className={`todoItem ${completed ? "isCompleted" : ""}`}
    >
      <span className="todoTitle">{title}</span>
      <span className="todoStatus">
        {completed ? "✔ Splněno" : "❌ Nesplněno"}
      </span>
    </button>
  );
};