import './App.css';
import { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasksFromAPI();
  }, []);

  const fetchTasksFromAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Define a function to handle task click events
  const handleTaskClick = (clickedTask) => {
    console.log('Task clicked:', clickedTask.title);
    // You can perform any other action here based on the clicked task
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          // Pass the handleTaskClick function as a prop to TaskItem
          <TaskItem key={task.id} task={task} onClick={handleTaskClick} />
        ))}
      </ul>
    </div>
  );
}

function TaskItem({ task, onClick }) {
  const handleClick = () => {
    // Call the onClick function and pass the task as an argument
    onClick(task);
  };

  return (
    <li>
      <h2>{task.title}</h2>
      {/* Add onClick event to the <p> tag */}
      <p onClick={handleClick}>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </li>
  );
}

function Tasks({title}) {

  const[Tasks, setTasks] = useState([])
  useEffect(() => {
    console.log('Anything')
    setTasks([
    {
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false,
    },
    {
      title: 'Task 2',
      description: 'Description for Task 2',
      completed: true,
    },
    {
      title: 'Task 3',
      description: 'Description for Task 3',
      completed: false,
    }])
  },[])

  return(
    <div>
      <h1> {title } </h1>
      <div>
      <ul>
        {Tasks.map((task, index) => (
          <li key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      < TaskList title='Tasks1'/>
      < Tasks title='Tasks2'/>
    </div>
  );
}

export default App;
