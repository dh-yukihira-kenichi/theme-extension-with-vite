import { type JSX } from "preact";

type ButtonProps = {
  onHandleClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
  children: preact.ComponentChildren;
};

export const Button = ({ onHandleClick, children }: ButtonProps) => (
    <button onClick={onHandleClick} className="tw-bg-black tw-px-20 tw-py-4 tw-text-white">
      {children}
    </button>
  );
