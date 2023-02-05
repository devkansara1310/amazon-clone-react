import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './Header'
function App() {
  return (
      <Routes>
        <Route path='/checkout' />
        <Route path='/login' />
        <Route path=''element={<Header />} />

        {/* <div className="app">
          <h1>Lets build amazon clone</h1>
        </div> */}
      </Routes>
  );
}

export default App;
