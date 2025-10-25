import { Tasks } from "./components/Tasks/Tasks"
import { Counter } from "./components/Counter/Counter"
import { Background } from "./components/Background/Background"

export const App = () => {
  return (
    <div className="app">
      <Background />
      <Counter />      
    </div>
  )
}
