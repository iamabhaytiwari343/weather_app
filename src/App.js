import Search from "./components/Search.jsx"
import './App.css';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
