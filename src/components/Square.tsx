type SquareProps = {
  value: "X" | "O" | null | number;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      onClick={onSquareClick}
      className="h-16 border flex items-center justify-center w-16"
    >
      {value}
    </button>
  );
}
