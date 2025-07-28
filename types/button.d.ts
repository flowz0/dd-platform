import { ElementType } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  variant?: 'text' | 'primary' | 'secondary' | 'outlined'
  size?: 'sm' | 'normal'
  iconAlign?: boolean;
  Icon?: ElementType;
}