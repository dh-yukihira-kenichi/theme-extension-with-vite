type ButtonProps = {
  readonly onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  readonly children: React.ReactNode;
};

export const Button = ({ onHandleClick, children }: ButtonProps) => (
  <button className="tw-bg-black tw-px-20 tw-py-4 tw-text-white" onClick={onHandleClick}>
    {children}
  </button>
);
