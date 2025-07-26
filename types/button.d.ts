export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  variant?: 'text' | 'contained' | 'outlined'
}