import { Button } from "./components/button"

export default function Home() {
  return (
    <div>
      <Button intent="secondary" onClick={(e) => alert("Hello World")} />
    </div>
  )
}
