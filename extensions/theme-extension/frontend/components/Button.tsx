import { type ComponentChildren, type JSX } from "preact";

type ButtonProps = {
  readonly onHandleClick: (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => void;
  readonly children: ComponentChildren;
};

export const Button = ({ onHandleClick, children }: ButtonProps) => (
  <button className="tw-bg-black tw-px-20 tw-py-4 tw-text-white" onClick={onHandleClick}>
    {children}
  </button>
);
