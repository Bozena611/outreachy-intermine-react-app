import './App.css';
import AllIntermines from './Components/AllIntermines';
import DataTable from './Components/DataTable';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Intermine Query Builder</h2>
        <h3>Test React App</h3>
        <AllIntermines />
      </header>
      <DataTable />
    </div>
  );
}

export default App;
