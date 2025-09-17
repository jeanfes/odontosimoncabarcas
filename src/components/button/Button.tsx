import type { JSX } from "react";
import React from "react";
import "./button.scss";

type Design = "primary" | "white" | "ghost";

type ButtonProps = {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  maxWidth?: boolean;
  text?: string;
  design?: Design;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  text,
  loading = false,
  disabled = false,
  maxWidth = false,
  design = "primary",
  className = "",
  ...rest
}) => {
  const designClass = `btn--${design}`;
  const fullClass = maxWidth ? "btn--full" : "";

  const isDisabled = disabled || loading;

  return (
    <button
      type={rest.type ?? "button"}
      className={`btn ${designClass} ${fullClass} ${className}`.trim()}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {iconLeft && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {iconLeft}
        </span>
      )}

      <span className="btn__content">
        {loading ? <span className="btn__spinner" aria-hidden="true" /> : text}
      </span>

      {iconRight && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
