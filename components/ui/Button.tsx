import { ButtonProps } from "@/types/button";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  type = "button",
  onClick,
  className,
  variant = 'text',
  size = 'normal',
  iconAlign,
  Icon = FaArrowRight
}: ButtonProps) => {
  const baseStyle = "rounded-lg text-p cursor-pointer";
  const variantStyle = {
    text: "text-primary hover:bg-primary/10",
    primary: "bg-primary text-white95 hover:bg-[hsl(205,100%,35%)]",
    secondary: "bg-secondary text-white95 hover:bg-[hsl(346,98%,42%)]",
    outlined: "ring ring-primary/60 text-primary hover:ring-primary hover:bg-primary/5"
  }[variant];
  const sizeStyle = {
    normal: "py-4 px-8",
    sm: "py-3 px-6"
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className} flex items-center gap-x-4 transition-colors duration-300 ease-in-out`}
    >
      {iconAlign && (
        <Icon className="w-4 h-4" />
      )}
      {children}
      {!iconAlign && (
        <Icon className="w-4 h-4" />
      )}
    </button>
  );
};

export default Button;