import { cva, VariantProps } from "class-variance-authority"

const buttonStyles = cva(" transition-colors", {
  variants: {
    intent: {
      primary: "bg-red-500 hover:bg-red-900",
      secondary: " hover:bg-green-900 bg-green-500",
    },
    size: {
      lg: "w-96 h-96",
      md: "w-64 h-64",
      normal: "w-40 h-40",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "normal",
  },
})

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, size, ...props }: Props) => (
  <button className={buttonStyles({ intent, size })} {...props} />
)
