import {useState} from 'react'

const SideMenu = () => {

  // creates local state to SideMenu with the count variable, adds function to set state of count variable
  const [ count, setCount ] = useState(0)

  // ^^ three line way to do the above ^^
  // const stateArray = useState(0)
  // const count = stateArray[0]
  // const setCount = stateArray[1]

  const increment = () => {
    setCount(count + 1)
}
    
const decrement = () => {
    setCount(count - 1)
}

  return (
    <div>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
      <div>
        <button onClick={increment} className="btn btn-primary">Increment Number</button>
        <button onClick={decrement} className="btn btn-primary">Decrement Number</button>
        <h1>{count}</h1>
      </div>
    </div>
  )
}

export default SideMenu