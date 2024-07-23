interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  btnName?: string;
}

function Button({ type, className, onClick, btnName }: ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {btnName}
      </button>
    </>
  );
}

export default Button;
