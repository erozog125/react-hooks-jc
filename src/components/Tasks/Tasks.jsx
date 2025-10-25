import './Tasks.css'

export const Tasks = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <hr />
      <input type="text" className="input-task" placeholder='Inserta nueva tarea' />
      <ul>
        <li className='active'><input type="checkbox" name="" id="" /><span>Limpiar</span></li>
        <li className='active'><input type="checkbox" name="" id="" /><span>Barrer</span></li>
        <li className='active'><input type="checkbox" name="" id="" /><span>Hacer tareas</span></li>        
      </ul>
    </div>
  )
}
