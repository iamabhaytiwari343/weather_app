
import './App.css';
import { app } from './firebaseconfig';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <Navbar />
        Hello world!
      </h1>
    </div>
  );
}

export default App;
