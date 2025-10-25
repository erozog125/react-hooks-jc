import './Counter.css'

export const Counter = () => {
  return (
    <div className='counter'>
      <h1>Counter: 0</h1>
      <hr />
      <div className="controllers">
        <button>+1</button>
        <button>Reset</button>
        <button>-1</button>
      </div>
    </div>
  )
}
