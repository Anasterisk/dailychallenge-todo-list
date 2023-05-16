
import { useState, useEffect} from 'react'
function App() {
 let [value, setValue] = useState([])

 const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(value)
 }
 const handleChange = (event)=>{
  const newValue =  event.target.value
  setValue(newValue)
 }

 useEffect(()=>{
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  if(storedTasks){
    setValue(storedTasks)
  }
 }, [])
 
 const updateTasks= (newTasks)=>{
  setValue(newTasks)
  localStorage.setItem('tasks', JSON.stringify(newTasks))
 }

 const handleKeyDown = (event)=>{
  if (event.key === 'Enter'){
    handleSubmit(event)
  }
 } 



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button type='submit'>Submit</button>
      </form>
      
      
    </div>

  );
}

export default App;
