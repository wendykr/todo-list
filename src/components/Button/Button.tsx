import "./Button.css"

export interface ButtonProps {
  handleAdd: () => void
}

export const Button = ( { handleAdd }: ButtonProps) => {

  return (
    <button className="button" onClick={handleAdd}>
      Přidat úkol
    </button>
  );
} 