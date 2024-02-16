import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState<string>("");
  const handleClick = () => {
    setValue("X");
  };
  return (
    <button className="h-16 w-16 border" onClick={handleClick}>
      {value}
    </button>
  );
}
