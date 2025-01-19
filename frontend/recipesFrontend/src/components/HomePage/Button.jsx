import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"],
      light: ["bg-gray-700", "hover: bg-gray-100"]

    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function Button({ variant, size, className, ...props }) {
  return (
    <button
      {...props}
      className={clsx(buttonStyles({ variant, size }), className)}
    ></button>
  );
}

