import Square from "@/components/Square";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  return (
    <div>
      <div className="grid grid-rows-3 grid-cols-3">
        {squares.map((_, i) => (
          <Square
            key={i}
            value={squares[i]}
            onClick={() => {
              const nextSquares = squares.slice();
              nextSquares[i] = "X";
              setSquares(nextSquares);
            }}
          />
        ))}
      </div>
    </div>
  );
}
