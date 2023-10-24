import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
}

const Button = ({ children, disabled, isLoading, ...rest }: ButtonProps) => {
  return (
    <button data-testid="button" disabled={isLoading || disabled} {...rest}>
      {isLoading ? <span className="btn-loading">Loading</span> : children}
    </button>
  );
};

export default Button;
