import Hoc from './Component/Hoc';
import Counter from './Component/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hoc bgColor="red" cmp={ <Counter /> } />
      <Hoc bgColor="blue" cmp={ <Counter /> } />
      <Hoc bgColor="green" cmp={ <Counter /> } />
    </div>
  );
}

export default App;
