import './App.css';
import Header from './components/Header';

function App() {
  const name = "Piyush";
  const x = true;
  return (
    <div className="App">
        <h1>Hello From React</h1>
        <h2>Hello {name}</h2>
        <h3>Hello {x?'Yes':'No'}</h3>
        <Header/>
    </div>
  );
}

export default App;
