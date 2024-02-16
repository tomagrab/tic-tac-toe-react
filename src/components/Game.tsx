import Board from "@/components/Board";
import { useState } from "react";

export default function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<number[]>(Array(9).fill(null));
  const currentSquares = history[history.length - 1];
  const handlePlay = (nextSquares: number) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={() => handlePlay}
        />
      </div>
      <div>
        <ol>{/* ToDO */}</ol>
      </div>
    </div>
  );
}
