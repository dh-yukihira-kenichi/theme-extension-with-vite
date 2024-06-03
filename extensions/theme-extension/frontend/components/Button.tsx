import { JSX } from "preact";

type ButtonProps = {
  onHandleClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
  children: preact.ComponentChildren;
};

export const Button = ({ onHandleClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onHandleClick}
      className="tw-py-4 tw-px-20 tw-text-white tw-bg-black"
    >
      {children}
    </button>
  );
};
