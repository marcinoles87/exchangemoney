
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Group from './components/Group';
import Group2 from './components/Group2';

function App() {
  return (
<>


<ul>
  <li><Link to="/"> Home</Link></li>
  <li><Link to="/group1"> Group1</Link></li>
  <li><Link to="/group2"> Group2</Link></li>
  
</ul>


    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/group1' element={<Group></Group>} />
      <Route path='/group2' element={<Group2></Group2>} />

    
    </Routes>
    
  </>
  );
}

export default App;
