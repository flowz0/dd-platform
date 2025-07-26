import { ButtonProps } from "@/types/button";

const Button = ({
  children,
  type = "button",
  onClick,
  className,
  variant = 'text'
}: ButtonProps) => {
  const baseStyle = "py-4 px-8 rounded-lg text-p cursor-pointer";
  const variantStyle = {
    text: "text-primary hover:bg-primary/10",
    primary: "bg-primary text-white95 hover:bg-[hsl(205,100%,35%)]",
    secondary: "bg-secondary text-white95 hover:bg-[hsl(346,98%,42%)]",
    outlined: "ring ring-primary/60 text-primary hover:ring-primary hover:bg-primary/5"
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;