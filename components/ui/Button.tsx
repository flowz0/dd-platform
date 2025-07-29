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
  Icon = FaArrowRight,
  dataToken,
  dataOrgname
}: ButtonProps) => {
  const baseStyle = "rounded-lg text-p cursor-pointer";
  const variantStyle = {
    text: "bg-primary/10 text-primary hover:shadow-lg hover:shadow-primary/5",
    primary: "bg-primary text-white95 hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-secondary text-white95 hover:shadow-lg hover:shadow-secondary/10",
    outlined: "text-white95 bg-white25 hover:shadow-lg hover:shadow-white75/20"
  }[variant];
  const sizeStyle = {
    normal: "py-4 px-8",
    sm: "py-3 px-6"
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      data-token={dataToken}
      data-orgname={dataOrgname}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className} flex items-center gap-x-4 transition-all duration-300 delay-150 ease-in-out hover:-translate-y-1 active:-translate-y-0`}
    >
      {iconAlign && (
        <div>
          <Icon className="w-4 h-4" />
        </div>
      )}
      {children}
      {!iconAlign && (
        <div>
          <Icon className="w-4 h-4" />
        </div>
      )}
    </button>
  );
};

export default Button;