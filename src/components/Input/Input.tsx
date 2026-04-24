import "./Input.css"

interface InputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ( {value, handleChange}: InputProps) => {

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Sem napiš úkol"
    />
  );
}