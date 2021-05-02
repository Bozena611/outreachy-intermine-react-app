import './App.css';
import AllIntermines from './Components/AllIntermines';
import Test from './Components/Test';
import DataTable from './Components/DataTable';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.png';


function App() {

  const gene = "Choose gene";
  const filter = "Choose filter";

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h2>Intermine Query Builder</h2>
        <h3>Test React App</h3>
        
      </header>
      <div className="table-flex">
        <div className="left-panel">
          <div className="dropdown-space">
            <AllIntermines />
          </div>
          <div className="dropdown-space">
            <Test title={gene}/>
          </div>
          <div className="dropdown-space">
            <Test title={filter}/>
          </div>
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
