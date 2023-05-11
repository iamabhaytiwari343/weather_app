import Search from "./components/Search.jsx"
import './App.css';
import Weather from "./components/Weather.jsx";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <Weather />
    </div>
  );
}

export default App;
