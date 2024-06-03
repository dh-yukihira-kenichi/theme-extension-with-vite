type ButtonProps = {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
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