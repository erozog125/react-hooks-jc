import { Tasks } from "./components/Tasks/Tasks"
import { Counter } from "./components/Counter/Counter"
import { Background } from "./components/Background/Background"
import { Menu } from "./components/Menu/Menu"

export const App = () => {
  return (
    <div className="app">
      <Menu />
      <Background />
      <Counter />      
      <Tasks />
    </div>
  )
}
