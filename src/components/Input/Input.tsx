interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  type,
  placeholder,
  value,
  id,
  onChange,
  maxLength,
}: InputProps) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
