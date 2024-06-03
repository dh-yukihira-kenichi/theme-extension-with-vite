import { useState } from "react";
import { Button } from "../components/Button";

export const App = () => {
  const element = document.getElementById("dh-root");

  const dataStart = element?.getAttribute("data-start") ?? "0";
  const start = parseInt(dataStart, 10);

  const title = element?.getAttribute("data-title") ?? "dummy";

  const [count, setCount] = useState(start);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, operand: number) => {
    event.preventDefault();
    setCount(count + operand);
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="tw-grid tw-grid-cols-[1fr_auto_auto] tw-items-center tw-gap-5">
        <p className="tw-text-5xl">{count}</p>
        <Button onHandleClick={(e) => handleButtonClick(e, -1)}>-1</Button>
        <Button onHandleClick={(e) => handleButtonClick(e, 1)}>+1</Button>
      </div>
    </>
  );
};
