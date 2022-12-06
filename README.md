## Class Variance Authority with TailwindCSS

##### Install
```bash
npm i class-variance-authority
```
##### Create the component
```typescript
import { cva, VariantProps } from "class-variance-authority "

const buttonStyles = cva(" transition-colors" /* <= all of invariants inside this string */ , {
  variants: { /* <= all of variants inside this object */
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


// extends React.HTMLAttributes<HTMLButtonElement> if I want to get all of types from default button
export interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, size, ...props }: Props) => (
  <button className={buttonStyles({ intent, size })} {...props} />
)
```

##### Using the component
```typescript
import { Button } from "./components/button"

export default function Home() {
  return (
    <div>
      <Button intent="secondary" onClick={(e) => alert("Hello World")} />
      // onClick is provided by {...props} and typed by React.HTMLAttributes<HTMLButtonElement> * line 32 *
    </div>
  )
}
```
