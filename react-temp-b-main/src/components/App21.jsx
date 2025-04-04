import React from "react";
import { useEffect, useState } from "react";
export default function App21() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  const handleClick = () => {
    setCount(count+1)
    console.log("Component Updated / Reloaded")
  }
  return (
    <div>
      <h3>This is App21</h3>
      <button onClick={handleClick}>Click</button>
      <p>
        {count}
      </p>
    </div>
  );
}