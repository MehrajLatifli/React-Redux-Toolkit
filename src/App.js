import './App.css';
import Header from './Components/Header'
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';


function App() {
  return (
  <div className="App">
    <Header/>
    <AddTodo/>
    <TodoItems/>
  </div>
);
}

export default App;
